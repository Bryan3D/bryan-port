import React from 'react'
import Resume from '../../assets/BryanResume.pdf'

const RTA = () => {
  return (
    <div className="topBtn">
      <a href={Resume} download className='btn'>Copy of Resume</a>
      <a href="#contact" className='btn btn-primary'>Req Inf!</a>
      
    </div>
  )
}

export default RTA
