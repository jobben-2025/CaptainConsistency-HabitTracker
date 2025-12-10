// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { useState } from 'react'
import './App.css'

import logo from './assets/CC1.webp'

function App() {



  

  return (
    <>
      <flexcontainer0 className='flex bg-red-600 text-white'>
        <div className='flex-2'>Left box</div>

        <div className='flex-2'>Right box</div>
        
      </flexcontainer0>
      
      <flexcontainer1 className='flex bg-red-400 text-white'>
      <div className='flex-2 pl-6 pt-6'>
        <h1 className='bg-red-800 pl-6 p-4 text-white text-2xl border rounded-4xl'>Captain Consistency</h1>
        <p className='bg-red-200 pl-6 p-2 text-gray-800 font-bold border rounded-4xl'>Your habit tracker for consistent daily improvements, arrr! Are ye on-board?</p>



      </div>
      <div className='flex-1 p-6'>
        <img width="100%" src={logo} alt="" className='border rounded-4xl'/>
      </div>
      </flexcontainer1>

      <flexcontainer2 className='flex bg-red-600 text-white'>
        <div className='flex-2'>Left box</div>

        <div className='flex-2'>Right box</div>
        
      </flexcontainer2>





    </>
  )
}

export default App
