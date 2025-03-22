import React, { useRef, useState } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import { LocationSearchPanel } from '../components/LocationSearchPanel';

const Home = () => {
  const [pickup,setPickup]=useState('');
  const [destination,setDestination]=useState('');
  const [panelopen,setPanelopen]=useState(false);
  const panelRef=useRef(null);
  const panelCloseRef=useRef(null);
  const [vehiclePanelOpen,setVehiclePanelOpen]=useState(false);
  const vehiclePanelRef = useRef(null)

  const submitHandler=(e)=>{
    e.preventDefault();
  }

  useGSAP(()=>{
    if(panelopen){
      gsap.to(panelRef.current,{
        height:'70%'
      })
      gsap.to(panelCloseRef.current,{
        opacity:1
      })
    }else{
      gsap.to(panelRef.current,{
        height:'0%'
      })
      gsap.to(panelCloseRef.current,{
        opacity:0
      })

    }
  },[panelopen]);

  useGSAP(function(){

    if(vehiclePanelOpen){
      gsap.to(vehiclePanelRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(vehiclePanelRef.current,{
        transform:'translateY(100%)'
      })
    }
   
  },[vehiclePanelOpen])

  return (
    <div className='h-screen relative overflow-hidden' >
      <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber logo" />

      <div className='h-screen w-screen '>
        <img className='h-full w-full object-cover' src="https://cdn.theatlantic.com/thumbor/BlEOtTo9L9mjMLuyCcjG3xYr4qE=/0x48:1231x740/960x540/media/img/mt/2017/04/IMG_7105/original.png" alt="Cityscape" />
      </div> 

      <div className='flex flex-col justify-end absolute h-screen top-0 w-full'>
        <div className='h-[30%] bg-white p-5 relative'>
          <h5 ref={panelCloseRef}
          onClick={()=>setPanelopen(false)}
          className='absolute right-3 opacity-0 top-2 text-xl'><i className="ri-arrow-down-s-line"></i>
          </h5>
          <h4 className='text-2xl font-semibold'>Find A Trip</h4>
          <form onSubmit={submitHandler}>
            <input 
              onClick={() => setPanelopen(true)}
              value={pickup}
              onChange={(e)=>setPickup(e.target.value)}
              className="bg-[#eee] px-8 py-2 text-lg rounded-lg w-full mt-5" type="text" placeholder='Add a pickup location' 
            />
            <input 
              value={destination}
              onClick={() => setPanelopen(true)}
              onChange={(e)=>setDestination(e.target.value)}
              className="bg-[#eee] px-8 py-2 text-lg rounded-lg w-full mt-3" type="text" placeholder='Destination' 
            />
          </form>
        </div>

        <div ref={panelRef} className='h-[70%] bg-white'>
          {/* Content for the panel can go here */}
          <LocationSearchPanel panelopen={panelopen} setPanelopen={setPanelopen} vehiclePanel={vehiclePanelOpen} setVehiclePanel={setVehiclePanelOpen}/>
        </div>
      </div>
      {/* car */}
      <div ref={vehiclePanelRef} className='w-full fixed z-10 bottom-0 bg-white px-3 py-6 translate-y-full '>
         <div className='mb-2  w-full border-2 border-black rounded-xl flex items-center justify-evenly'>
         <img className='h-14 'src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png" alt="" />
          <div className=' w-1/2'>
            <h4 className='font-bold text-m'>UberGo <span><i className="ri-user-3-line"></i> 4 </span></h4>
            <h5 className='font-bold text-m'>2 mins away</h5>
            <p className='font-medium text-gray-600 text-xs' >Affordable Comapct Rides</p>
          </div>
          <h2 className='text-2xl font-bold'>$22.4</h2>
         </div>
        {/* bike */}
         <div className='mb-2 w-full border-2 border-black rounded-xl flex items-center justify-evenly'>
         <img className='h-14 'src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_537/v1571927853/assets/39/c1c2c7-61eb-4432-9bac-728b974207e7/original/cityscoot-icon-mobile.png" alt="" />
          <div className=' w-1/2'>
            <h4 className='font-bold text-m'>MotorCycle <span><i className="ri-user-3-line"></i> 1</span></h4>
            <h5 className='font-bold text-m'>2 mins away</h5>
            <p className='font-medium text-gray-600 text-xs' >Affordable Comapct Rides</p>
          </div>
          <h2 className='text-2xl font-bold'>$233.4</h2>
         </div>
          {/* auto */}
         <div className='mb-2 w-full border-2 border-black rounded-xl flex items-center justify-evenly'>
         <img className='h-14 'src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
          <div className=' w-1/2'>
            <h4 className='font-bold text-m'>AutoRickshaw<span><i className="ri-user-3-line"></i> 3 </span></h4>
            <h5 className='font-bold text-m'>2 mins away</h5>
            <p className='font-medium text-gray-600 text-xs' >Affordable Comapct Rides</p>
          </div>
          <h2 className='text-2xl font-bold'>$2.4</h2>
         </div>
         
      </div>
    </div>
  )
}

export default Home
