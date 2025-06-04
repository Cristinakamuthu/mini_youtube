import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Navbar2 from '../components/Navbar2'
import Title from '../components/Title'

const Mass = () => {
  return (
    <div>
      <div>
        <Title />
      </div>
      <Navbar />
      <Navbar2 />
      <div className="main-content">
  <Outlet />
</div>

    </div>
  )
}

export default Mass
