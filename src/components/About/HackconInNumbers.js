import React, { useEffect, useState } from "react";
import "./about.css";
import { Grid } from "@mui/material";
import useScrollHandler from "../../hooks/useScrollHandler";
import hero_hackathons from "../../assets/first-screen.png";

const Statistic = ({ number, text, index, isLineActive }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(isLineActive);
    }, index * 200); // Adjust the delay timing as per your preference (500ms in this example)

    return () => clearTimeout(timer);
  }, [index, isLineActive]);

  return (
    <Grid item xs={6} className="numbersgrid">
      <div className="stats">
        <div
          className={`statnumbers ${isActive ? "active" : ""}`}
          style={{
            transition: "opacity 1.5s ease-in",
            opacity: isActive ? 1 : 0,
          }}
        >
          {number}
        </div>
        <div
          className={`ShortHorizontalLine ${isActive ? "active" : ""}`}
        ></div>
        <div className="HorizontalLine"></div>
        <div
          className={`numbersText ${isActive ? "active" : ""}`}
          style={{
            transition: "opacity 1.5s ease-in",
            opacity: isActive ? 1 : 0,
          }}
        >
          {text}
        </div>
      </div>
    </Grid>
  );
};

const HackconInNumbers = () => {
  const isLineActive = useScrollHandler("ShortHorizontalLine");

  const statisticsData = [
    { number: "100", text: "PARTICIPANTS" },
    { number: "24", text: "HOURS" },
    { number: "1000$", text: "TOTAL PRIZE" },
    { number: "25", text: "PROJECTS" },
  ];

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item md={6} style={{ padding: "135px 75px" }}>  
          <img
            src={hero_hackathons}
            style={{ maxWidth: "100%", height: "100%" }}
          />
        </Grid>

  <Grid item md={6} style={{ textAlign: "center" }}>
          <div className="HackconInNumbersWrapper">
            <h4>Hackcon In Numbers</h4>
            <Grid container spacing={3}>
              <Grid></Grid>
              {statisticsData.map((statistic, index) => (
                <Statistic
                  key={index}
                  number={statistic.number}
                  text={statistic.text}
                  index={index}
                  isLineActive={isLineActive}
                />
              ))}
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default HackconInNumbers;
