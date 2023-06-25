import React, { useEffect, useState }  from "react";
import { Grid } from "@mui/material";
// import hero_hackathons from '../../assets/hero_hackathons.jpg'//image subject to change
import "./about.css";
import useScrollHandler from "../../hooks/useScrollHandler";


const AboutText = () => {
  const isLineActive = useScrollHandler("ShortLine");

  return (
    <div className="About ">
      <Grid container spacing={3}>
        <Grid className="AboutText" item md={6} xs={12}>
          <div className="VerticalLine"></div>
          <div className={`ShortLine ${isLineActive ? "active" : ""}`}></div>
          <div className="AboutTextWrapper">
            <h4>ABOUT HACKCON</h4>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Tristique senectus et netus et malesuada fames ac. Venenatis
              tellus in metus vulputate eu scelerisque felis imperdiet proin.
              Volutpat commodo sed egestas egestas fringilla phasellus faucibus
              scelerisque. Nunc sed id semper risus in hendrerit gravida rutrum
              quisque. Eu mi bibendum neque egestas congue quisque egestas diam.
              Blandit massa enim nec dui. Pretium vulputate sapien nec sagittis
              aliquam malesuada bibendum arcu. Magnis dis parturient montes
              nascetur ridiculus. Posuere morbi leo urna molestie at elementum
              eu facilisis. Enim nulla aliquet porttitor lacus luctus accumsan.
              In fermentum et sollicitudin ac orci phasellus egestas. Tellus
              integer feugiat scelerisque varius morbi enim. Neque sodales ut
              etiam sit amet nisl. Egestas integer eget aliquet nibh.
            </span>
          </div>
        </Grid>
        <Grid item md={6}>
          {/* <img src={hero_hackathons} style={{ maxWidth: "100%",height:'100%' }} /> */}
        </Grid>
      </Grid>
    </div>
  );
};


export default AboutText;
