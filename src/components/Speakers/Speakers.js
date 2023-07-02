import React from "react";
import "./speakers.css";
import firstPageImage from "../../assets/first-screen.png";

const TechTalks = () => {
  return (
    <div className="tech-talks-container">
      <div className="content-container">
        <div className="header-subcomponent">
          <h1>TECH TALKS</h1>
        </div>
        <div className="body-subcomponent">
          <p>
            Our tech talks offer you the chance to hear from experts in the
            field of AI and gain valuable insights into the latest trends and
            technologies. Join us for a day of inspiration and learning.
          </p>
          <a className="learnMoreWrapper" href="#">
            Learn More
          </a>
          <div className="arrowDirection">&#x1F862;</div>
        </div>
      </div>
      <div className="image-subcomponent">
        <img src={firstPageImage} alt="HackCon" />
      </div>
    </div>
  );
};

export default TechTalks;
