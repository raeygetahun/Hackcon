import React from 'react'
import firstScreenImage from "../../assets/first-screen.png";
import './team.css'

const
    Team = () => {
  return (
      <section id="team-section" className="team-section">
          <div className="text-container-team">
            <h1>OUR TEAM</h1>
          </div>
          <div className="image-container-team">
            <img src={firstScreenImage} alt="about"/>
            {/*<img src={firstScreenImage} alt="about"/>*/}
            {/*<img src={firstScreenImage} alt="about"/>*/}
            {/*<img src={firstScreenImage} alt="about"/>*/}
          </div>
      </section>
  )
}

export default Team
