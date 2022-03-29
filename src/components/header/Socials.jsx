import React from 'react'
import {FaLinkedin, FaFacebook, FaGithub} from 'react-icons/fa'

const Socials = () => {
  return (
    <div className='header-socials'>
        <a href='https://www.linkedin.com/in/mmower777/' target = "_blank" rel='noreferrer'><FaLinkedin/></a>
        <a href='https://www.github.com/McKayMower' target = "_blank" rel='noreferrer'><FaGithub/></a>
        <a href='https://www.facebook.com/mckay.mower' target = "_blank" rel='noreferrer'><FaFacebook/></a>
    </div>
  )
}

export default Socials