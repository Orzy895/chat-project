import React, { useEffect } from 'react'
import useConversation from '../zustand/useConversation'

const useGetMessages = () => {
    const { messages, setMessages, selectedConversation } = useConversation();

    useEffect(() => {
        const getMessages = async () => {
            try {
                const res = await fetch(`api/messages/${selectedConversation._id}`);
                const data = await res.json();
                if (data.error) throw new Error(data.error)
                setMessages(data);
            } catch (error) {
                alert(error.message)
            }
        }
        if (selectedConversation?._id) getMessages();
    }, [selectedConversation?._id, setMessages])

    return messages;
}

export default useGetMessages