import React from 'react'

const Conversation = () => {
    return (
        <>
            <div className='flex gap-7 items-center hover:bg-sky-500 rounded p-2 py-4 cursor-pointer'>
                <div className="avatar online">
                    <div className="w-14 rounded-full">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <div className='flex flex-col flex-1'>
                    <div>
                        <p className='font-bold text-gray-200'>John Doe</p>
                    </div>
                </div>
            </div>
            <div className='border-b border-gray-200'></div>
        </>
    )
}

export default Conversation