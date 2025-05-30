import React from 'react'
import DashboardOverview from './DashboardOverview'


function DashboardMain() {
  return (
    <div className='ml-10'>
      <h2 className='text-2xl font-semibold  m-2 text-zinc-900'>Dashboard</h2>
      <DashboardOverview/>
     
    </div>
  )
}

export default DashboardMain