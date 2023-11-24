/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";

function Projects() {
  const [projects] = useState([
    {
      title: "Logo Designing",
      img: "/projects/1.jpg",
      gLink: "https://www.behance.net/gallery/120398219/Premium-Logos",
      lLink: "https://sahilbachani.netlify.app/",
    },
    {
      title: "ECON App",
      img: "/projects/2.jpg",
      gLink: "https://www.behance.net/gallery/141201935/ECON-Mobile-Banking-App",
      lLink: "https://sahilbachani.netlify.app/",
    },
    {
      title: "Android Concept",
      img: "/projects/3.jpg",
      gLink: "https://www.behance.net/gallery/134258805/Android-Concept",
      lLink: "https://sahilbachani.netlify.app/",
    },
    {
      title: "Eatema App",
      img: "/projects/4.jpg",
      gLink: "https://www.behance.net/gallery/166122201/EATEMA-Food-Delivery-App-UIUX-Presentation",
      lLink: "https://sahilbachani.netlify.app/",
    },
    {
      title: "Design Work",
      img: "/projects/5.jpg",
      gLink: "https://www.behance.net/gallery/134258635/Banner-Business-Cards",
      lLink: "https://sahilbachani.netlify.app/",
    },
    {
      title: "YouTube",
      img: "/projects/6.jpg",
      gLink: "https://www.youtube.com/@oftenkill",
      lLink: "https://sahilbachani.netlify.app/",
    },
  ]);
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="title">
          <h3>Projects</h3>
          <a
            href="https://www.behance.net/sahilbachani/projects"
            target="_blank"
            className="btn"
            rel="noreferrer">
            View All
          </a>
        </div>
        <div className="projects-wrapper">
          {projects.map((project, i) => (
            <div className="project" key={i}>
              <div className="img-container">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="description">
                <h4>{project.title}</h4>
                <div className="links">
                  <a href={project.gLink} target="_blank" rel="noreferrer">
                  {project.title === "YouTube" ? (
                      <i className="fab fa-youtube"></i>
                    ) : (
                      <i className="fab fa-behance"></i>
                    )}
                  </a>
                  <a href={project.lLink} target="_blank" rel="noreferrer">
                    <i className="fa fa-globe"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
