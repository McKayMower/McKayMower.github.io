import React from 'react'
import AboutMe from './components/aboutme/AboutMe'
import Contact from './components/contact/ContactMe'
import Experience from './components/experience/Experience'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services'
import Testimonials from './components/services/Services'
import Footer from './components/footer/Footer'

/* added comment */

const App = () => {
  return (
    <>
      <Header/>
      <Navbar/>
      <AboutMe/>
      <Experience/>
      {/* <Services/> */}
      <Portfolio/>
      {/* <Testimonials/> */}
      <Contact/>
      <Footer/>
    </>
  )
}

export default App