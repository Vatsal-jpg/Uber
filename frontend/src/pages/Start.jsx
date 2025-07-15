import React from 'react'
import { Link } from 'react-router-dom'


const Start = () => {
  return (
    <div>
    <div className='bg-cover bg-right  bg-[url(https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1684887108/assets/76/baf1ea-385a-408c-846b-59211086196c/original/u4b-square.png)] h-screen pt-8 flex justify-between flex-col w-full bg-red-400 w-full '>
        <img className='w-16 ml-12 pt-0' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/1200px-Uber_logo_2018.svg.png" alt="" />
        <div className='bg-white py-3 px-4'>
            <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
            <Link to='/user-login' className=' flex items-center justify-center w-full bg-black text-white py-3 rounded mt-4'>Continue</Link>
        </div>
    </div>

    </div>
  )
}

export default Start