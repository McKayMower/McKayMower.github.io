import React from 'react'
import Resume from '../../assets/mckaymower.pdf'

const CallToAction = () => {
  return (
    <div className="CallToAction">
        <a href={Resume} download className='btn'>Download My Resume!</a>    
        <a href="#Contact Me" className='btn btn-primary'>Contact Me!</a>    
    </div>
  )
}

export default CallToAction