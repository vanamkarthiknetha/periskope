import React from 'react'
import Message from './Message'

const ChatMessages = () => {
    return (
        <div className='chat relative flex h-full w-full flex-1 flex-col !overflow-x-hidden '>
            <div className="" style={{
                boxSizing: "border-box",
                paddingTop: "0px",
                paddingBottom: "0px",
                marginTop: "0px"
            }}

            >
                <Message type="other"/>
                <Message type="other"/>
                <Message type="me"/>
                <Message type="other"/>
                <Message type="me"/>
                <Message type="me"/>
                <Message type="me"/>
                <Message type="me"/>
                <Message type="me"/>
                <Message type="me"/>
                <Message type="me"/>
                <Message type="me"/>
                <Message type="me"/>
                <Message type="me"/>
                <Message type="me"/>
            </div>
            <div><div className="h-6"></div></div>
        </div>
    )
}

export default ChatMessages
