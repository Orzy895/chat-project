import React from 'react'

const MessageInput = () => {
  return (
    <div className='w-full h-[10%] mt-auto flex justify-center items-center bg-gray-900 pb-3'>
        <input type="text" placeholder="Message" className="block input input-bordered w-[90%] text-white" />
    </div>
  )
}

export default MessageInput