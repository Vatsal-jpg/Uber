import React from 'react'

const WaitingForDriver = (props) => {
  return (
     <div>
        <h5 onClick={() => props.WaitingForDriver(false)}
         className='p-1 text-center w-[93%] mb-1 absolute top-0 '>
         <i className=" text-2xl font-semibold ri-arrow-down-wide-line"></i>
         </h5>
         <div className='flex justify-between items-center'>
          <img className='h-20' src="https://imgs.search.brave.com/IaDE0Xjindg5iuKw--YnUMzs1trIfMNrWqS9BMU0Qqo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjkv/OTEyLzM4Mi9zbWFs/bC93aGl0ZS1tb2Rl/cm4tY2FyLWlzb2xh/dGVkLW9uLXRyYW5z/cGFyZW50LWJhY2tn/cm91bmQtM2QtcmVu/ZGVyaW5nLWlsbHVz/dHJhdGlvbi1mcmVl/LXBuZy5wbmc" alt="" />

          <div className='text-right'>
            <h3 className='text-lg font-medium'>Vatsal</h3>
            <h4 className='text-xl font-semibold '>MH 47 JB 0007</h4>
            <p className='text-sm text-gray-600'>Grand i10</p>
          </div>
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
            
         </div>
    </div>
  )
}

export default WaitingForDriver