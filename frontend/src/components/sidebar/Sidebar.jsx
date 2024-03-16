import React from 'react'
import SearchInput from './SearchInput.jsx'
import Conversations from './Conversations.jsx'
import LogOutButton from './LogOutButton.jsx'

const Sidebar = () => {
  return (
    <div className='border-r border-gray-200 h-full w-[50%]'>
        <SearchInput/>
        <Conversations/>
        <LogOutButton/>
    </div>
  )
}

export default Sidebar