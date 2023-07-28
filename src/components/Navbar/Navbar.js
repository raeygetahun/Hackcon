import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./navbar.css";

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isSticky ? "sticky" : ""}`}>
      <div className="logo">ConstructorHack</div>
      <ul className="nav-links">
        <li>
          <Link
            to="About"
            spy={false}
            smooth={true}
            offset={-30}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="tech-talks-container"
            spy={false}
            smooth={true}
            offset={-70}
            duration={1500}
          >
            Speakers
          </Link>
        </li>
        <li>
          <Link
            to="schedule-container"
            spy={false}
            smooth={true}
            offset={-20}
            duration={1500}
          >
            Schedule
          </Link>
        </li>
        <li>
          <Link
            to="team-section"
            spy={false}
            smooth={true}
            offset={0}
            duration={1500}
          >
            Team
          </Link>
        </li>
        <li>
          <Link
            to="FAQ-section"
            spy={false}
            smooth={true}
            offset={-20}
            duration={1500}
          >
            FAQ
          </Link>
        </li>
        <li>
          <Link
            to="Contactcontainer"
            spy={false}
            smooth={true}
            offset={-20}
            duration={1500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
