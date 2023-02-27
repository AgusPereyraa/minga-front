import React from 'react'
import './navbar.css'


const Navbar = () => {

  return (

    <nav>
      <div className='navbar'>
        <div className='nav_toggle'>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className='logo'>
          <img src="../img/Logo.png" alt="" />
        </div>
      </div>
    </nav>
  )

}

export default Navbar
