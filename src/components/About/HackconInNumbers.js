import React, { useEffect, useState } from "react";
import "./about.css";
import { Grid } from "@mui/material";
import useScrollHandler from "../../hooks/useScrollHandler";
import logo12 from "../../assets/logo2.png";

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
  const isLogoActive = useScrollHandler("numbersgrid");

  const statisticsData = [
    { number: "100", text: "PARTICIPANTS" },
    { number: "24", text: "HOURS" },
    { number: "1000$", text: "TOTAL PRIZE" },
    { number: "25", text: "PROJECTS" },
  ];

  return (
    <div className="HackconinNumber">
      <Grid container spacing={3}>
        <Grid item md={6} style={{ padding: "95px 55px" }}>
          <img
            className={`logoForHackCon ${isLogoActive ? "active" : ""}`}
            src={logo12}
            style={{ marginTop: "80px", height: "70%" }}
          />
        </Grid>

        <Grid item md={6} style={{ textAlign: "center" }}>
          <div className="HackconInNumbersWrapper">
            {/* <h4>ConstructorHack In Numbers</h4> */}
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
