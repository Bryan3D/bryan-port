import React from 'react'
import './nav.css'
import { RiHomeHeartLine, RiFileUserLine } from 'react-icons/ri'
import { FaArtstation } from 'react-icons/fa'
import { GiSkills } from 'react-icons/gi'
import { MdContactMail } from 'react-icons/md'

const nav = () => {
  return (
      <nav>
        <a href="#"><RiHomeHeartLine/></a>
        <a href="#about"><RiFileUserLine/></a>
        <a href="#portfolio"><FaArtstation/></a>
      <a href="#skills"><GiSkills /></a>
      <a href="#contact"><MdContactMail/></a>
        
      </nav> 
   
  )
}

export default nav
