import React, { useEffect, useState } from "react";
import "./about.css";
import { Grid } from "@mui/material";


const Statistic = ({ number, text, isLineActive }) => (
  <Grid item xs={6} className="numbersgrid">
  <div className="stats">
      <div className="statnumbers">{number}</div>
    <div className="HorizontalLine"></div>
    <div className={`ShortHorizontalLine ${isLineActive ? "active" : ""}`}></div>
    <div className="numbersText">{text}</div>


  </div>
  </Grid>
);


const HackconInNumbers = () => {
  const [isLineActive, setIsLineActive] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const shortLine = document.querySelector(".ShortHorizontalLine");


      if (shortLine) {
        const shortLineTop = shortLine.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;


        setIsLineActive(shortLineTop <= windowHeight * 0.8);
      }
    };


    window.addEventListener("scroll", handleScroll);


    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const statisticsData = [
    { number: "100", text: "Participants" },
    { number: "24", text: "Hours" },
    { number: "1000$", text: "Total Prize" },
    { number: "25", text: "Projects" },
  ];


  return (
    <div>
      <Grid container spacing={3}>
        <Grid item md={6}>
          image
        </Grid>
        <Grid item md={6}>
          <div className="HackconInNumbersWrapper">
            <h4>Hackcon In Numbers</h4>
            <Grid container spacing={3}>
              {statisticsData.map((statistic, index) => (
                <Statistic
                  key={index}
                  number={statistic.number}
                  text={statistic.text}
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