import React from 'react'
import './footer.css';
import '../../styles.css';

const footer = () => {
  return (
    <footer>
      <ul className="footer-list">
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About Me</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#contact'>Contact Me</a></li>
      </ul>

      <div className="footer_copyright">
        <small>&copy; Bryan A Quero. 2023 All rights reserved.</small>
      </div>
    </footer>
  )
}

export default footer
