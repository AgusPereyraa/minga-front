import React, {useState} from 'react'
import './navbar.css'
import Image from '../Image/Image'
import logoUser from '../../images/logoUser.png'


const Navbar = ()=>{
  const [isOpen, setIsOpen] = useState(false)

return (
 
  <nav>
   <div className='navbar'>
    
    <div className={`nav_items ${isOpen && "open"}`}>
      <div className='porfile'>
      
      <Image src={logoUser} alt='' />

        <div className='porfile-text'>
        <p>Lucas Ezequiel Silva</p>
        <p>lucasezequielsilva@gmail.com</p>
        </div>

      </div>

        <a href="#"><span>Home</span></a>
        <a href="#">Mongos</a>
        <a href="#">My mongos</a>
        <a href="#">Favourites</a>
        <a href="#">Logout</a>
    </div>
    <div className={`nav_toggle  ${isOpen && "open"}`} onClick={()=> setIsOpen(!isOpen)}>
      <span></span>
      <span></span>
      <span></span>
    </div>
    
  </div>
  
  <div className='logo'>
      <img src="./img/Logo.png" alt="" />
    </div>
 </nav>
)

}

export default Navbar
