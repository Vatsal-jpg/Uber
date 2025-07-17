import React from 'react'

const ConfirmRide = (props) => {
  return (
    <div>
        <h5 onClick={() => props.setVehiclePanelOpen(false)}
         className='p-1 text-center w-[93%] mb-1 absolute top-0 '>
         <i className=" text-2xl font-semibold ri-arrow-down-wide-line"></i>
         </h5>
         <h3 className='text-2xl font-semibold mb-5'>Confirm your Ride </h3>
         <div className='flex justify-between items-center flex-col'>
             <img className='h-20' src="https://imgs.search.brave.com/IaDE0Xjindg5iuKw--YnUMzs1trIfMNrWqS9BMU0Qqo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjkv/OTEyLzM4Mi9zbWFs/bC93aGl0ZS1tb2Rl/cm4tY2FyLWlzb2xh/dGVkLW9uLXRyYW5z/cGFyZW50LWJhY2tn/cm91bmQtM2QtcmVu/ZGVyaW5nLWlsbHVz/dHJhdGlvbi1mcmVl/LXBuZy5wbmc" alt="" />
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
            <button onClick={(e)=>{
                props.setLookingForDriver(true);
                props.setconfirmRidePanel(false);
            }} className='w-full bg-green-600 text-white font-semibold rounded-lg p-2 mt-3'>Confirm</button>
         </div>
    </div>
  )
}

export default ConfirmRide