import React, { useState } from 'react'
import useSendMessage from '../../hooks/useSendMessage';
import { IoSendSharp } from "react-icons/io5";

const MessageInput = () => {

  const [message, setMessage] = useState("");
  const sendMessage = useSendMessage();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  }

  return (
    <form onSubmit={handleSubmit} className='w-full h-[10%] bg-gray-900 pb-16'>
      <div className='flex justify-center items-center gap-x-10'>
        <input value={message} onChange={(e) => setMessage(e.target.value)} type="text" placeholder="Message" className=" input input-bordered w-[80%] text-white" />
        <button type='submit'><IoSendSharp className='text-2xl'/></button>
      </div>
    </form>
  )
}

export default MessageInput