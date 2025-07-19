import React from 'react'

const CaptainDetails = () => {
  return (
    <div>
          <div className='flex items-center justify-between'>
              <div className='flex items-center justify-start gap-4'>
                <img className='h-20 w-20 rounded-full object-cover' src="https://imgs.search.brave.com/NIIzFAHU0l1vNfxedkerXCXkSJpfrlJX1x5u1Yo2KC4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudG9paW1nLmNv/bS90aHVtYi9pbWdz/aXplLTIzNDU2LG1z/aWQtNTAzMzM0NTcs/d2lkdGgtNjAwLHJl/c2l6ZW1vZGUtNC81/MDMzMzQ1Ny5qcGc" alt="" />
                <h4 className='text-lg font-medium'>Salman Khan</h4>
              </div>
              <div>
                <h4 className='text-xl font-semibold'>₹298.35</h4>
                <p className='text-sm text-gray-600'>Earned</p>
              </div>
            </div>
            <div className='flex p-3 mt-6 bg-gray-100 rounded-xl justify-center gap-5 items-start'>
              <div className='text-center'>
                <i className="text-3xl mb-3 font-thin ri-time-line"></i>
                <h5 className='text-lg font-medium'>10.2</h5>
                <p className='text-sm text-gray-600'>Hours Online</p>
              </div>
              <div className='text-center'>
                <i className="text-3xl mb-3 font-thin ri-speed-up-fill"></i>
                <h5 className='text-lg font-medium'>10.2</h5>
                <p className='text-sm text-gray-600'>Hours Online</p>
              </div>
              <div className='text-center'>
                <i className="text-3xl mb-3 font-thin ri-booklet-line"></i>
                <h5 className='text-lg font-medium'>10.2</h5>
                <p className='text-sm text-gray-600'>Hours Online</p>
              </div>
            </div>
    </div>
  )
}

export default CaptainDetails