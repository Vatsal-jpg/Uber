import React from 'react'
import { Link } from 'react-router-dom';

const ConfirmRidePopUp = (props) => {
    const submitHandler=(e)=>{
        e.preventDefault();
    }
    const[otp,setOtp]= React.useState('');
  return (
   <div>
        <h5 
            onClick={() => props.setRidePopUpPanel(false)}
         className='p-1 text-center w-[93%] mb-1 absolute top-0 '>
         <i className=" text-2xl font-semibold ri-arrow-down-wide-line"></i>
         </h5>
         <h3 className='text-2xl font-semibold mb-5'>Confirm This Ride to Start</h3>
         <div className='flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4'>
            <div className='flex items-center gap-4 '>
                 <img className='h-20 w-20 rounded-full object-cover' src="https://imgs.search.brave.com/mXY1_IfcX2yK_suYXshyxth3YDkbENtYXyia8moNP6g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMjEvRWxv/bi1NdXNrLU1lbWUt/UE5HLUltYWdlLnBu/Zw" alt="" />
                 <h5 className='text-lg font-medium'>Elon Musk</h5>
            </div>
            <h5 className='text-lg font-semibold'>2.2KM</h5>
         </div>
         <div className='flex justify-between items-center flex-col'>
             
            <div className='w-full mt-5'>
                <div className='flex items-center gap-5 p-2 border-b-2 border-gray-300'>
                   <i className="ri-map-pin-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>562/11-A</h3>
                        <p className='text-sm text-gray-600'>Marine Lines, Mumbai</p>
                    </div>
                </div>
                <div>
                      <div className='flex items-center gap-5 p-2 border-b-2 border-gray-300'>
                   <i className="ri-map-pin-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>562/11-A</h3>
                        <p className='text-sm text-gray-600'>Marine Lines, Mumbai</p>
                    </div>
                </div>
                </div>
                <div>
                    <div className='flex items-center gap-5 p-2 '>
                   <i className="ri-money-rupee-circle-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>₹192.35</h3>
                        <p className='text-sm text-gray-600'>Cash</p>
                    </div>
                </div>
                </div>

            </div>
        
           <div className='mt-6 w-full '>
           <form onSubmit={(e)=>{
            submitHandler(e);
           }} >

            <input value={otp} onChange={(e)=>{setOtp(e.target.value)}} type="text" className='bg-[#eeee] px-6 py-4 font-mono text-lg border-2 border-gray-200  mt-3   rounded-lg w-full' placeholder='Enter OTP'/>

            <Link to='/captain-riding' onClick={(e)=>{
                
            }} className='w-full bg-green-600 flex justify-center text-white font-semibold rounded-lg p-3 mt-3'>Confirm</Link>
            
            <button onClick={(e)=>{
                props.setConfirmRidePopUpPanel(false)
                props.setRidePopUpPanel(false)
                
            }} className='w-full bg-red-600 text-white font-semibold rounded-lg p-3 mt-3'>Cancel</button>
            </form>
           </div>
         </div>
    </div>
  )
}

export default ConfirmRidePopUp