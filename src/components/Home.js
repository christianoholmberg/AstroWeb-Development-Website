import React from "react";
import Typed from "react-typed";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div id="Home" className="header-wrapper">
      <div className="main-info">
        <video src="videos/video-1.mp4" autoPlay loop muted />
        <h1>Web Development and Search Engine Optimization</h1>
        <Typed
          className="typed-text"
          strings={[
            "Web Design",
            "Web Development",
            "User Experience",
            "Search Engine Optimization",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <Link to="Contacts" className="btn-main-offer">
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default Header;
