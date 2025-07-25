import React from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
import { data, Link } from 'react-router-dom';
import { UserDataContext } from '../context/UserContext';
import{useNavigate} from 'react-router-dom';
import axios from 'axios';

const Userlogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userdata,setuserdata] = useState([]);

  const {user,setUser} = React.useContext(UserDataContext);
  const navigate = useNavigate();

  const submitHandler = async(e) => {
    e.preventDefault();
   const userdata={
      email: email,
      password: password
   }
   const res= await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`,userdata)
    if(res.status === 200){
      alert('User logged in successfully');
      setUser(res.data.user);
      localStorage.setItem('token', res.data.token);
      console.log(res.data.token);
      navigate('/home');
   
    setEmail('');
    setPassword('');
  }
  }
  return (
    <div className='p-7 flex flex-col  justify-between  h-screen'>
    <div>
         <img className='w-16 mb-7  pt-0 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/1200px-Uber_logo_2018.svg.png" alt="" />
      <form onSubmit={(e)=>{
        submitHandler(e);
      }} action="">
        <h3 className='text-2xl font-bold mb-2'>Email</h3>
        <input className='bg-[#eeee] rounded border w-full px-4 py-2 text-lg placeholder:text-sm mb-7' required 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email" placeholder='example@gmail.com' />

        <h3 className='text-2xl font-bold mb-2 '>Password</h3>
       
         <div className='relative'>
          <input
            className='bg-[#eeee] rounded border w-full px-4 py-2 text-lg placeholder:text-sm mb-7'
            required
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='password'
          />
          <span
            className='absolute right-3 top-3 cursor-pointer text-gray-600'
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <button className=' ml-20 py-5 px-15 bg-black text-white font-semibold rounded-lg '>Login</button>
      </form>
      <p className='text-center mt-4 '>Don't have an account? <Link to="/user-signup" className='text-blue-500'>Sign Up</Link></p>
    </div>
    <div>
      <Link to="/captain-login"
       className=' py-3  bg-[#FFC000] flex justify-center  w-full text-white font-bold rounded-lg '>
        Sign in as Captain
      </Link>
    </div>
    </div>
  )
}

export default Userlogin