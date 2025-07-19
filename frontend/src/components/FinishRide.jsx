import React from 'react'
import { Link } from 'react-router-dom';

const FinishRide = (props) => {
  return (
    <div className=''>
        <h5 
            onClick={() => props.setfinishRidePanel(false)}
         className='p-1 text-center w-[93%] mb-1 absolute top-0 '>
         <i className=" text-2xl font-semibold ri-arrow-down-wide-line"></i>
         </h5>
         <h3 className='text-2xl font-semibold mb-5'>Finish This Ride</h3>
         <div className='flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4'>
            <div className='flex items-center gap-4 '>
                 <img className='h-20 w-20 rounded-full object-cover' src="https://imgs.search.brave.com/mXY1_IfcX2yK_suYXshyxth3YDkbENtYXyia8moNP6g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMjEvRWxv/bi1NdXNrLU1lbWUt/UE5HLUltYWdlLnBu/Zw" alt="" />
                 <h5 className='text-lg font-medium'>Elon Musk</h5>
            </div>
            <h5 className='text-lg font-semibold'>2.2KM</h5>
         </div>
         <div className='flex justify-between  items-center flex-col'>
             
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
           

        

            <Link to='/captain-home' onClick={(e)=>{
                
            }} className='w-full bg-green-600 flex justify-center text-white font-semibold rounded-lg p-3 mt-3'>Finish Ride</Link>
            <p className=' mt-10 text-xs'>Click on the Finish Ride button if you have completed  payment</p>
           </div>
         </div>
    </div>
  )
}

export default FinishRide