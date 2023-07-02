import React from "react";
import { Grid } from "@mui/material";
import "./WhatAndWho.css";
import useScrollHandler from "../../hooks/useScrollHandler";
function WhattoExpect() {
  const isLineActive = useScrollHandler("WhattoExpect");
  return (
    <div className="WhattoExpect">
      <div className="WhattoExpectHeader">What to Expect</div>
      <div style={{width: '40%'}} className="HorizontalLine"></div>
      <div style={{width: '7%', left: '165.8px'}}
        className={`ShortHorizontalLine ${isLineActive ? "active" : ""}`}
      ></div>
      <div className="WhattoExpectWrapper">
        <Grid container spacing={3}>
          <Grid item md={6}>
            <p className="FirstParagraph">
              At Hackcon 2023, you can expect to be part of an exciting
              community of developers, designers, and innovators from all over
              Europe. Our team has worked hard to create an event that is both
              challenging and inspiring, with plenty of opportunities to learn,
              collaborate, and have fun. Whether you're a seasoned pro or just
              getting started, Hackcon 2023 is the place to be.
            </p>
          </Grid>
          <Grid item md={6} >
            <p className="SecondParagraph">
              {" "}
              Hackcon 2023 will feature a range of activities throughout the
              24-hour event, including workshops, tech talks, and of course, the
              hackathon itself. Our team of experienced mentors will be on hand
              to offer guidance and support, and there will be plenty of
              opportunities to network with other attendees. Plus, we'll have
              plenty of food, drinks, and snacks to keep you fueled up and ready
              to go.
            </p>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default WhattoExpect;
