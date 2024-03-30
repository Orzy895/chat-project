import React, { useState } from 'react'
import useGetConversations from '../../hooks/useGetConversations.js'
import Conversation from './Conversation.jsx'
import useConversation from '../../zustand/useConversation.js';
import { IoClose, IoLogoWindows } from "react-icons/io5";

const Conversations = ({ search }) => {
  const { conversations, loading } = useGetConversations();
  const { setSelectedConversation } = useConversation;
  const searchedConversation = conversations.filter(conversation => conversation.fullName.toLowerCase().includes(search.toLowerCase()))

  const handleDeselectSearchedConversation = () => {
    search = null;
    window.location.reload();
  }

  return (
    <div className='overflow-auto flex flex-col h-[78%] w-full'>
      {search ? <div className='border-b border-gray-200 bg-slate-200 text-gray-900 flex justify-between'>
        <p className='pl-2'>Searched User: {search}</p>
        <div onClick={handleDeselectSearchedConversation} className='flex justify-center items-center pr-2 font-bold text-xl hover:cursor-pointer'>
          <IoClose />
        </div>
      </div> : null}
      {searchedConversation.map((conversation) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
        />
      ))}
      {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
    </div>
  )
}

export default Conversations