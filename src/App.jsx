import { useEffect, useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import { Footer, Header } from './components'
import { useDispatch } from 'react-redux'


function App() {

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
  , [])
    

  return (
    <div>
      <div className='root-container'>
        <Header />
        <Outlet />
      </div>
        <Footer />
    </div>
  )
}

export default App
