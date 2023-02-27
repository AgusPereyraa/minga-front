import React from 'react'
import './footer.css'


export default function Footer() {
  return (

   <div>
    
     <div className='footer-container'>

<div className='suscribe'>
  <h3>Subscribe</h3>
  <form> 
  <fieldset>  
    <input type="mail" placeholder='Enter your email' />
    <button type="submit"className='suscribe-Now'> Suscribe Now</button>
  </fieldset>
  </form>
</div>


<div className='footer'>
  <div className='footer-enlaces'>
    <a href="#">Home</a>
    <a href="#">Mangas</a>
  </div>

  <div className='footer-logo'>
  <img src="../../images/Logo.png" alt="Logo" />
  </div>

  <div className='redes-button'>
    <div className='redes-sociales'>
      <a href="#"><img src="./img/Facebook.png" alt="Facebook" /></a>
      <a href="#"> <img src="./img/Twitter.png" alt="Twitter" /></a>
      <a href="#"> <img src="./img/Vimeo.png" alt="Vimeo" /></a>
      <a href="#"> <img src="./img/Youtube.png" alt="Youtube" /></a>
    </div>

    <button type="submit"className='suscribe-Now'> Donate <img src="./img/donate.png" alt="donate" /></button>
  </div>
</div>
<div className='hr'>
  <hr />
</div>

</div>
   </div>
  )
}