import React, { useRef } from 'react'
import './formRegister.css'
import FieldsetRegister from '../FieldsetRegister/FieldsetRegister'
import InputRegister from '../InputRegister/InputRegister'
import Image from '../Image/Image'
import profile from '../../images/profile.png'
import lock from '../../images/lock.png'
import email from '../../images/@.svg'
import google from '../../images/google.png'
import axios from 'axios'

export default function FormRegister() {

  let name = useRef()
  let mail = useRef()
  let password = useRef()
  let confirm_p = useRef()

  async function handleSubmit(e) {
    e.preventDefault()
    let data = {
      [name.current.name]: name.current.value,
      [mail.current.name]: mail.current.value,
      [password.current.name]: password.current.value,
      [confirm_p.current.name]: confirm_p.current.value
    }
    console.log(data)
    let url = 'http://localhost:3030/users'

    if (password.current.value === confirm_p.current.value) {
      try {
        await axios.post(
          url, data
        )
      } catch (error) {
        console.log(error)
        console.log('Error')
      }
      e.target.reset()
    } else {
      alert("Passwords do not match")
    }
  }
  return (
    <form className='form' onSubmit={handleSubmit}>
      <FieldsetRegister legendText='Name' inputType='text' inputName='name' inputId='name' srcImg={profile} altImg='person' />
      <FieldsetRegister legendText='Email' inputType='email' inputName='mail' inputId='mail' srcImg={email} altImg='@' />
      <FieldsetRegister id='field-password' legendText='Password' inputType='password' inputName='password' inputId='password' srcImg={lock} altImg='lock' />
      <FieldsetRegister legendText='Confirm Password' inputType='password' inputName='confirm-password' inputId='confirm-password' srcImg={lock} altImg='lock' />
      
      <fieldset className='notification-check'>
        <input type="checkbox" name='email-notification' id='email-notification' />
        <label htmlFor='email-notification'>Send notification to my email</label>
      </fieldset>
      
      <InputRegister className='sign-up' type='submit' value="Sign up" />
      
      <a href='#' className='sign-in-google'><Image src={google} alt='' /><span>Sign in with Google</span></a>
      <p>Already have an account? <a href='#' className='link'>Log in</a></p>
      <p>Go back to <a href='#' className='link'>home page</a></p>
    </form>
  )
}

