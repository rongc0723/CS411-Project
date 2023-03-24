import './Navbar.css';
import { NavLink } from 'react-router-dom';

import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar'>
        <nav>
            <NavLink className='brand' to='/'>
            </NavLink>
        </nav>
    </div>
  )
}
