import React from 'react'
import NavBar from '../Navbar/NavBar'
import HeroHome from '../HeroHome/HeroHome'
import HeroHomeText from '../HeroHomeText/HeroHomeText'
import './hero.css'

export default function Hero() {
  return (
    <div className='hero'>
      <NavBar />
      <HeroHome />
      <HeroHomeText />
    </div>
  )
}
