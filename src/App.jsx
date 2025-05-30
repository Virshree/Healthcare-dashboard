
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import DashboardMain from './components/DashboardMain'




function App() {

  return (
    <div className='flex min-h-screen bg-gray-50 '>
   <Sidebar/>
  
    <div className='flex flex-col '>
    
    <Header/>
   
  
    <DashboardMain/>  
    
  
   
   
    </div>
       
    </div>
  )
}

export default App
