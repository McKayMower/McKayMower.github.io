import React from 'react'
import './aboutme.css'
import me from '../../assets/me.png'
import {HiBell, HiAcademicCap, HiLightBulb} from 'react-icons/hi'

const AboutMe = () => {
  return (
    <section id='About Me'>
      <h5>Get To Know</h5>  
      <h2>About Me!</h2>
      
      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={me} alt="about img"/>
          </div>
        </div>

        <div className="about-content">
          <div className="about-cards">
            <article className = "about-card">
              <HiBell className="about-icon"/>
              <h5> Experience </h5>
              <small>1+ Years Professional Work</small>
            </article>

            <article className = "about-card">
              <HiAcademicCap className="about-icon"/>
              <h5> Education </h5>
              <small>BS/MS Student </small>
            </article>

            <article className = "about-card">
              <HiLightBulb className="about-icon"/>
              <h5> Skills </h5>
              <small>I Have Great Traits</small>
            </article>
             

          </div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum quibusdam, in veniam laudantium porro at. Eos totam, nisi fugit blanditiis minima commodi rerum est a delectus assumenda porro unde velit.</p>
          <a href="#Contact Me" className="btn btn-primary">Let's Converse!</a>
        </div>

      </div>

    </section>
  )
}


export default AboutMe