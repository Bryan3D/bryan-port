import React from 'react'
import Headers from './components/header/header.js';
import About from './components/about/about.js';
import Nav from './components/nav/nav.js';
import Portfolio from './components/portfolio/portfolio.js';
import Skills from './components/skill/skills.js';
import Contact from './components/contact/contact.js';
import Footer from './components/footer/footer.js';



const App = () => {
  return (
    <>
      <Headers />
      <Nav/>
      <About />
      <Portfolio />
      <Skills/>
      <Contact />
      <Footer />

    </>
  )
}

export default App



