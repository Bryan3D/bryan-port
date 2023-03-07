import React from 'react'
import './about.css'
import '../../styles.css'
import ME from '../../assets/portfolio/portf-A.jpeg'

const about = () => {
  return (
    <section id='about'>
      <h1 > About Me!</h1>
      <div class='about-img'>
        <img src={ME} alt="Bryan Quero" className='me' />
      </div>
      <div class='about-img2'> 
      <p className='text-light'>
        I am a highly experienced professional with more than 30 years of experience in the construction industry, over 8 years as a technical artist, video games, and 4+ years in XR and MERN development. With my extensive background in these fields, I offer a unique set of skills that can help bring your project to life.

        Throughout my career, I have worked on a wide range of construction projects, from large commercial developments to small residential renovations. I have honed my skills in project management, site coordination, and technical drafting, giving me a deep understanding of the building process.

        As a technical artist and game developer, I have applied my expertise to the field of computer graphics and animation. My attention to detail and understanding of complex software has allowed me to work on a range of projects, including video games, A commercial video for a nationwide campaign, and architectural visualizations.

        In recent years, I have also developed a strong expertise in XR and MERN development. I have used these technologies to develop immersive experiences for a range of applications, including games, e-commerce platforms, and enterprise software.

        Overall, I am passionate about using my skills and experience to help bring your project to life. Whether you need help with construction, technical art, or XR/MERN development, I have the skills and expertise to deliver exceptional results. I invite you to explore my website and learn more about my work.
      </p>
      </div>
      <div class='about-btn'>
      <a href="#contact" className='btn btn-primary'>More Info!</a>
      </div>
    </section>
  )
}

export default about

