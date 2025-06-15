import React  from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar.jsx'

const Mainlayout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default Mainlayout
