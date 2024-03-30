import React from 'react'
import { useAuthContext } from '../../context/AuthContext.jsx';
import useConversation from '../../zustand/useConversation';
import { timeFormat } from '../../utils/timeFormat.js'

const Message = ({ message }) => {
    const { authUser } = useAuthContext();
    const { selectedConversation } = useConversation();
    const fromUser = message.senderId === authUser._id;
    const chatClassName = fromUser ? 'chat-end' : 'chat-start';
    const profilePicture = fromUser ? authUser.profilePicture : selectedConversation?.profilePicture;
    const messageColor = fromUser ? 'bg-blue-500' : "";
    const time = timeFormat(message.createdAt);

    return (
        <div className='mt-auto'>
            <div className={`chat ${chatClassName}`}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS chat bubble component" src={profilePicture} />
                    </div>
                </div>
                <div className={`chat-bubble text-gray-200 ${messageColor}`}>{message.message}</div>
                <div className="chat-footer opacity-50">
                    <time className="text-xs opacity-50">{time}</time>
                </div>
            </div>
        </div>
    )
}

export default Message