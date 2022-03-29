import React from "react";
import "./portfolio.css";
import img1 from "../../assets/portfolio1.jpg";
import img2 from "../../assets/portfolio2.jpg";
import img3 from "../../assets/portfolio3.jpg";

const data = [
  {
    id: 1,
    image: img1,
    title: "Pathfinding Algorithm Visualizer",
    github: "https://github.com/McKayMower/pav",
  },
  {
    id: 2,
    image: img2,
    title: "YouTube to MP3 Converter",
    github: "https://github.com/McKayMower/Jazzie",
  },
  {
    id: 3,
    image: img3,
    title: "Physical Pong Game (Group project)",
    github: "https://github.com/ColinPollard/ECE3710",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        {data.map(({ id, image, title, github }) => {
          return (
            <article key={id} className="portfolio-item">
              <div className="portfolio-item-image">
                <img src={image} alt={title} />
              </div>

              <h3>{title}</h3>
              <div className="portfolio-item-btn">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
