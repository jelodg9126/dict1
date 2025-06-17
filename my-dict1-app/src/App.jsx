import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Route, Routes} from 'react-router-dom'
import './App.css'

import Form from './Pages/Form'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'

function App() {

  return (
    <>
    <div className='app-container flex '>

      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/form' element={<Form/>}/>
      </Routes>
 
         

    </div>
     
    </>
  )
}

export default App
