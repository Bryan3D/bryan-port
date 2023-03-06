import React from 'react'
import Resume from '../../assets/BryanResume.pdf'

const RTA = () => {
  return (
    <div children="rta">
      <a href={Resume} download className='btn'>Copy of Resume</a>
      <a href="#contact" className='btn btn-primary'>Connect with ME!</a>
      
    </div>
  )
}

export default RTA
