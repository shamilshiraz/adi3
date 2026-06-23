import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<>
        <Landing/></>}/>
      </Routes>
    </div>
  )
}

export default App