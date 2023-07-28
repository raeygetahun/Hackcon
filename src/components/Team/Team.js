import React from "react";
import { Grid } from "@mui/material";
import Andrei from "../../assets/team/andrei.jpg";
// import Raey from "../../assets/team/raey.jpg";
import Khadija from "../../assets/team/khadija.jpg";
import Sanidhya from "../../assets/team/sanidhya.jpg";
import ruth from "../../assets/team/ruth.jpg";
import Meri from "../../assets/team/meri.jpg";
import Muslim from "../../assets/team/Muslim.jpg";
import Elizaveta from '../../assets/team/elizaveta.jpg'
import "./team.css";

const TeamMember = ({ image, name, role }) => {
  return (
    <div className="team-member">
      <img src={image} alt={`team-member ${name}`} />
      <div className="name-overlay">
        <h1>{name}</h1>
        <p>{role}</p>
      </div>
    </div>
  );
};

const Team = () => {
  const teamMembers = [
    {
      image: Andrei,
      name: "Andrei Bancila",
      role: "Main Oraganisor",
    },
    {
      image: "https://via.placeholder.com/300",
      name: "Yasmine Ammouze",
      role: "Main Oraganisor",
    },
    {
      image: Sanidhya,
      name: "Sanidhya ",
      role: "Head of ... ",
    },
    // {
    //   image: Raey,
    //   name: "Raey Getahun",
    //   role: "Head of IT",
    // },
    {
      image: ruth,
      name: "Ruth Jebessa",
      role: "Head of Logistics",
    },
    {
      image: Khadija,
      name: "Khadija Soua",
      role: "Head of Design & Marketing ",
    },
    {
      image: Elizaveta,
      name: "Elizaveta Eremina",
      role: "IT Team",
    },
    {
      image: Meri,
      name: "Meri Grigoryan",
      role: "IT Team",
    },
    {
      image: Muslim,
      name: "Muslim Bayemirov",
      role: "IT Team",
    },
  ];

  return (
    <section id="team-section" className="team-section">
      <div className="text-container-team">
        <h1>OUR TEAM</h1>
      </div>
      <div className="image-container-team">
        <Grid container spacing={3}>
          {teamMembers.map((member, index) => (
            <Grid item xs={6} sm={3} md={4} key={index}>
              <TeamMember
                image={member.image}
                name={member.name}
                role={member.role}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default Team;
