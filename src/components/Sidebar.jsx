import React from 'react'
import {navigation,tools} from '../data/navigation';
function Sidebar() {
  return (
    <aside className="h-screen w-3xs bg-gray-100  flex flex-col  rounded-l-xl  m-2 justify-between">
    {/* Top navigation */}
    <div>
      <h1 className="text-3xl font-bold p-6 m-2">
  <span className="text-cyan-400">Health</span>
  <span className="text-shadow-indigo-950">care</span>
    </h1>
      <div className="p-6 text-xl text-gray-300 uppercase">General</div>
      <nav className="space-y-1 px-4">
        {navigation.map((item,index) => (
          <div className='flex p-2 space-x-2.5' key={index}>
            <span>{<item.icon size={20}/>}</span>
            <span>{item.label}</span>
          </div>
        ))}
          <div className='p-3 text-xl text-gray-300'>Tools</div>
        {tools.map((item,index)=>(<div className="flex p-2 space-x-2.5"key={index}>
          <span>{<item.icon size={20}/>}</span>
            <span>{item.label}</span>
             {/* {item.label==="Setting" ? <span className='text-green-500'></span>:""} */}
        </div>))}
       
      </nav>
    </div>

   
  </aside>
  )
}

export default Sidebar;