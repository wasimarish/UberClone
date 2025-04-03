import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
        <h5 className='p-1 text-center w-[93%] absolute top-0 mb-2 ' onClick={()=>props.setVehiclePanelOpen(false)}><i className=" text-3xl ri-arrow-down-wide-line"></i></h5>
         <div   onClick={()=>{
            props.setConfirmRidePanel(true)
         }} className='mb-2  w-full border-2 border-black rounded-xl flex items-center justify-evenly'>
            
         <img className='h-14 'src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png" alt="" />
          <div className=' w-1/2'>
            <h4 className='font-bold text-m'>UberGo <span><i className="ri-user-3-line"></i> 4 </span></h4>
            <h5 className='font-bold text-m'>2 mins away</h5>
            <p className='font-medium text-gray-600 text-xs' >Affordable Comapct Rides</p>
          </div>
          <h2 className='text-2xl font-bold'>$22.4</h2>
         </div>
        {/* bike */}
         <div
          onClick={()=>{
            props.setConfirmRidePanel(true)
         }}
         className='mb-2 w-full border-2 border-black rounded-xl flex items-center justify-evenly'>
         <img className='h-14 'src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_537/v1571927853/assets/39/c1c2c7-61eb-4432-9bac-728b974207e7/original/cityscoot-icon-mobile.png" alt="" />
          <div className=' w-1/2'>
            <h4 className='font-bold text-m'>MotorCycle <span><i className="ri-user-3-line"></i> 1</span></h4>
            <h5 className='font-bold text-m'>2 mins away</h5>
            <p className='font-medium text-gray-600 text-xs' >Affordable Comapct Rides</p>
          </div>
          <h2 className='text-2xl font-bold'>$233.4</h2>
         </div>
          {/* auto */}
         <div 
           onClick={()=>{
            props.setConfirmRidePanel(true)
         }}
         className='mb-2 w-full border-2 border-black rounded-xl flex items-center justify-evenly'>
         <img className='h-14 'src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
          <div className=' w-1/2'>
            <h4 className='font-bold text-m'>AutoRickshaw<span><i className="ri-user-3-line"></i> 3 </span></h4>
            <h5 className='font-bold text-m'>2 mins away</h5>
            <p className='font-medium text-gray-600 text-xs' >Affordable Comapct Rides</p>
          </div>
          <h2 className='text-2xl font-bold'>$2.4</h2>
         </div>
      
    </div>
  )
}

export default VehiclePanel