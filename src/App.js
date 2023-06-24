import React, {useEffect, useRef} from 'react';
import { Link } from 'react-scroll';
import './App.css';

function App() {
    const movingElementRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('.navbar');
            const scrollThresholdNavbar = 400; // Adjust this value as needed
            const section = document.getElementById('welcome-section');
            const sectionTop = section.offsetTop;
            const sectionBottom = (sectionTop + section.offsetHeight) / 2;

            if (window.scrollY > scrollThresholdNavbar) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            if (window.scrollY >= sectionBottom) {
                movingElementRef.current.classList.add('moving-element');
            } else {
                movingElementRef.current.classList.remove('moving-element');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <nav className="navbar">
                    <div className="logo">HACKCON</div>
                    <ul className="nav-links">
                        <li><Link
                            to="about-section"
                            spy={false}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >About</Link></li>
                        <li><Link
                            to="speakers-section"
                            spy={false}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Speakers</Link></li>
                        <li><Link
                            to="schedule-section"
                            spy={false}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Schedule</Link></li>
                        <li><Link
                            to="team-section"
                            spy={false}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Team</Link></li>
                        <li><Link
                            to="faq-section"
                            spy={false}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >FAQ</Link></li>
                        <li><Link
                            to="contact-section"
                            spy={false}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Contact</Link></li>
                    </ul>
                </nav>
                <section id="welcome-section" className="welcome-section">
                    <h1>JOIN US AT HACKCON<br/>2023</h1>
                    <p className="subtext">Embrace Cutting-Edge Collaborations and Experience<br/>the Future of AI</p>
                </section>
                <section id="about-section" className="about-section">
                    <div className="content-container">
                        <div className="line">
                            <div className="moving-element" ref={movingElementRef}></div>
                        </div>
                        <div className="text-container">
                            <h1>ABOUT HACKCON</h1>
                            <br/>
                            <p>Hackcon is a student-run hackathon at Constructor University where individuals from all
                                over
                                Europe come together to collaborate on kick-ass projects. It is a 24 hour event of
                                programming, tech talks, games, and epic Nerf-gun battles. Our theme for the 9th edition
                                of Hackcon is <strong>Artificial Intelligence</strong>.</p>
                            <br/>
                            <p>At Hackcon, our mission is to provide a platform for individuals to explore new
                                technologies and collaborate on innovative projects. We believe in the power of
                                technology to shape the future, and aim to empower individuals to take the lead in this
                                exciting field.</p>
                        </div>
                        <div className="image-container">
                            <img src='first-screen.png' alt="about"/>
                        </div>
                    </div>
                </section>
            </header>
        </div>
    );
}

export default App;
