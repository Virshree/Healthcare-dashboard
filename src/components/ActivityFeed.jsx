import React from 'react'

function ActivityFeed({activityData}) {
  

  return (
    <div className='mt-5 relative rounded-2xl bg-gray-100 shadow h-60 px-3'>
  <h2 className="text-xl font-semibold mb-4 p-2">Activity</h2>
 
    <p className='text-xl  text-gray-400 absolute top-0 right-0 m-2'>{activityData.totalAppointments} appointment on this week</p>
    {/**Weekly data */}
    <div className='flex items-end '>
    {activityData?.weeklyData?.map((dayItem,index)=>
     
      (
        <div key={index} className='gap-9 w-xl '>
          
          <div
              className={`w-3 bg-blue-500 rounded-t`}
              style={{
                height: `${dayItem.height}px`, // static height values
              }}
            ></div>
           <span className="text-xs text-gray-500">{dayItem.day}</span>
          </div>
      )
    )}
    </div>
    </div>
  )
}

export default ActivityFeed