import React from 'react'
import './portfolio.css';
import IMG0 from '../../assets/portfolio/portf-vr1.png';
import IMG1 from '../../assets/portfolio/portf-mern2.png';
import IMG2 from '../../assets/portfolio/portf-mern1.png'; 
import IMG3 from '../../assets/portfolio/portf- (4).png'; 
import IMG4 from '../../assets/portfolio/portfUN1.png';
import IMG5 from '../../assets/portfolio/portf- (3).png';
import IMG6 from '../../assets/portfolio/portf- (17).jpg';
import IMG7 from '../../assets/portfolio/portf- (16).jpg';
import IMG8 from '../../assets/portfolio/portf- (14).jpg';
import IMG9 from '../../assets/portfolio/portf- (26).jpg';
import IMG10 from '../../assets/portfolio/portf- (4).jpg';
import IMG11 from '../../assets/portfolio/portf- (28).jpg';
import IMG12 from '../../assets/portfolio/portfUn2.png';

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>A Portfolio of Bryan A Quero Work</h5>
      <h2>Portfolio</h2>
   

      <ul className='portfolio-container'>
        <li className='portfolio-item'>
        <img src={IMG0} alt='Portfolio 1' /> 
        </li>
        <li className='portfolio-item'>
        <img src={IMG1} alt='Portfolio 1' /> 
        </li>
        <li className='portfolio-item'>
        <img src={IMG2} alt='Portfolio 1' /> 
        </li>
        <li className='portfolio-item'>
        <img src={IMG3} alt='Portfolio 1' /> 
        </li>
        <li className='portfolio-item'>
        <img src={IMG4} alt='Portfolio 1' /> 
        </li>
        <li className='portfolio-item'>
        <img src={IMG5} alt='Portfolio 1' /> 
        </li>
        <li className='portfolio-item'>
        <img src={IMG6} alt='Portfolio 1' /> 
        </li>
        <li className='portfolio-item'>
        <img src={IMG7} alt='Portfolio 1' /> 
        </li>
        <li className='portfolio-item'>
        <img src={IMG8} alt='Portfolio 1' /> 
        </li>
        <li className='portfolio-item'>
        <img src={IMG9} alt='Portfolio 1' /> 
        </li>
        <li className='portfolio-item'>
        <img src={IMG10} alt='Portfolio 1' /> 
        </li>
        <li className='portfolio-item'>
        <img src={IMG11} alt='Portfolio 1' /> 
        </li>
        <li className='portfolio-item'>
        <img src={IMG12} alt='Portfolio 1' /> 
        </li>
      </ul>
      







    </section>

  )
}

export default portfolio
