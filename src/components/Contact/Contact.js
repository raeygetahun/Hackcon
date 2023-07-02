import React from "react";
import "./contact.css";
import { Grid } from "@mui/material";

const Contact = () => {
  return (
    <div className="Contactcontainer">
      <Grid container spacing={3}>
        <Grid className="info" xs={3}>
          <h2 className="addresstitle">HackCon</h2>
          <p className="addresssubtitle">Contact Information:</p>
          <p className="contact-item">Telephone: +1 123 456 7890</p>
          <p className="contact-item">Email: info@hackcon.com</p>
          <p className="contact-item">
            Address: 123 Main Street, City, State, Country
          </p>
        </Grid>
        <Grid xs={7}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2391.833266578389!2d8.649048776346376!3d53.167030888125694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b12ca1e7c06c65%3A0x903fa1786c3fd4e9!2sJacobs%20University%20Bremen!5e0!3m2!1sen!2skz!4v1687691461499!5m2!1sen!2skz"
            width="100%"
            height="500"
            frameBorder="0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
