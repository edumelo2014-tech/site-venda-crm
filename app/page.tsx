import { requireMasterUser } from "./master-auth";
import { CRMApp } from "./crm-app";

export const dynamic = "force-dynamic";

export default async function Home() {
  const username = await requireMasterUser();
  return <CRMApp user={{ name: username, email: "Administrador" }} />;
}
