import React, { use, useRef } from 'react'
import {useGSAP} from'@gsap/react'
import  gsap  from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';

const Home = () => {
  const [pickup, setPickup] = React.useState('');
  const [destiantion, setDestination] = React.useState('');
  const[panelOpen, setPanelOpen] = React.useState(false);   
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null);
  const[vehiclePanelOpen, setVehiclePanelOpen] = React.useState(false);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const [confirmRidePanel, setconfirmRidePanel] = React.useState(false)
  const lookingForDriverRef = useRef(null);
  const [lookingForDriver, setLookingForDriver] = React.useState(false);
  const waitingForDriverRef = useRef(null);
  const [waitingForDriver, setWaitingForDriver] = React.useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
  }

  useGSAP(() => {
    if(panelOpen){
      gsap.to(panelRef.current,{
      height:'70%',
      padding:24
    })
      gsap.to(panelCloseRef.current,{
        opacity:1
      })
    }else{
      gsap.to(panelRef.current,{
        height:0,
        padding:0
      })
      gsap.to(panelCloseRef.current,{
        opacity:0
      })
    }
  },[panelOpen])

  useGSAP(() => {
    if(vehiclePanelOpen){  
      gsap.to(vehiclePanelRef.current,{
        transform:'translateY(0)',
      })
    }
    else{
      gsap.to(vehiclePanelRef.current,{
        transform:'translateY(100%)',
      })
    }
  },[vehiclePanelOpen])

  useGSAP(() => {
    if(confirmRidePanel){  
      gsap.to(confirmRidePanelRef.current,{
        transform:'translateY(0)',
      })
    }
    else{
      gsap.to(confirmRidePanelRef.current,{
        transform:'translateY(100%)',
      })
    }
  },[confirmRidePanel])

  useGSAP(() => {
    if(lookingForDriver){  
      gsap.to(lookingForDriverRef.current,{
        transform:'translateY(0)',
      })
    }
    else{
      gsap.to(lookingForDriverRef.current,{
        transform:'translateY(100%)',
      })
    }
  },[lookingForDriver])

  useGSAP(() => {
    if(waitingForDriver){  
      gsap.to(waitingForDriverRef.current,{
        transform:'translateY(0)',
      })
    }
    else{
      gsap.to(waitingForDriverRef.current,{
        transform:'translateY(100%)',
      })
    }
  },[waitingForDriver])
 
    

  return (
    <div  className='relative h-screen overflow-hidden'>
     <img className='w-20 ml-5 absolute  mt-5 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/1200px-Uber_logo_2018.svg.png" alt="" />

     <div 
     
     className='h-screen w-screen'>
      <img  className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
     </div>

      <div className='  h-screen flex flex-col justify-end absolute top-0 w-full  '>
          <div className='h-[30%] bg-white p-5 relative'>
            <h5 
            ref={panelCloseRef}
         
            onClick={() => setPanelOpen(false)}
            className='absolute top-6 right-6 text-2xl'>
              <i className="ri-arrow-down-wide-line"></i>
            </h5>
          <h4 className='text-3xl font-semibold'>Find your trip</h4>
          <form onSubmit={(e)=>{
            submitHandler(e);
          }} >
            <div className='line absolute h-16 w-1 top-[43%] bg-gray-900 left-10 rounded-full'></div>
            <input
            onClick={() => setPanelOpen(true)}
            value={pickup}
            onChange={(e) => setPickup(e.target.value) }
            type="text" className='bg-[#eeee] px-12 p-5  mt-3 py-2 text-base  rounded-lg w-full' placeholder='Enter Pickup Location' />

            <input
            onClick={() => setPanelOpen(true)}
            value={destiantion}
            onChange={(e) => setDestination(e.target.value) }
            type="text" className='bg-[#eeee] px-12 py-2 p-5 mt-3 text-base w-full  rounded-lg w-full' placeholder='Enter Drop Location'/>
          </form>
          </div>

      <div ref={panelRef} className='bg-white  h-0'>
        <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanelOpen={setVehiclePanelOpen}/>
      </div>

        </div>
        <div ref={vehiclePanelRef} className=' fixed translate-y-full w-full z-10 bottom-0 px-3 py-8 bg-white '>
        <VehiclePanel setconfirmRidePanel={setconfirmRidePanel} setVehiclePanelOpen={setVehiclePanelOpen}/>
        </div>

        <div ref={confirmRidePanelRef} className=' fixed translate-y-full w-full z-10 bottom-0 px-3 py-8 bg-white '>
        <ConfirmRide  setconfirmRidePanel={setconfirmRidePanel} setLookingForDriver={setLookingForDriver}/>
        </div>

        <div ref={lookingForDriverRef}  className=' fixed translate-y-full w-full z-10 bottom-0 px-3 py-8 bg-white '>
       <LookingForDriver setVehiclePanelOpen={setVehiclePanelOpen}/>
        </div>

        <div ref={waitingForDriverRef}  className=' fixed  w-full z-10 bottom-0 px-3 py-8 bg-white '>
       <WaitingForDriver setWaitingForDriver={setWaitingForDriver} />
        </div>
      </div>




  )
}

export default Home