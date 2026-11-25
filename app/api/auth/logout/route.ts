import { sessionCookie } from "@/app/master-auth";
export async function POST(){const response=Response.json({ok:true});response.headers.append("Set-Cookie",`${sessionCookie.name}=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0`);return response}

