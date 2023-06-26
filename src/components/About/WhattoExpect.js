import React, { useEffect, useState } from 'react';
import styles from './about.css';

const WhattoExpect = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className="header">
        <h2>What To Expect</h2>
        <div className="line" style={{ transform: `translateX(${scrollPosition}px)` }}></div>
      </div>
      <div className="textdiv">
        <p>At Hackcon 2023, you can expect to be part of an exciting community of developers, designers, and innovators from all over Europe. Our team has worked hard to create an event that is both challenging and inspiring, with plenty of opportunities to learn, collaborate, and have fun. Whether you're a seasoned pro or just getting started, Hackcon 2023 is the place to be.</p>
        <p>At Hackcon 2023, you can expect to be part of an exciting community of developers, designers, and innovators from all over Europe. Our team has worked hard to create an event that is both challenging and inspiring, with plenty of opportunities to learn, collaborate, and have fun. Whether you're a seasoned pro or just getting started, Hackcon 2023 is the place to be.</p>      
    </div>
    </div>
  );
};

export default WhattoExpect;
