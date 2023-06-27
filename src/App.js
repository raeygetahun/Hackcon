import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Welcome from "./components/Welcome/Welcome";
import AboutText from "./components/About/AboutText";
import "./App.css";
import WhyHackCon from "./components/About/WhyHackCon/WhyHackCon";
import Address from "./components/Contact/Contact";
import HackconInNumbers from "./components/About/HackconInNumbers";
import Footer from "./components/Footer/Footer";
import WhattoExpect from "./components/About/WhattoExpect";
import WhocanParticpate from "./components/About/WhocanParticpate";
import Speakers from "./components/Speakers/Speakers";
import Schedule from "./components/Schedule/Schedule";
import Partners from "./components/Partners/Partners";
import Team from "./components/Team/Team";
import FAQ from "./components/FAQ/FAQ";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <AboutText />
      <HackconInNumbers />
      <WhyHackCon />
      <WhattoExpect />
      <WhocanParticpate />
      <Speakers />
      <Schedule />
      <Partners />
      <Team />
      <FAQ />
      <Address />
      <Footer />
    </div>
  );
}
export default App;
