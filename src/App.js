import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Welcome from "./components/Welcome/Welcome";
import AboutText from "./components/About/AboutText";
import "./App.css";
import WhyHackCon from "./components/About/WhyHackCon/WhyHackCon";
import Address from "./components/Contact/Contact";
import HackconInNumbers from "./components/About/HackconInNumbers";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Welcome />
        <AboutText />
        <HackconInNumbers />
        <Address />
        <WhyHackCon />
      </header>
      <main>
        <WhyHackCon />
        <Address />
      </main>
      <footer>
        <p>
          &copy; {new Date().getFullYear()} My Hackathon. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
export default App;
