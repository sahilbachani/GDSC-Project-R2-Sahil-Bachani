import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function ServicesExperience() {
  const [services] = useState([
    {
      icon: "fa-mobile",
      title: "UI/UX Design",
      desc: "Professional Websites, Apps, & Softwares designs.",
      active: false,
    },
    {
      icon: "fa-code",
      title: "Web Development",
      desc: "Creative and organized websites for maximum productivity.",
      active: false,
    },
    {
      icon: "fa-star",
      title: "Brand Identity",
      desc: "With exceptional skills, professional 'Brands' are made.",
      active: false,
    },
    {
      icon: "fa-paintbrush",
      title: "Graphics Designing",
      desc: "Elevating ideas with impactful graphic designs.",
      active: false,
    },
    {
      icon: "fa-video",
      title: "Video Production",
      desc: "Shaping stories through dynamic video editing.",
      active: false,
    },
    {
      icon: "fa-image",
      title: "Photo Editing",
      desc: "Crafting visual perfection through precise editing.",
      active: false,
    },
  ]);
  return (
    <section className="services-experience">
      <div className="container">
        <div className="services" id="services">
          {services.map((service, i) => (
            <div
              key={i}
              className={`service ${service.active ? "active" : ""}`}
            >
              <i className={`fas ${service.icon}`} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <button className="btn">Know More</button>
            </div>
          ))}
        </div>
        <div className="experiences" id="experiences">
          <div className="experience">
            <h3>6</h3>
            <p>Year Experience</p>
          </div>
          <div className="portfolios">
            <div className="portfolio">
              <h4>15 +</h4>
              <p>Clients</p>
            </div>
            <div className="portfolio">
              <h4><FaStar size={24} />  5</h4>
              <p>User Reviews</p>
            </div>
            <div className="portfolio">
              <h4>60 +</h4>
              <p>Completed Projects</p>
            </div>
            <div className="portfolio">
              <h4>5 +</h4>
              <p>Courses completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesExperience;
