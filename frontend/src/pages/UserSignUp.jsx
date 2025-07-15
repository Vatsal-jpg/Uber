import React from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react'; 
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios';
// import  useContext from 'react';
import { UserDataContext } from '../context/UserContext';

const UserSignUp = () => {
   const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[firstname, setFirstname] = useState('');
    const[lastname, setLastname] = useState('');
    const[showPassword, setShowPassword] = useState(false);
    const[userdata,setUserdata] = useState([]);
  
    const navigate = useNavigate();

    const {user,setUser} = React.useContext(UserDataContext);

    const submitHandler = async (e) => {
      e.preventDefault(); 
      const newUser = {
        email: email,
        password: password,
        fullname:{
        firstname: firstname, 
        lastname: lastname
        } 
      };
      const res=await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)

      if(res.status === 201){
        alert('User created successfully');
        setUser(res.data.user);
        localStorage.setItem('token', res.data.token);
        navigate('/home');
      }

      setEmail(''); 
      setPassword('');
      setFirstname('');
      setLastname('');
    }

  return (
      <div className='p-7 flex flex-col  justify-between  h-screen'>
      <div>
         <img className='w-16 mb-7  pt-0 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/1200px-Uber_logo_2018.svg.png" alt="" />
      <form onSubmit={(e)=>{
        submitHandler(e);
      }} action="">
        <div >
          <h3 className='text-2xl font-bold mb-3'>Whats your Name</h3>
          <div className='flex gap-4'>
          <input className='bg-[#eeee] rounded border w-full px-4 py-2 text-lg placeholder:text-sm mb-7' 
          onChange={(e) => setFirstname(e.target.value)} value={firstname}
          required type="text" placeholder=' First Name' />

          <input className='bg-[#eeee] rounded border w-full px-4 py-2 text-lg placeholder:text-sm mb-7' 
          onChange={(e) => setLastname(e.target.value)} value={lastname}
          required type="text" placeholder=' Last Name' />
          </div>
        </div>
        <h3 className='text-2xl font-bold mb-2'>Email</h3>
        <input className='bg-[#eeee] rounded border w-full px-4 py-2 text-lg placeholder:text-sm mb-7' required 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email" placeholder='example@gmail.com' />

        <h3 className='text-2xl font-bold mb-2 '>Password</h3>
        {/* <input className='bg-[#eeee] rounded border w-full px-4 py-2 text-lg placeholder:text-sm mb-7' required type="password" placeholder='password' /> */}
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
        <button className='  py-4 px-15 w-full bg-black text-white font-semibold rounded-lg '>Create Account</button>
      </form>
      <p className='text-center mt-4 '>Already have an account? <Link to="/user-login" className='text-blue-500'>Log in</Link></p>
    </div>
    <p>
      By signing up, you agree to our <Link to="/terms" className='text-blue-500'>Terms of Service</Link> and <Link to="/privacy" className='text-blue-500'>Privacy Policy</Link>.
    </p>
    </div>
  )
}

export default UserSignUp