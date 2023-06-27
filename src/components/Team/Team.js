import React from 'react'
import teamMemberImage from "../../assets/team-member.jpg";
import teamMember2Image from "../../assets/team-member2.jpg";
import teamMember3Image from "../../assets/team-member3.jpg";
import teamMember4Image from "../../assets/team-member4.jpg";
import './team.css'

const
    Team = () => {
  return (
      <section id="team-section" className="team-section">
          <div className="text-container-team">
            <h>OUR TEAM</h>
          </div>
          <div className="image-container-team">
              <div className="team-member">
                  <img src={teamMemberImage} alt="team-member 1"/>
                  <div className="name-overlay">
                      <h1>Dakota Johnson</h1>
                      <p>actress</p>
                  </div>
              </div>
              <div className="team-member">
                  <img src={teamMember2Image} alt="team-member 2"/>
                  <div className="name-overlay">
                      <h1>Emma Watson</h1>
                      <p>actress</p>
                  </div>
              </div>
              <div className="team-member">
                  <img src={teamMember3Image} alt="team-member 3"/>
                  <div className="name-overlay">
                      <h1>Some girl</h1>
                      <p>random</p>
                  </div>
              </div>
              <div className="team-member">
                  <img src={teamMember4Image} alt="team-member 4"/>
                  <div className="name-overlay">
                      <h1>Daniel Radcliffe</h1>
                      <p>actor</p>
                  </div>
              </div>
              {/*Scale if you wish*/}
          </div>
      </section>
  )
}

export default Team
