import React from "react";
import { Grid } from "@mui/material";
import "./WhatAndWho.css";
import useScrollHandler from "../../hooks/useScrollHandler";
function WhoCanParticpate() {
  const isLineActive = useScrollHandler("WhoCanParticpate");
  return (
    <div className="WhoCanParticpate">
      <div className="WhoCanParticpateHeader">Who can Particpate</div>
      <div
        style={{
          width: "40%",
          backgroundColor: "#ffff",
          borderBottom: "1px solid #fff",
        }}
        className="HorizontalLine"
      ></div>
      <div
        style={{ width: "7%", left: "165.5px", borderTop: "3px solid #ffff" }}
        className={`ShortHorizontalLine ${isLineActive ? "active" : ""}`}
      ></div>
      <div className="WhoCanParticpateWrapper">
        <Grid container spacing={3}>
          <Grid item md={6}>
            <p className="FirstParagraph">
              Hackcon is open to students from all over Europe who are
              passionate about technology and innovation. There are no specific
              requirements for participation, other than a willingness to learn
              and collaborate with others. Whether you are a computer science
              major or a creative writing student, there is a place for you at
              Hackcon.
            </p>
          </Grid>
          <Grid item md={6}>
            <p className="SecondParagraph">
              {" "}
              Come join us and be a part of the next generation of innovators
              and entrepreneurs! Click the button below to apply now.
              <br /><br />
              <a className="applyWrapper" href="#">
                Apply Now
              </a>
              <div className="applyarrowDirection">&#x1F862;</div>
      
            </p>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default WhoCanParticpate;
