import React from 'react'
import './footer.css';


const footer = () => {
  return (
    <footer id='foot'>
      <ul className="footer-list">
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About Me</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#contact'>Contact Me</a></li>
      </ul>

      <div className="footer_copyright">
        <large>&copy; Bryan A Quero. 2023 All rights reserved.</large>
      </div>
    </footer>
  )
}

export default footer
