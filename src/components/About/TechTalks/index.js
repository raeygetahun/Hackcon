import React from "react";
import "./index.css";
import firstPageImage from "../../../assets/first-screen.png";

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
        </div>
        <a
          className="learn-more-tech"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
        >
          Learn More
          <span className="arrow-tech"></span>
        </a>
      </div>
      <div className="image-subcomponent">
        <img src={firstPageImage} alt="HackCon" />
      </div>
    </div>
  );
};

export default TechTalks;
