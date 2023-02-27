import React from 'react'
import './heroHome.css'
import Image from '../Image/Image'
import character from '../../images/heroHome-1.png'
import manga from '../../images/heroHome-2.png'
import H3 from '../H3/H3'


export default function Home() {
  return (
  <div className='contain'>
    <div className='home-contain'>

      <div className='poster1'>
      <Image className='character' src={character} alt='character'/>
      </div>

      <div className='poster2'>
      <Image className='manga' src={manga} alt='manga'/>
      </div>

      <div className='home-text'>
        <H3 text='Trigun Stampede' />
        <p>Manga</p>
        <h6>TRIGUN is a popular action manga by Yasuhiro Nightow that follows the story of Vash Stampede, a legendary gunfighter and pacifist with a huge bounty on his head.</h6>
      </div>
    
    </div>
  </div>
  )
}