import React from 'react'

const RidePopUp = (props) => {
  return (
    <div>
          <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
                props.setRidePopUpPanel(false)
            }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>A Ride For You</h3>
            <div className='flex items-center justify-between bg-blue-100 rounded-lg'>
                <div className='flex items-center gap-3'>
                <img
                className="h-10 w-10 rounded-full object-cover"
                src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg"
                alt="Rider Avatar"
              />
              <h2 className='text-xl font-medium'> Your RIde </h2>
                </div>
                <h5 className='text-xl font-medium pr-2'>5 km</h5>
            </div>
            <div className='flex gap-2 justify-between flex-col items-center'>
                
                <div className='w-full mt-5'>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="ri-map-pin-user-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>KAnkairya Talab</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="text-lg ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>KIng khan</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3'>
                        <i className="ri-currency-line"></i>
                        <div>
                            <h3 className='text-lg font-medium'>546</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                        </div>
                    </div>
                </div>
                <button onClick={()=>{
                    props.setConfirmRidePopUpPanel(true)
                }} className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Accept Ride</button>

                <button onClick={()=>{
                    props.setRidePopUpPanel(false)
                }} className='w-full mt-5 bg-gray-300 text-gray-700 font-semibold p-2 rounded-lg'>Ignore</button>
            </div>
    </div>
  )
}

export default RidePopUp