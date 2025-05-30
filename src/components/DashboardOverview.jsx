import React from 'react'
import AnatomySection from './AnatomySection'

import { healthData } from '../data/healthData'
import CalendarView from './CalendarView'
import UpcomingSchedule from './UpcomingSchedule'
import ActivityFeed from './ActivityFeed'
import { calendarData } from '../data/calendarData'
import { appointmentData } from '../data/appointmentsData'

function DashboardOverview() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
      <div className=''>
      <AnatomySection healthData={healthData}/>
      <ActivityFeed activityData={appointmentData.activityData}/>
      </div>
      
      <div className='rounded-2xl  bg-white-100 shadow h-[350px] '>
      <CalendarView calendarData={calendarData}/>
      <UpcomingSchedule appointsmentsData={appointmentData}/>
      </div>
     
    </div>
  )
}

export default DashboardOverview