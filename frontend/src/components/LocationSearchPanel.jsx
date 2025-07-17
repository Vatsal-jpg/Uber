import React from 'react'

const LocationSearchPanel = (props) => {
    const locations = [
        "Location 1",
        "Location 2",
        "Location 3",
        "Location 4",
    ]
  return (
    <div>
        {
            locations.map(function(elem,ind){
                return <div key={ind} onClick={()=>{
                    props.setVehiclePanelOpen(true);
                    props.setPanelOpen(false);
                }} className='flex border-2 mb-3 px-2 py-3 border-gray-50 active:border-black rounded-xl justify-start gap-4 items-center'>
            <h2 className='bg-#[eeee] h-7 flex items-center justify-center text-2xl rounded-full w-12'>
                <i className="ri-map-pin-2-line"></i>
            </h2>
            <h4 className='font-medium'>{elem}</h4>
        </div>
            })
        }

       
    </div>
  )
}

export default LocationSearchPanel