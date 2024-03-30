import React, { useState } from 'react'
import useConversation from '../../zustand/useConversation.js'
import { useSocketContext } from '../../context/SocketContext.jsx';

const Conversation = ({ conversation }) => {
    const { selectedConversation, setSelectedConversation } = useConversation();
    const isSeleted = selectedConversation?._id === conversation._id;
    const {onlineUsers} = useSocketContext();
    const isOnline = onlineUsers.includes(conversation._id);
    return (
        <>
            <div className={`flex gap-7 items-center hover:bg-sky-500/80 rounded hover:rounded-none p-2 py-4 cursor-pointer ${isSeleted ? "bg-sky-500/80" : ""}`}
                onClick={() => setSelectedConversation(conversation)}>
                <div className={`avatar ${isOnline? "online" : "offline"}`}>
                    <div className="w-14 rounded-full">
                        <img src={conversation.profilePicture} />
                    </div>
                </div>
                <div className='flex flex-col flex-1'>
                    <div>
                        <p className='font-bold text-gray-200'>{conversation.fullName}</p>
                    </div>
                </div>
            </div>
            <div className='border-b border-gray-200'></div>
        </>
    )
}

export default Conversation