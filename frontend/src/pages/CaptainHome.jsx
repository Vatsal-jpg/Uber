import React from 'react'
import { Link } from 'react-router-dom';
import CaptainDetails from '../components/CaptainDetails';
import RidePopUp from '../components/RidePopUp';
import { useState } from 'react';
import  gsap  from 'gsap';
import {useGSAP} from'@gsap/react'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp';

const CaptainHome = () => {
  const [ridePopUpPanel, setRidePopUpPanel] = useState(true)
  const ridePopUpRef = React.useRef(null);
  const[confirmRidePopUpPanel,setConfirmRidePopUpPanel]=useState(false);
  const confirmRidePopUpPanelRef=React.useRef(null);

    useGSAP(() => {
    if(ridePopUpPanel){  
      gsap.to(ridePopUpRef.current,{
        transform:'translateY(0)',
      })
    }
    else{
      gsap.to(ridePopUpRef.current,{
        transform:'translateY(100%)',
      })
    }
  },[ridePopUpPanel])

    useGSAP(() => {
    if(confirmRidePopUpPanel){  
      gsap.to(confirmRidePopUpPanelRef.current,{
        transform:'translateY(0)',
      })
    }
    else{
      gsap.to(confirmRidePopUpPanelRef.current,{
        transform:'translateY(100%)',
      })
    }
  },[confirmRidePopUpPanel])




  return (
    <div className='h-screen '>
       <div className='flex justify-between items-center  bg-white '>
             <img className='w-20 ml-5 absolute  mt-15 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/1200px-Uber_logo_2018.svg.png" alt="" />
        <Link to='/captain-login' className='fixed right-2 top-2 h-10 bg-white flex items-center justify-center rounded-full p-3'>
        <i className=" text-lg font-medium ri-logout-box-r-line"></i>
       </Link>
       </div>
        <div className='h-3/5'>
             <img  className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
        </div>
        <div className='h-2/5 p-6 '>
          <CaptainDetails/>
        </div>
         <div ref={ridePopUpRef} className=' fixed translate-y-full w-full z-10 bottom-0 px-3 py-8 bg-white '>
       <RidePopUp setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}  />
        </div>

         <div ref={confirmRidePopUpPanelRef} className=' fixed h-screen translate-y-full w-full z-10 bottom-0 px-3 py-8 bg-white '>
       <ConfirmRidePopUp setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}  setRidePopUpPanel={setRidePopUpPanel} />
        </div>
        
    </div>
  )
}

export default CaptainHome