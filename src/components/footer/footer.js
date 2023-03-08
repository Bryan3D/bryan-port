import React from 'react'
import './footer.css';
import '../../styles.css';


const footer = () => {
  return (
    <footer id='foot'>
      <ul className="footer-list">
        <li><a href='#' className='text-light'>Home</a></li>
        <li><a href='#about' className='text-light'>About Me</a></li>
        <li><a href='#portfolio' className='text-light'>Portfolio</a></li>
        <li><a href='#skills' className='text-light'>Skills</a></li>
        <li><a href='#contact' className='text-light'>Contact Me</a></li>
      </ul>

      <div className="footer_copyright" >
        <large className='text-light'>&copy; <h6 className='text-light'> Bryan A Quero. 2023 All rights reserved.</h6></large>
      </div>
    </footer>
  )
}

export default footer
