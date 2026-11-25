import { redirect } from "next/navigation";
import { getMasterUser } from "@/app/master-auth";
import { LoginForm } from "./login-form";
export const dynamic="force-dynamic";
export default async function Login(){if(await getMasterUser())redirect("/");return <LoginForm/>}

