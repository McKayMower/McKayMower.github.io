import React from "react";
import "./experience.css";
import { HiBadgeCheck } from "react-icons/hi";

const Experience = () => {
  return (
    <section id="experience">
      <h5>My Skills</h5>
      <h2>My Experience</h2>

      <div className="container experience-container">
        <div className="experience-frontend">
          <h3>Frontend Experience</h3>
          <div className="experience-content">
            <article className="experience-details">
              <HiBadgeCheck className="experience-details-icon" />
              <div>
                <h4>ReactJS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <HiBadgeCheck className="experience-details-icon" />
              <div>
                <h4>React Native</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <HiBadgeCheck className="experience-details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience-details">
              <HiBadgeCheck className="experience-details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience-details">
              <HiBadgeCheck className="experience-details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience-backend">
          <h3>Backend Experience</h3>
          <div className="experience-content">
            <article className="experience-details">
              <HiBadgeCheck className="experience-details-icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <HiBadgeCheck className="experience-details-icon" />
              <div>
                <h4>NPM </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <HiBadgeCheck className="experience-details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience-details">
              <HiBadgeCheck className="experience-details-icon" />
              <div>
                <h4>FireBase</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience-details">
              <HiBadgeCheck className="experience-details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
