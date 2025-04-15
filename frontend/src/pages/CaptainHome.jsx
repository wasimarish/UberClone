import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import CaptainsDetail from '../components/CaptainsDetail';
import RidePopUp from '../components/RidePopUp';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ConfirmRidePopUp from '../components/ConfirmRidePopUp';

const CaptainHome = () => {

  const[ridePopUpPanel,setRidePopUpPanel]=useState(true)
  const[confirmRidePopUpPanel,setConfirmRidePopUpPanel]=useState(false)
  const ridePopUpPanelRef=useRef(null)
  const confirmRidePopUpPanelRef=useRef(null)
  
  useGSAP(function(){

    if(ridePopUpPanel){
      gsap.to(ridePopUpPanelRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(ridePopUpPanelRef.current,{
        transform:'translateY(100%)'
      })
    }
   
  },[ridePopUpPanel])

  useGSAP(function(){

    if(confirmRidePopUpPanel){
      gsap.to( confirmRidePopUpPanelRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to( confirmRidePopUpPanelRef.current,{
        transform:'translateY(100%)'
      })
    }
   
  },[confirmRidePopUpPanel])

  return (
    <div className="h-screen w-screen">
      {/* Top Section */}
      <div className="fixed p-3 top-0 flex items-center justify-between w-full bg-white shadow">
        <img
          className="w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber Logo"
        />
        <Link
          to="/home"
          className="h-10 w-10 bg-white flex items-center justify-center rounded-full border shadow"
        >
          <i className="text-lg font-medium ri-logout-box-line"></i>
        </Link>
      </div>

      {/* Main Content */}
      <div className="h-full flex flex-col">
        {/* Image Section */}
        <div className="h-2/3">
          <img
            className="h-full w-full object-cover"
            src="https://cdn.theatlantic.com/thumbor/BlEOtTo9L9mjMLuyCcjG3xYr4qE=/0x48:1231x740/960x540/media/img/mt/2017/04/IMG_7105/original.png"
            alt="Cityscape"
          />
        </div>

        {/* Stats Section */}
       <div>
          <CaptainsDetail/>
       </div>
       <div ref={ ridePopUpPanelRef} className='w-full fixed z-10 bottom-0 bg-white px-3 py-6 translate-y-full '>
          <RidePopUp setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}/>
      </div>

      <div ref={ confirmRidePopUpPanelRef} className='w-full fixed z-10 bottom-0 bg-white px-3 py-6 translate-y-full '>
          <ConfirmRidePopUp setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} setRidePopUpPanel={setRidePopUpPanel}/>
      </div>
      </div>
    </div>
  );
};

export default CaptainHome;