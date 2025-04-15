import React from 'react'

const ConfirmRidePopUp = (props) => {
  return (
    <div className='h-[84vh]'>
            <div>
          <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
                  props.setConfirmRidePopUpPanel(false)
            }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>Do You Want To Confirm</h3>
            <div className='flex items-center justify-between bg-yellow-400 rounded-lg'>
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
                 
                }} className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Confirm</button>

                <button onClick={()=>{
                    props.setConfirmRidePopUpPanel(false)
                    
                    props.setRidePopUpPanel(false)
                }} className='w-full mt-5 bg-red-700 text-white font-semibold p-2 rounded-lg'>Cancel</button>
            </div>
    </div>
    </div>
  )
}

export default ConfirmRidePopUp