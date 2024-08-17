import React from 'react';
import styles from './About.module.css';
import hondaShowroom from '../../images/honda_passport.jpeg'; 

function About() {
  return (
    <div className={styles.about}>
      <h1>About Us</h1>
      <div className={styles.aboutContent}>
        <div className={styles.aboutImage}>
          <div className={styles.imageContainer}>
            <img src={hondaShowroom} alt="Our Honda showroom" />
          </div>
        </div>
        <div className={styles.aboutText}>
          <h2>Our Story</h2>
          <p>Founded in 2005, Honda CarStore has been a leading provider of quality Honda vehicles for over 15 years. We pride ourselves on our extensive selection of Honda models, competitive prices, and exceptional customer service.</p>
          <h2>Our Mission</h2>
          <p>Our mission is to help every customer find their perfect Honda vehicle while providing a stress-free and enjoyable car-buying experience. We are committed to upholding Honda's reputation for reliability, innovation, and customer satisfaction.</p>
        </div>
      </div>
    </div>
  );
}

export default About;