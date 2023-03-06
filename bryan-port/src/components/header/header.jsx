import React from 'react'
import './header.css'
import RTA from './RTA.jsx'
import ME from '../../assets/Bryan_Quero_Square-removebg.png'

const Header = () => {
  return (
    <header>
      {/* this my header title */}
      <div className="container header-container">
        
        <h5>Hello I'm</h5>
        <h1>Bryan A Quero</h1>
        <h5>MERN | XR Developer</h5>
        <RTA />

        <div className="me">
          <img src={ME} alt="Bryan Quero"/>
        </div>
        
      
          <a href="#contact" className='_scrollDN'>Scroll Down</a>
      
     
      </div>
      
      
    </header>
  )
}

export default Header
