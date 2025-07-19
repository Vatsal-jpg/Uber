import { useRef } from 'react';
import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import FinishRide from '../components/FinishRide';
import  gsap  from 'gsap';
import {useGSAP} from'@gsap/react'

const CaptainRiding = () => {
    const [finishRidePanel, setfinishRidePanel] = useState(false)
    const finishRidePanelRef = useRef(null)

     useGSAP(() => {
    if(finishRidePanel){  
      gsap.to(finishRidePanelRef.current,{
        transform:'translateY(0)',
      })
    }
    else{
      gsap.to(finishRidePanelRef.current,{
        transform:'translateY(100%)',
      })
    }
  },[finishRidePanel])


  return (
     <div className='h-screen '>
       <div className='flex justify-between items-center  bg-white '>
             <img className='w-20 ml-5 absolute  mt-15 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/1200px-Uber_logo_2018.svg.png" alt="" />
        <Link to='/captain-login' className='fixed right-2 top-2 h-10 bg-white flex items-center justify-center rounded-full p-3'>
        <i className=" text-lg font-medium ri-logout-box-r-line"></i>
       </Link>
       </div>
        <div className='h-4/5'>
             <img  className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
        </div>
        <div className='h-1/5 p-6 bg-yellow-400 relative flex items-center justify-between'
        onClick={(e)=>{
            setfinishRidePanel(true)
        }}
        >
         <h5 
    
         className='p-1 text-center absolute  w-[87%] mb-1  top-0 '>
         <i className=" text-2xl  font-semibold ri-arrow-up-wide-line"></i>
         </h5>
         <h4 className='text-xl font-semibold'>4KM away</h4>
         <button className=' bg-green-600 text-white font-semibold rounded-lg p-3 px-10 mt-3'>Complete Ride</button>
        </div>
        <div ref={finishRidePanelRef} className=' fixed h-screen translate-y-full w-full z-10 bottom-0 px-3 py-8 bg-white '>
       <FinishRide setfinishRidePanel={setfinishRidePanel}/>
        </div>
        
    </div>
  )
}

export default CaptainRiding