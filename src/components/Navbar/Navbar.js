import React, {useEffect} from 'react'
import {Link} from "react-scroll";
import './navbar.css'

const Navbar = () => {
    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('.navbar');
            const scrollThresholdNavbar = 400; // Adjust this value as needed

            if (window.scrollY > scrollThresholdNavbar) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
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
    )
}

export default Navbar
