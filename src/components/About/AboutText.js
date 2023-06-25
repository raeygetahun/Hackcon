import React, {useEffect, useRef} from 'react'
import './about.css'
import firstScreenImage from '../../assets/first-screen.png';

const AboutText = () => {
    const movingElementRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('welcome-section');
            const sectionTop = section.offsetTop;
            const sectionBottom = (sectionTop + section.offsetHeight) / 2;

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
                    <img src={firstScreenImage} alt="about"/>
                </div>
            </div>
        </section>
    )
}

export default AboutText
