import React from 'react'
import './header.css'

import {BsLinkedin} from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

const socialmedia = () => {
  return (
    <div className='topsocials'>
      <a href="https://www.linkedin.com/in/bryanquero/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
      <a href="https://github.com/Bryan3D" target="_blank" rel="noreferrer"><BsGithub /></a>
    </div>
  )
}

export default socialmedia
