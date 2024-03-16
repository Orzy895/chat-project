import React from 'react'

const SearchInput = () => {
    return (
        <div className='pb-4 border-b-2 border-gray-200 p-4 h-[15%] w-full'>
            <form>
                <input type="text" placeholder="Search..." className="input placeholder:text-gray-900 bg-gray-200 text-black input-bordered w-full max-w-xs" />
            </form>
        </div>
    )
}

export default SearchInput