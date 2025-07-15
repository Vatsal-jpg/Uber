import React from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react'; 
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CaptainSignUp = () => {
  const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[firstname, setFirstname] = useState('');
    const[lastname, setLastname] = useState('');
    const[showPassword, setShowPassword] = useState(false);
    const [vehicleType, setVehicleType] = useState('');
    const[vehicleCapacity, setVehiclecapacity] = useState('');
    const[vehicleColor, setVehicleColor] = useState('');
    const [vehiclePlate, setVehiclePlate] = useState('');

    const[captaindata,setCaptaindata] = useState([]);

    const { setCaptain } = React.useContext(CaptainDataContext);
  
    const navigate = useNavigate();
    const submitHandler = async(e) => {
      e.preventDefault(); 
      const captainData = {
        email: email,
        password: password,
        fullname:{
        firstname: firstname, 
        lastname: lastname
        },
        vehicle: {
          vehicleType: vehicleType.toLowerCase(),
          capacity: Number(vehicleCapacity),
          color: vehicleColor,
          plate: vehiclePlate
        }
      };
      try{
      console.log(captainData);

      const res= await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)
      console.log(res.data)
      if(res.status === 200|| res.status === 201){
        alert('Captain signed up successfully');
        setCaptain(res.data.captain);
        localStorage.setItem('token', res.data.token);
        navigate('/captain-home');
       
      // Reset the form fields after submission
      setEmail(''); 
      setPassword('');
      setFirstname('');
      setLastname('');
      setVehicleType('');
      setVehiclecapacity('');
      setVehicleColor('');  
      setVehiclePlate('');
      }
    }
      catch(error){
        console.error(error, error.response?.data || error.message);
        // Show error message to user
        if (error.response && error.response.data && error.response.data.message) {
          alert(error.response.data.message);
        } else {
          alert('An error occurred during sign up. Please try again.');
        }
      // Update the context with the new captain data
    }
  }
  return (
      <div className='p-7 flex flex-col  justify-between  h-screen'>
      <div>
         <img className='w-16 mb-4  pt-0 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/1200px-Uber_logo_2018.svg.png" alt="" />
      <form onSubmit={(e)=>{
        submitHandler(e);
      }} action="">
        <div >
          <h3 className='text-2xl font-bold mb-2'>Captain's Name</h3>
          <div className='flex gap-4'>
          <input className='bg-[#eeee] rounded border w-full px-4 py-2 text-lg placeholder:text-sm mb-7' 
          onChange={(e) => setFirstname(e.target.value)} value={firstname}
          required type="text" placeholder=' First Name' />

          <input className='bg-[#eeee] rounded border w-full px-4 py-2 text-lg placeholder:text-sm mb-7' 
          onChange={(e) => setLastname(e.target.value)} value={lastname}
          required type="text" placeholder=' Last Name' />
          </div>
        </div>
        <h3 className='text-2xl font-bold mb-2'>Captain's Email</h3>
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

        <h3 className='text-2xl font-bold mb-1 mt-2'>Vehicle Details</h3>
        <div>
    
        <div className='flex gap-4'>
        <select className='bg-[#eeee] rounded border w-full px-4 py-2 text-lg placeholder:text-sm mb-7'
        onChange={(e) => setVehicleType(e.target.value)} value={vehicleType}
        required>
          <option value="" disabled>Vehicle Type</option>
          <option value="car">Car</option>
          <option value="bike">Bike</option>
          <option value="auto">Auto</option>
          </select>
          
        <input className='bg-[#eeee] rounded border w-full px-4 py-2 text-lg placeholder:text-sm mb-7'
        onChange={(e) => setVehiclecapacity(e.target.value)} value={vehicleCapacity}
        required type="number" placeholder='Capacity' />

        </div>
        <div className='flex gap-4'>
        <input className='bg-[#eeee] rounded border w-full px-4 py-2 text-lg placeholder:text-sm mb-7'
        onChange={(e) => setVehicleColor(e.target.value)} value={vehicleColor}
        required type="text" placeholder='Color' />
        <input className='bg-[#eeee] rounded border w-full px-4 py-2 text-lg placeholder:text-sm mb-7'
        onChange={(e) => setVehiclePlate(e.target.value)} value={vehiclePlate}
        required type="text" placeholder='Number Plate' />

        </div>
        </div>

        <button className='  py-4 px-15 w-full bg-black text-white font-semibold rounded-lg '>Create Account</button>
      
      </form>
      <p className=' mt-4 '>Already have an account? <Link to="/captain-login" className='text-blue-500'>Log in</Link></p>
    </div>
    <p>
      By signing up, you agree to our <Link to="/terms" className='text-blue-500'>Terms of Service</Link> and <Link to="/privacy" className='text-blue-500'>Privacy Policy</Link>.
    </p>
    </div>

  )
}
export default CaptainSignUp
