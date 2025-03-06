import React from 'react'
import ChatHeader from './ChatHeader'
import ChatMessages from './ChatMessages'
import MessageBox from './MessageBox'

const ChatElement = () => {
  return (
    <div className='flex flex-1 flex-col justify-center overflow-x-hidden'>
      <ChatHeader/>
      <ChatMessages/>
      <MessageBox/>
    </div>
  )
}

export default ChatElement
