import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
         <h5 onClick={() => props.setVehiclePanelOpen(false)}
         className='p-1 text-center w-[93%] mb-1 absolute top-0 '>
          <i className=" text-2xl font-semibold ri-arrow-down-wide-line"></i>
         </h5>
          <h3 className='text-2xl font-semibold mb-5'>Choose the Vehicle </h3>
          <div onClick={(e)=>{
            props.setconfirmRidePanel(true)
          }} className='flex w-full  mb-2 border-3 border-white active:border-black rounded-xl justify-between p-1 items-center'>
            <img className='h-18' src="https://imgs.search.brave.com/IaDE0Xjindg5iuKw--YnUMzs1trIfMNrWqS9BMU0Qqo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjkv/OTEyLzM4Mi9zbWFs/bC93aGl0ZS1tb2Rl/cm4tY2FyLWlzb2xh/dGVkLW9uLXRyYW5z/cGFyZW50LWJhY2tn/cm91bmQtM2QtcmVu/ZGVyaW5nLWlsbHVz/dHJhdGlvbi1mcmVl/LXBuZy5wbmc" alt="" />

            <div className=' ml-7 w-1/2'>
              <h4 className='text-base font-medium'>Uber Go <span><i className="ri-user-3-fill">4</i></span></h4>
              <h5 className='font-medium text-sm'>2 mins away</h5>
              <p className='font-normal text-xs text-gray-600'>Affordable,compact rides</p>
            </div>
            <h2 className='text-xl mr-2 font-semibold'>₹192.35</h2>
          </div>

          <div onClick={(e)=>{
            props.setconfirmRidePanel(true)
          }} className='flex w-full mb-2 border-3 border-white active:border-black rounded-xl p-1 justify-between items-center'>
            <img className='h-18' src="https://imgs.search.brave.com/NBi_nA55nosji34KwSn6QFWK7L34LS1KL4w4auBjr70/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dWJlci1hc3NldHMu/Y29tL2ltYWdlL3Vw/bG9hZC9mX2F1dG8s/cV9hdXRvOmVjbyxj/X2ZpbGwsaF8zNjgs/d181NTIvdjE2NDgx/Nzc3OTcvYXNzZXRz/L2ZjL2RkZWNhYS0y/ZWVlLTQ4ZmUtODdm/MC02MTRhYTdjZWU3/ZDMvb3JpZ2luYWwv/VWJlcl9Nb3RvXzMx/MngyMDhfcGl4ZWxz/X01vYmlsZS5wbmc" alt="" />

            <div className='  w-1/2'>
              <h4 className='text-base font-medium'>Moto<span><i class="ri-user-3-fill"></i></span>1</h4>
              <h5 className='font-medium text-sm'>3 mins away</h5>
              <p className='font-normal text-xs text-gray-600'>Affordable motorcycle ride</p>
            </div>
            <h2 className='text-xl mr-2 font-semibold'>₹65</h2>
          </div>
          <div onClick={(e)=>{
            props.setconfirmRidePanel(true)
          }} className='flex w-full mb-2 border-3  border-white active:border-black rounded-xl p-1 justify-between items-center'>
            <img className='h-18' src="https://imgs.search.brave.com/M80ekhuOQtpOR99O0a2encmAioFbRriXRfpucXVNIkI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL2F1dG8tcmlj/a3NoYXctcG5nLXJp/Y2tzaGF3LWluZGlh/LXRyYW5zcG9ydC10/YXhpLWFzaWFuLWF1/dG9yaWNrc2hhdy05/NjAucG5n" alt="" />

            <div className=' ml-2 w-1/2'>
              <h4 className='text-base font-medium'>Uber Auto<span><i class="ri-user-3-fill"></i></span>3</h4>
              <h5 className='font-medium text-sm'>4 mins away</h5>
              <p className='font-normal text-xs text-gray-600'>Affordable auto ride</p>
            </div>
            <h2 className='text-xl mr-2 font-semibold'>₹118</h2>
          </div>
    </div>
  )
}

export default VehiclePanel