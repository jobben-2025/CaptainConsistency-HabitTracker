// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { useState } from 'react'
import './App.css'

import logo from './assets/CC1.webp'

import HabitForm from './components/HabitForm'
import HabitList from './components/HabitList';

// App description - focus on hooks and states:
// FR004   Habit Creation                      
// Allow users to create new habits with custom names and set target goals for completion frequency. (e.g., drink water 8 times per day)
// FR008   State Management
// Implement proper React state management using hooks for habits and goals
// FR005   Habit Progress Counter
// Implement increment/decrement counter for each habit to track daily progress.

// FR006   Total Progress Tracking
// Display overall progress across all habits, showing the completed habits and total habits for the day.
// FR007   Completion Tracking
// Mark habits as complete by conditionally changing the style when the counter equals the set goal.

// localStorage:
// FR009   Local Storage Integration           Persist habit data using browser’s local storage.


function App() {
  const [items, setItems] = useState([]);
  



  

  return (
    <>
      <div className='flex bg-red-600 text-white'>
        <div className='flex-2 pl-6'>_</div>

        <div className='flex-2 pr-6'>_</div>
        
      </div>
      
      <div className='flex bg-red-300 text-white'>
      <div className='flex-2 pl-6 pt-6'>
        <h1 className='bg-red-700 pl-6 p-4 text-white text-2xl border rounded-4xl'>Captain Consistency</h1>
        <p className='bg-red-200 pl-6 p-2 text-gray-600 font-bold border rounded-4xl'>Your habit tracker for consistent daily improvements, arrr! Are ye on-board?</p>

        <div className='pt-5 pb-5'>
          <HabitForm setItems={setItems} />
        </div>
        <div>
          <HabitList items={items} />
          <button onClick={(e) => {
            setItems([])
          }}
          className='bg-red-600 text-grey-500 px-2 py-1 rounded mb-5'>
            Delete all items
            </button>
          
        </div>

        



      </div>
      <div className='flex-1 p-6'>
        <img width="100%" src={logo} alt="" className='border rounded-4xl'/>
      </div>
      </div>

      <div className='flex bg-red-600 text-white'>
        <div className='flex-2 pl-6'>_</div>

        <div className='flex-2 pr-6'>_</div>
        
      </div>





    </>
  )
}

export default App
