import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-row items-center justify-center h-screen min-w-[80%] mx-auto rounded-lg max-sm:min-w-[70%]'>
      <div className=' flex-1 flex items-center justify-center min-h-[80%] w-full p-6 bg-clip-padding bg-white bg-opacity-75 rounded-tl-lg rounded-bl-lg max-sm:hidden'>
        <img src="/astronaut-wave.png" className='max-h-96 max-w-96 max-lg:max-h-60 max-lg:max-w-60' />
      </div>
      <div className=' flex-2 min-h-[80%] w-full p-6 bg-gray-200 bg-clip-padding rounded-tr-lg rounded-br-lg max-sm:rounded-lg'>
        <h1 className='text-3xl pt-5 font-semibold text-center text-black truncate'>
          Welcome to <span className='text-sky-500'>Astro Chat</span>
        </h1>
        <form>
          <div className='pt-8'>
            <label className='label p-2'>
              <span className='text-base label-text text-black'>Username</span>
            </label>
            <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10' />
          </div>

          <div className='pt-8'>
            <label className='label p-2'>
              <span className='text-base label-text text-black'>Password</span>
            </label>
            <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10' />
          </div>

          <a href="#" className='text-sm p-2 hover:underline hover:text-blue-600 mt-2 inline-block text-black'>Dont have an Account?</a>

          <div className='pt-8 flex justify-center items-center'>
            <button className='btn h-1/2 w-1/3 mt-2'>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login