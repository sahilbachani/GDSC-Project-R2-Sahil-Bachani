import React from "react";

function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
            <img src="/person.png" alt="" />
          </div>
          <div className="banner-content">
            <h6>Hello, I'm </h6>
            <h3>Sahil Bachani</h3>
            <p>
            UI/UX & Graphics Designer <br /> Web Developer <br /> Programmar
            </p>
            <a className="btn" href="https://www.fiverr.com/simon_white?public_mode=true" target="_blank" rel="noreferrer">
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
