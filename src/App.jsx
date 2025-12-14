// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { useState } from 'react'
import './App.css'

import logo from './assets/CC1.webp'

import HabitForm from './components/HabitForm'
import HabitList from './components/HabitList';



function App() {
  const [items, setItems] = useState([]);
   

  return (
    <>
      <div className='flex bg-red-600 text-red-300 items-center fixed top-0 right-0 left-0'>
        <div className='flex-2 pl-6 pt-1 pb-1'><a href="https://github.com/jobben-2025/CaptainConsistency-HabitTracker">Github: Captain Consistency</a></div>

        <div className='flex-2 pr-6'><a href="#promotion">Promotion program</a></div>
        
      </div>


      
      <div className='flex bg-red-800 text-white pt-8 pb-8'>
      <div className='flex-2 pl-6 pt-6'>
        <h1 className='bg-red-600 pl-6 p-4 text-white text-2xl border border-red-200 rounded-4xl'>Captain Consistency</h1>
        <p className='bg-red-300 pl-6 p-2 text-gray-600 font-bold border border-red-100 rounded-4xl'>Yourrr habit trackerrr for consistent daily improvements, arrr! Arrr ye on-board?</p>

        <div className='pt-5 pb-5'>
          <HabitForm setItems={setItems} />
        </div>

        
        <div className='text-center'>
          <HabitList items={items} setItems={setItems} />
          <button onClick={(e) => {
            setItems([])
          }}
          className='bg-red-600 text-grey-500 px-2 py-1 rounded-2xl mb-5 w-full'>
            Delete all items
            </button>
          
        </div>

        {/* Display here the total progress tracking (%) and how many habits are completed as well as total amount of habits */}

        



      </div>
      <div className='flex-1 p-6 relative right-0 top-18'>
        <img width="100%" src={logo} alt="" className='border border-red-200 rounded-4xl'/>
      </div>
      </div>


      <div className='flex bg-red-600 text-red-300 items-center pt-1 pb-1 fixed bottom-0 right-0 left-0'>
        <div className='flex-2 pl-6'>Try to find my easteregg</div>

        <div className='flex-1 pr-6 align-right'>(c) Copyright - Captain Consistency LLC</div>
        
      </div>





    </>
  )
}

export default App
