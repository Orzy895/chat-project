import React, { useEffect, useRef } from 'react';
import useGetMessages from '../../hooks/useGetMessages.js'
import Message from './Message.jsx'
import useListenMessages from '../../hooks/useListenMessages.js';

const Messages = () => {
  const messagesContainerRef = useRef(null);
  useListenMessages();
  const messages = useGetMessages();
  console.log(messages);
  useEffect(() => {
    messagesContainerRef.current.scrollTo(0, messagesContainerRef.current.scrollHeight);
  }, []);
  return (
    <div ref={messagesContainerRef} className='p-5 flex-1 overflow-auto bg-gray-900'>
      {messages.length === 0 ? (<p className='text-center'>There's no conversation here, write a message to begin a new conversation</p>) : messages.map((message) => (
        <Message key={message._id} message={message} />
      ))}
    </div>
  )
}

export default Messages