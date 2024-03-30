import React, { useEffect } from 'react'
import Messages from './Messages.jsx'
import MessageInput from './MessageInput.jsx';
import useConversation from '../../zustand/useConversation.js';
import { IoClose } from "react-icons/io5";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation])

  const handleClose = () => {
    setSelectedConversation(null);
  }

  return (
    <div className='md:min-w-[450px] flex flex-col h-full w-full'>
      {!selectedConversation ? <BlankMessage /> : (
        <>
          <div className='bg-gray-200 px-4 py-2 m-0 flex justify-between'>
            <div>
              <span className='label-text text-gray-900'>Chatting with </span>
              <span className='text-gray-900 font-bold'>{selectedConversation.fullName}</span>
            </div>
            <div onClick={handleClose} className='flex justify-center items-center text-gray-900 font-bold hover:cursor-pointer'>
              <IoClose />
            </div>
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