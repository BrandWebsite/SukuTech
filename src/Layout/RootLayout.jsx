import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const RootLayout = () => {
  return (
    <div>
        <NavBar/>
        <div>
            <Outlet/>
            <Footer/>
        </div>
    </div>
  )
}

export default RootLayout