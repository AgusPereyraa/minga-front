import React from 'react'
import H3 from '../H3/H3'
import './heroHomeText.css'


export default function Homefondo() {
  return (
    <div className='home-fondo'>
      <div className='home-fondo-text'>
        <H3 text='Live the emotion of the manga' />
        <h4>Find the perfect manga for you</h4>
        <p>#MingaForever 🔥</p>
        <a href='#' className='explore-btn'>Explore</a>
      </div>
    </div>
  )
}