import React from 'react'
import './nav.css'
import { RiHomeHeartLine, RiFileUserLine } from 'react-icons/ri'
import { FaArtstation } from 'react-icons/fa'
import { GrResume } from 'react-icons/gr'
import { MdContactMail } from 'react-icons/md'

const nav = () => {
  return (
      <nav>
        <a href="#"><RiHomeHeartLine/></a>
        <a href="#about"><RiFileUserLine/></a>
        <a href="#porfolio"><FaArtstation/></a>
        <a href="#resume"><GrResume/></a>
      <a href="#contact"><MdContactMail/></a>
        
      </nav> 
   
  )
}

export default nav
