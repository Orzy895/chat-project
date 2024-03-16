import React, { useEffect, useRef } from 'react';
import Message from './Message.jsx'

const Messages = () => {
  const messagesContainerRef = useRef(null);

  useEffect(() => {
    messagesContainerRef.current.scrollTo(0, messagesContainerRef.current.scrollHeight);
  }, []);
  return (
    <div ref={messagesContainerRef} className='p-5 flex-1 overflow-auto bg-gray-900'>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
    </div>
  )
}

export default Messages