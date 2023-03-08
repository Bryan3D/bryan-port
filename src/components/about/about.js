import React from 'react'
import './about.css'
import '../../styles.css'
import ME from '../../assets/portfolio/portf-A.jpeg'

const About = () => {
  return (
    <section id='about'>
      <h1>About Me!</h1>
      <div className='about-img'>
        <img src={ME} alt="Bryan Quero" className='me' />
      </div>
      <div className='about-text'>
        <p>
          I am a highly experienced professional with over 30 years of experience in the construction industry, 8 years in technical art and video games, and 4+ years in XR and MERN development. With my extensive background in these fields, I can offer a unique set of skills that can help bring your project to life.
        </p>
        <p>
          Throughout my career, I have worked on a wide range of construction projects, from large commercial developments to small residential renovations. I have honed my skills in project management, site coordination, and technical drafting, giving me a deep understanding of the building process.
        </p>
        <p>
          As a technical artist and game developer, I have applied my expertise to the field of computer graphics and animation. My attention to detail and understanding of complex software has allowed me to work on a range of projects, including video games, commercial videos, and architectural visualizations.
        </p>
        <p>
          In recent years, I have also developed a strong expertise in XR and MERN development. I have used these technologies to develop immersive experiences for a range of applications, including games, e-commerce platforms, and enterprise software.
        </p>
        <p>
          Overall, I am passionate about using my skills and experience to help bring your project to life. Whether you need help with construction, technical art, or XR/MERN development, I have the skills and expertise to deliver exceptional results. Please explore my website to learn more about my work.
        </p>
      </div>
      <div className='about-btn'>
        <a href="#contact" className='btn btn-primary'>More Info!</a>
      </div>
    </section>
  );
}

export default About

