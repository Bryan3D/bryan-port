import React from 'react'
import './header.css'
import '../../styles.css'
import RTA from './RTA.js'
import Socialmedia from './socialmedia.js'
import YO from '../../../src/assets/B.png'

const Header = () => {
  return (
    <header>
      {/* this my header title */}
      <div className="container header-container">
        
        <h5 className='text-light'>Hello I'm</h5>
        <h1>Bryan A Quero</h1>
        <h3 className='text-light'>MERN Fullstack | XR Developer</h3>
        <RTA />
        <Socialmedia />

        <div className="me">
          <img src={YO} alt="Bryan Quero" className='yo'/>
        </div>
        
          {/* <a href="#contact" className='_scrollDN'>Scroll Down</a>  */}
      
     
      </div>
      

    </header>
  )
}

export default Header
