import React from 'react'
import './navbar.css'
import {HiHome , HiUserCircle, HiBookOpen, HiDatabase, HiChat} from 'react-icons/hi'
import { useState } from 'react'



const Navbar = () => {

  const [active, setActive] = useState("#top")
  
  return (
    <nav>
      <a href='#top' onClick={() => setActive("#top")} className={active === "#top" ? "active" : ""}><HiHome/></a>
      <a href="#About Me" onClick={() => setActive("#About Me")} className={active === "#About Me" ? "active" : ""}><HiUserCircle/></a>
      <a href="#experience" onClick={() => setActive("#experience")} className={active === "#experience" ? "active" : ""}><HiBookOpen/></a>
      <a href="#portfolio" onClick={() => setActive("#portfolio")} className={active === "#portfolio" ? "active" : ""}><HiDatabase/></a>
      <a href="#Contact Me" onClick={() => setActive("#Contact Me")} className={active === "#Contact Me" ? "active" : ""}><HiChat/></a>
    </nav>
  )
}

export default Navbar