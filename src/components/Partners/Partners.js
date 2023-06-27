import React, {useEffect, useRef} from 'react'
import firstScreenImage from '../../assets/first-screen.png';
import './partners.css'

const Partners = () => {
    const movingElementPartnersRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('welcome-section');
            const sectionTop = section.offsetTop;
            const sectionBottom = (sectionTop + section.offsetHeight) / 2;

            if (window.scrollY >= sectionBottom) {
                movingElementPartnersRef.current.classList.add('moving-element-partners');
            } else {
                movingElementPartnersRef.current.classList.remove('moving-element-partners');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section id="partners-section" className="partners-section">
            <div className="content-container-partners">
                <div className="line-partners">
                    <div className="moving-element-partners" ref={movingElementPartnersRef}></div>
                </div>
                <div className="text-container-partners">
                    <h1>OUR PARTNERS</h1>
                    <br/>
                    <p>We are proud to partner with some of the most innovative companies and organizations in the field
                        of <strong>AI</strong>.</p>
                </div>
                <div className="image-container-partners">
                    <img src={firstScreenImage} alt="about"/>
                </div>
            </div>
        </section>
    )
}

export default Partners
