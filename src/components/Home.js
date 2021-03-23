import React from "react";
import Typed from "react-typed";
import { Link } from "react-router-dom";

import covervid from "../video-1.mp4";

const Header = () => {
  return (
    <div id="Home" className="header-wrapper">
      <div className="main-info">
        <img src="logo.png" alt="" />
        <video src={covervid} type="video/mp4" autoPlay loop muted />
        <h1>Where The Limits of Your Website Are Out of This World</h1>
        <Typed
          className="typed-text"
          strings={[
            "Web Design",
            "Web Development",
            "Website Hosting",
            "User Experience",
            "Search Engine Optimization",
          ]}
          typeSpeed={100}
          backSpeed={60}
          loop
        />
        <Link
          smooth={true}
          to="Contacts"
          offset={-90}
          href="#"
          className="btn-main-offer"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Header;
