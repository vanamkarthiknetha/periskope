import ChatElement from "./ChatElement"
import ChatSidebar from "./ChatSidebar"
import ChatsSection from "./ChatsSection"

const Chat = async ({user}) => {
  return (
  <div className="flex w-full flex-1 overflow-hidden">
    <ChatsSection/>
    <ChatElement/>
    <ChatSidebar/>
  </div>
  )
}

export default Chat
