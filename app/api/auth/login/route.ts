import { createSessionToken, sessionCookie, validCredentials } from "@/app/master-auth";

const attempts = new Map<string,{count:number;reset:number}>();
export async function POST(request:Request){
  const ip=request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()||"local"; const now=Date.now(); const record=attempts.get(ip);
  if(record && record.reset>now && record.count>=8) return Response.json({error:"Muitas tentativas. Aguarde 15 minutos."},{status:429});
  const body=await request.json() as {username?:string;password?:string};
  if(!validCredentials(body.username??"",body.password??"")){attempts.set(ip,{count:(record?.reset&&record.reset>now?record.count:0)+1,reset:now+15*60_000});return Response.json({error:"Usuário ou senha inválidos."},{status:401})}
  attempts.delete(ip); const response=Response.json({ok:true}); response.headers.append("Set-Cookie",`${sessionCookie.name}=${createSessionToken(body.username!)}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=${sessionCookie.maxAge}`); return response;
}

