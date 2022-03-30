import React from "react";
import "./aboutme.css";
import me from "../../assets/pro2.png";
import { HiBell, HiAcademicCap, HiLightBulb } from "react-icons/hi";

const AboutMe = () => {
  return (
    <section id="About Me">
      <h5>Get To Know</h5>
      <h2>About Me!</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={me} alt="about img" />
          </div>
        </div>

        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <HiBell className="about-icon" />
              <h5> Experience </h5>
              <small>1+ Years Professional Work</small>
            </article>

            <article className="about-card">
              <HiAcademicCap className="about-icon" />
              <h5> Education </h5>
              <small>University of Utah (BS & MS)</small>
            </article>

            <article className="about-card">
              <HiLightBulb className="about-icon" />
              <h5> Creative </h5>
              <small>I have lots of great ideas</small>
            </article>
          </div>
          <p>
            I am currently a BS/MS Computer Engineering student at the
            University of Utah. I love to learn and test my creativeness, and
            building code that changes the world helps me do just that. I am a
            self-motivated, self-taught person. The perfect example of this is
            my personal website (the one you are currently on!) and my
            portfolio/GitHub. I have learned several frontend and backend coding
            languages purely by myself using the internet and various resources.
            I have then put them to use with the various projects I have made
            and posted on my GitHub.
          </p>
          <p>
            In my free time I like to develop apps and frontend UI. When I am
            out of ideas, I like to play video games and go to the gym. These
            things shape who I am as a person and I would not be where I am
            without them.
          </p>
          <p>
            If you were to ask my friends about me, they would say I am smart, I
            am a leader, and of course, I am very tall (I am 6'5"). As a student
            and friend, I am constantly being recognized for these things.
            However, without my extreme passion for coding and the challenges it
            comes with, I would be nothing but a stick in the wind.
          </p>
          <a href="#Contact Me" className="btn btn-primary">
            Let's Converse!
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
