import React from 'react'

export const LocationSearchPanel = (props) => {

  // console.log(props)
  const location=[
    "123345 Maple Street, Imaginary City, State 98765, Planet Earth.",
    "123547 Maple Street, Imaginary City, State 98765, Planet Earth.",
    "12333 Maple Street, Imaginary City, State 98765, Planet Earth.",
    "1244 Maple Street, Imaginary City, State 98765, Planet Earth.",
  ]
  return (

    location.map(function (address) {
      return (
        <div className="p-4" key={address}>
          <div onClick={()=>{props.setVehiclePanel(true)
                            props.setPanelopen(false)
          }} className="active:border-2 flex items-center justify-start my-3 gap-1.5 rounded-xl">
            <h2 className="bg-[#eee] rounded-full w-12 h-8 flex items-center justify-center mt-2">
              <i className="ri-map-pin-line"></i>
            </h2>
            <h4 className="font-medium">{address}</h4>
          </div>
        </div>
      );
    })
    


    // {
    //   location.map(function(){
    //     return <div className='p-4'>
    //     <div className=' active:border-2 flex flex-center justify-start my-3 gap-1.5 rounded-xl '>
    //     <h2 className='bg-[#eee] rounded-full w-12 h-8 flex items-center justify-center mt-2'><i className="ri-map-pin-line"></i></h2>
    //       <h4 className='font-medium'> 
    //         123 Maple Street, Imaginary City, State 98765, Planet Earth.
    //       </h4>
    //     </div>
    //   })
    // }


    // <div className='p-4'>
    //   <div className=' active:border-2 flex flex-center justify-start my-3 gap-1.5 rounded-xl '>
    //   <h2 className='bg-[#eee] rounded-full w-12 h-8 flex items-center justify-center mt-2'><i className="ri-map-pin-line"></i></h2>
    //     <h4 className='font-medium'> 
    //       123 Maple Street, Imaginary City, State 98765, Planet Earth.
    //     </h4>
    //   </div>

    //   <div className=' active:border-2 flex flex-center justify-start my-3 gap-1.5 rounded-xl '>
    //   <h2 className='bg-[#eee] rounded-full w-12 h-8 flex items-center justify-center mt-2'><i className="ri-map-pin-line"></i></h2>
    //     <h4 className='font-medium'> 
    //       123 Maple Street, Imaginary City, State 98765, Planet Earth.
    //     </h4>
    //   </div>

    //   <div className=' active:border-2 flex flex-center justify-start my-3 gap-1.5 rounded-xl '>
    //   <h2 className='bg-[#eee] rounded-full w-12 h-8 flex items-center justify-center mt-2'><i className="ri-map-pin-line"></i></h2>
    //     <h4 className='font-medium'> 
    //       123 Maple Street, Imaginary City, State 98765, Planet Earth.
    //     </h4>
    //   </div>

      
    // </div>
  )
}
