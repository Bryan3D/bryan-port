import React from 'react'
import Resume from '../../assets/BryanResume.pdf'
import './header.css'

const RTA = () => {
  return (
    <div className="topBtn">
      <a href={Resume} download className='btn text-light'>My Resume</a>
      <a href="#contact" className='btn btn-primary text-light'>More Info!</a>
      
    </div>
  )
}

export default RTA
