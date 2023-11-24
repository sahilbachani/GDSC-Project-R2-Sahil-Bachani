/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { BiLogoUpwork } from "react-icons/bi";

function Footer() {
  return (
    <footer>
      <div className="container">
        <span className="logo">Sahil Bachani</span>
        <p className="copyright" >© 2023 Sahil Bachani, Inc. All rights reserved.</p>
        <div className="links">
          <a href="https://www.linkedin.com/in/sahil-bachani/">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.upwork.com/freelancers/sahilb">
          <BiLogoUpwork />
          </a>
          <a href="https://twitter.com/bachani_sahil">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;
