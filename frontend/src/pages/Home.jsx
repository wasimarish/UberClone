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

  return (
    <div className='h-screen relative ' >
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
          <LocationSearchPanel/>
        </div>
      </div>

      <div className='z-10'>

      </div>
    </div>
  )
}

export default Home
