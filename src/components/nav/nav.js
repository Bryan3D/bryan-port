import React from 'react'
import './nav.css'

const nav = () => {
  return (
    <div>
      <h1 class="title"> Navbar</h1>
      <nav className="nav">
        <lu>

          <li className='list-nav-item'>About Me!</li>
          <li className='list-nav-item'>Portfolio</li>
          <li className='list-nav-item'>Resume</li>
          <li className='list-nav-item'>Contac Me!</li>

        </lu>
      </nav> 
    </div>
  )
}

export default nav
