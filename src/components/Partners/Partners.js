import React, {useEffect, useRef} from 'react'
import firstScreenImage from '../../assets/first-screen.png';
import './partners.css'

const Partners = () => {
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
        <section id="partners-section" className="partners-section">
            <div className="content-container">
                <div className="line">
                    <div className="moving-element" ref={movingElementRef}></div>
                </div>
                <div className="text-container">
                    <h1>OUR PARTNERS</h1>
                    <br/>
                    <p>We are proud to partner with some of the most innovative companies and organizations in the field
                        of <strong>AI</strong>.</p>
                </div>
                <div className="image-container">
                    <img src={firstScreenImage} alt="about"/>
                    <img src={firstScreenImage} alt="about"/>
                    <img src={firstScreenImage} alt="about"/>
                    <img src={firstScreenImage} alt="about"/>
                </div>
            </div>
        </section>
    )
}

export default Partners