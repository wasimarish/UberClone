import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
  return (
    <div className='h-screen w-screen '>

    <Link to='/home'className='fixed  h-10 w-10 right-2 top-2 bg-white flex items-center justify-center rounded-full'>
        <i className=" text-lg font-medium ri-home-4-fill"></i>
    </Link>



    <div className='h-1/2'>
        <img className='h-full w-full object-cover' src="https://cdn.theatlantic.com/thumbor/BlEOtTo9L9mjMLuyCcjG3xYr4qE=/0x48:1231x740/960x540/media/img/mt/2017/04/IMG_7105/original.png" alt="Cityscape" />
    </div> 
    <div className='h-1/2  p-4'>
    <div className='flex items-center justify-between'>
        <img className='h-12' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />
        <div className='text-right'>
          <h2 className='text-lg font-medium capitalize'>Rider NAme</h2>
          <h4 className='text-xl font-semibold -mt-1 -mb-1'>BR01 1147</h4>
          <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
          <h1 className='text-lg font-semibold'>  otp 9999 </h1>
        </div>
      </div>

      <div className='flex gap-2 justify-between flex-col items-center'>
        <div className='w-full mt-5'>
          <div className='flex items-center gap-5 p-3 border-b-2'>
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className='text-lg font-medium'>562/11-A</h3>
              <p className='text-sm -mt-1 text-gray-600'>rc 42</p>
            </div>
          </div>
         
          <div className='flex items-center gap-5 p-3'>
            <i className="ri-currency-line"></i>
            <div>
              <h3 className='text-lg font-medium'>₹696 </h3>
              <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
            </div>
          </div>
        </div>
      </div>
      <button className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>MAKE A PAYMENT</button>
    </div>
    </div>
  )
}

export default Riding