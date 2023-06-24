import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <nav className="navbar">
                    <div className="logo">HACKCON</div>
                    <ul className="nav-links">
                        <li>About</li>
                        <li>Speakers</li>
                        <li>Schedule</li>
                        <li>Team</li>
                        <li>FAQ</li>
                        <li>Contact</li>
                    </ul>
                </nav>
                <section className="welcome-section">
                    <h1>JOIN US AT HACKCON<br/>2023</h1>
                    <p className="subtext">Embrace Cutting-Edge Collaborations and Experience<br/>the Future of AI</p>
                </section>
            </header>
        </div>
    );
}

export default App;
