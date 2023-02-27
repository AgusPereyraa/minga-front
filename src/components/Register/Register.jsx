import React from 'react'
import TitleRegister from '../TitleRegister/TitleRegister'
import FormRegister from '../FormRegister/FormRegister'
import Image from '../Image/Image'
import registerImg from '../../images/register-img.png'
import './register.css'

export default function Register() {
  return (
    <div className='register'>
      <div className='register-form'>
        <TitleRegister />
        <FormRegister />
      </div>
      <div className='register-img'>
        <Image src={registerImg} alt="register image" />
      </div>
    </div>
  )
}
