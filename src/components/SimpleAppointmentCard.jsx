import React from 'react'

function SimpleAppointmentCard({title,icon:Icon,time}) {
   
   
  return (
    <div className='grid relative  bg-gray-200 items-center gap-4 w-[250px] p-4 rounded-xl m-4 shadow-sm'>
       {/* <span>{icon}</span> */}
     
       <div className=''>
       {Icon && <Icon   className="w-5 h-5  absolute top-0 right-0 m-3 text-2xl" />}
       <span className='font-medium text-gray-800'>{title}</span>
       <span className='text-sm text-gray-500 flex'>{time}</span>

       
       </div>
    </div>
  )
}

export default SimpleAppointmentCard