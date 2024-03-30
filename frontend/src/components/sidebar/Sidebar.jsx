import React, { useState } from 'react'
import SearchInput from './SearchInput.jsx'
import Conversations from './Conversations.jsx'
import LogOutButton from './LogOutButton.jsx'

const Sidebar = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (searchQuery) => {
    setSearch(searchQuery);
  };
  return (
    <div className='border-r border-gray-200 h-full w-[50%]'>
      <SearchInput handleSearch={handleSearch} />
      <Conversations search={search} />
      <LogOutButton />
    </div>
  )
}

export default Sidebar