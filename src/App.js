import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Welcome from "./components/Welcome/Welcome";
import AboutText from "./components/About/AboutText";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Navbar/>
                <Welcome/>
                <AboutText/>
            </header>
        </div>
    );
}

export default App;
