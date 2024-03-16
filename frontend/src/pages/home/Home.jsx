import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar.jsx'
import MessageContainer from '../../components/messages/MessageContainer.jsx'

const Home = () => {
  return (
    <div className='flex flex-row items-center justify-center h-screen min-w-[80%] border border-gray-200 bg-gray-200 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 mx-auto rounded-lg sm:h-[450px] md:h-[550px]'>
      <Sidebar/>
      <MessageContainer/>
    </div>
  )
}

export default Home