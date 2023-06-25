import React, { useEffect, useState }  from "react";
import { Grid } from "@mui/material";
import hero_hackathons from '../../assets/first-screen.png'//image subject to change
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
            <br/>
                    <p>Hackcon is a student-run hackathon at Constructor University where individuals from all
                        over
                        Europe come together to collaborate on kick-ass projects. It is a 24 hour event of
                        programming, tech talks, games, and epic Nerf-gun battles. Our theme for the 9th edition
                        of Hackcon is <strong>Artificial Intelligence</strong>.</p>
                    <br/>
                    <p>At Hackcon, our mission is to provide a platform for individuals to explore new
                        technologies and collaborate on innovative projects. We believe in the power of
                        technology to shape the future, and aim to empower individuals to take the lead in this
                        exciting field.</p>
          </div>
        </Grid>
        <Grid item md={6} style={{padding: "135px 75px"}}>
          <img src={hero_hackathons} style={{ maxWidth: "100%",height:'100%' }} />
        </Grid>
      </Grid>
    </div>
  );
};


export default AboutText;
