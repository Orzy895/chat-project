import React from 'react'
import Messages from './Messages.jsx'
import MessageInput from './MessageInput.jsx';

const MessageContainer = () => {
  const chatSelected = true;
  return (
    <div className='md:min-w-[450px] flex flex-col h-full w-full'>
      {chatSelected ? <BlankMessage/> : (
        <>
          <div className='bg-gray-200 px-4 py-2 m-0'>
            <span className='label-text text-gray-900'>Chatting with </span>
            <span className='text-gray-900 font-bold'>John Doe</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  )
}

const BlankMessage = () => {
  return (
    <div className='flex items-center justify-center w-full h-full text-white flex-col text-2xl space-y-6'>
      <p>Hey, let's start chatting!</p>
      <p>Select a chat to start chatting</p>
      <p>or</p>
      <p>Search for someone on the search bar</p>
    </div>
  )
}

export default MessageContainer