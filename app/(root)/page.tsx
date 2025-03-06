import Chat from "@/components/root/Chat"
import { createClient } from "@/utils/supabase/server";
const supabase = await createClient()
const { data:{user} } = await supabase.auth.getUser()
export default async function Home() {
  
  return <Chat user={user}/>
}
