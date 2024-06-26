import React, { useState } from 'react'
import GenderBox from './GenderBox.jsx'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup.js'

const Signup = () => {

  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: ''
  })

  const { loading, signup } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs)
  }

  const handleGenreCheckBox = (gender) => {
    setInputs({ ...inputs, gender })
  }

  return (
    <div className='flex flex-row items-center justify-center h-screen min-w-[80%] mx-auto rounded-lg]'>
      <div id='imageDiv' className=' flex-1 flex items-center justify-center min-h-[80%] w-full p-6 bg-clip-padding bg-white bg-opacity-75 rounded-tl-lg rounded-bl-lg max-sm:hidden'>
        <img src="/astronaut-wave.png" className='max-h-96 max-w-96 max-lg:max-h-60 max-lg:max-w-60' />
      </div>
      <div id='formDiv' className=' flex-2 min-h-[80%] w-full p-6 bg-gray-200 bg-clip-padding rounded-tr-lg rounded-br-lg max-sm:rounded-lg'>
        <h1 className='text-3xl pt-5 font-semibold text-center text-black truncate max-sm:text-lg'>
          Sign Up to <span className='text-sky-500'>Astro Chat</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-row justify-between space-x-2'>
            <div>
              <div className='pt-8'>
                <label className='label p-2'>
                  <span className='text-base label-text text-black'>Full Name</span>
                </label>
                <input value={inputs.fullName} onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })} type="text" placeholder='Enter Full Name' className='w-full input input-bordered h-10' />
              </div>
              <div className='pt-8'>
                <label className='label p-2'>
                  <span className='text-base label-text text-black'>Password</span>
                </label>
                <input value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })} type="password" placeholder='Enter Password' className='w-full input input-bordered h-10' />
              </div>
            </div>
            <div>
              <div className='pt-8'>
                <label className='label p-2'>
                  <span className='text-base label-text text-black'>Username</span>
                </label>
                <input value={inputs.username} onChange={(e) => setInputs({ ...inputs, username: e.target.value })} type="text" placeholder='Enter Username' className='w-full input input-bordered h-10' />
              </div>
              <div className='pt-8'>
                <label className='label p-2'>
                  <span className='text-base label-text text-black'>Confirm Password</span>
                </label>
                <input value={inputs.confirmPassword} onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })} type="password" placeholder='Enter Password' className='w-full input input-bordered h-10' />
              </div>
            </div>
          </div>
          <GenderBox onCheckboxChange={handleGenreCheckBox} selectedGender={inputs.gender}></GenderBox>
          <div className='flex justify-center items-center'>
            <button className='btn h-1/2 w-1/3 mt-2'>Sign Up</button>
          </div>
          <div className='text-center'>
            <Link to="/login" className='text-sm p-2 hover:underline hover:text-blue-600 mt-2 inline-block text-black'>Already have an Account?</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup