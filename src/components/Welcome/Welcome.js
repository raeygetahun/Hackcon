import React from "react";
import "./welcome.css";
import logo from "../../assets/logo.png"

const Welcome = () => {
  return (
    <section id="welcome-section" className="welcome-section">
      <div className="welcomeWrapper">
        <img src={logo} height="110%"/>
      </div>
    </section>
  );
};

export default Welcome;
