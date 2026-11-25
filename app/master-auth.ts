import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const COOKIE = "seo_crm_session";
const MAX_AGE = 60 * 60 * 12;

function secret() {
  const value = process.env.AUTH_SECRET;
  if (!value || value.length < 32) throw new Error("AUTH_SECRET não configurado ou muito curto.");
  return value;
}

function sign(payload: string) { return createHmac("sha256", secret()).update(payload).digest("base64url"); }

export function validCredentials(username: string, password: string) {
  const expectedUser = process.env.MASTER_USERNAME;
  const expectedPassword = process.env.MASTER_PASSWORD;
  if (!expectedUser || !expectedPassword) return false;
  const a = Buffer.from(`${username}\0${password}`); const b = Buffer.from(`${expectedUser}\0${expectedPassword}`);
  return a.length === b.length && timingSafeEqual(a, b);
}

export function createSessionToken(username: string) {
  const payload = Buffer.from(JSON.stringify({ sub: username, exp: Math.floor(Date.now()/1000)+MAX_AGE })).toString("base64url");
  return `${payload}.${sign(payload)}`;
}

export function verifySessionToken(token?: string) {
  if (!token) return null;
  const [payload, signature] = token.split("."); if (!payload || !signature) return null;
  const expected = sign(payload); const a=Buffer.from(signature); const b=Buffer.from(expected);
  if (a.length!==b.length || !timingSafeEqual(a,b)) return null;
  try { const value=JSON.parse(Buffer.from(payload,"base64url").toString()) as {sub:string;exp:number}; return value.exp > Date.now()/1000 ? value.sub : null; } catch { return null; }
}

export async function getMasterUser() { const jar=await cookies(); return verifySessionToken(jar.get(COOKIE)?.value); }
export async function requireMasterUser() { const user=await getMasterUser(); if(!user) redirect("/login"); return user; }
export async function requireMasterApi() { const user=await getMasterUser(); if(!user) throw new Error("UNAUTHORIZED"); return user; }
export const sessionCookie = { name:COOKIE, maxAge:MAX_AGE };

