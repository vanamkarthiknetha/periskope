import { getUser } from "@/utils/actions/user.actions";

export default async function Home() {
  const user = await getUser()
  return <div className=""> Home</div>;
}
