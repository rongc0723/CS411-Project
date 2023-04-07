import './Navbar.css';
import { NavLink } from 'react-router-dom';

import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar'>
        <nav>
            <NavLink className='brand' to='/'>Sfoodify</NavLink>
            <NavLink className='brand' to='/MainPage'>Search</NavLink>
            <NavLink className='brand' to='/Profile'>Profile</NavLink>
        </nav>
    </div>
  )
}
