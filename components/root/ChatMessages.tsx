import React from 'react'
import Message from './Message';

const ChatMessages = ({ user, chatId,messages }) => {
    
    return (
        <div className='chat relative flex h-full w-full flex-1 flex-col !overflow-x-hidden '>
            <div className="" style={{
                boxSizing: "border-box",
                paddingTop: "0px",
                paddingBottom: "0px",
                marginTop: "0px"
            }}

            >
                {/* <Message type="other"/> */}
                {/* <Message type="me"/> */}
                {messages.map((message) => {
                    if (!message) return null; 
                    return <Message key={message.id} message={message} type={message.senderId === user.id ? "me" : "other"} />
                })}

            </div>
            <div><div className="h-6"></div></div>
        </div>
    )
}

export default ChatMessages
