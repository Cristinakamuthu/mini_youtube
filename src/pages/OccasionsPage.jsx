import React from 'react'
import { Outlet,Link, NavLink } from 'react-router-dom'
import Navbar from '../components/Navbar'

const OccasionsPage = () => {
  return (
    <div>
        <div>
          <Navbar />
        </div>

        <nav>
            <Link to="baptism">Baptism</Link>
            <Link to="death">Death</Link>
        </nav>
        <Outlet />
    </div>
  )
}

export default OccasionsPage