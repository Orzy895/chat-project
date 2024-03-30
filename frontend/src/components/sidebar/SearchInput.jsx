import React, { useState } from 'react'
import useGetConversations from '../../hooks/useGetConversations.js'

const SearchInput = ({ handleSearch }) => {
    const [search, setSearch] = useState("");
    const { conversations } = useGetConversations();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!search) return;
        const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));
        if (conversation) {
            handleSearch(conversation.fullName);
            setSearch("");
        } else {
            alert("No user found")
            setSearch("");
        }
    }
    return (
        <div className='pb-4 border-b p-4 h-[15%] w-full'>
            <form onSubmit={handleSubmit}>
                <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search..." className="input placeholder:text-gray-900 bg-gray-200 text-black input-bordered w-full max-w-xs" />
            </form>
        </div>
    )
}

export default SearchInput