import React from "react";
import "./WhyHackCon.css";

const WhyHackCon = () => {
  return (
    <div className="container">
      <div className="box">
        <div className="content">
          <h2 className="title">WHY HACKCON</h2>
          <h3 className="subtitle">A Different Kind of<br/>Hackathon</h3>
          <p className="description">
            Hackcon is not just about building cool projects. It's about
            collaborating with like-minded individuals and learning from experts
            in the field of AI. We provide a unique environment that fosters
            creativity, innovation, and learning.
          </p>
          <div className="learn-more-box">
            <a href="https://www.example.com" className="learn-more">
              <span className="learn-more-text">Learn More</span>
              { /*more accurate: &#129130; but needs a workaround */}
              <span className="arrow">&#10132;</span>
            </a>
          </div>
        </div>
        <div className="scroll-line"></div>
      </div>
    </div>
  );
};

export default WhyHackCon;
