import React from 'react'
import { MdOutlineLogout } from "react-icons/md";
import useLogout from '../../hooks/useLogout';

const LogOutButton = () => {

  const {logout} = useLogout()

  return (
    <div className='mt-auto p-2 h[10%] border-t border-gray-200'>
        <MdOutlineLogout onClick={logout} className='text-2xl cursor-pointer text-gray-200'/>
    </div>
  )
}

export default LogOutButton