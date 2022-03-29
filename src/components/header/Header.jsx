import React from 'react'
import './header.css'
import CallToAction from './CallToAction'
import PicOfMe from '../../assets/me.png'
import Socials from './Socials'

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello, I'm</h5>
        <h1>McKay Mower</h1>
        <h5 className="text-light">Software Engineer</h5>
        <CallToAction/>
        <Socials/>
        <div className="pic-of-me">
          <img src={PicOfMe} alt="me" />
        </div>

        <a href="#contact" className='scroll-down'>Scroll Down</a>

      </div>

    </header>
  )
}

export default Header