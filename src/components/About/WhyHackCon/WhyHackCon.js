import React from "react";
import "./WhyHackCon.css";
import useScrollHandler from "../../../hooks/useScrollHandler";
const WhyHackCon = () => {
  const isLineActive = useScrollHandler("targetClassName"); // Replace "targetClassName" with the actual class name of your target element

  return (
    <div style={{ width: "980px", height: "880px", margin: "0 auto" }}>
      <div className={`box ${isLineActive ? "active" : ""}`}>
        <span className="header-text">WHY HACKCON</span>
        <span className="title-text">A Different Kind of Hackathon</span>{" "}
        <p className="body-text">
          Hackcon is not just about building cool projects. It's about
          collaborating with like-minded individuals and learning from experts
          in the field of AI. We provide a unique environment that fosters
          creativity, innovation, and learning.
        </p>
        <a
          className="learn-more"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
          target="_blank"
        >
          Learn More
          <span className="arrow"></span>
        </a>
      </div>
    </div>
  );
};

export default WhyHackCon;
