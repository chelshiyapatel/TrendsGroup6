import React from 'react';
import styles from './Home.module.css';
import hondaAccord from '../../images/honda_accord.jpeg';
import hondaCivic from '../../images/honda_civic.jpg';
import hondaCrv from '../../images/honda_cr_v.jpeg';

function Home() {
  return (
    <div className={styles.home}>
      <h1>Welcome to Our Honda Car Store</h1>
      <p>Find your dream Honda today!</p>
      <div className={styles.featuredCars}>
        <h2>Featured Cars</h2>
        <div className={styles.carGrid}>
          <div className={styles.carCard}>
            <div className={styles.imageContainer}>
              <img src={hondaAccord} alt="Honda Accord" />
            </div>
            <h3>Honda Accord</h3>
            <p>Starting at $26,120</p>
          </div>
          <div className={styles.carCard}>
            <div className={styles.imageContainer}>
              <img src={hondaCivic} alt="Honda Civic" />
            </div>
            <h3>Honda Civic</h3>
            <p>Starting at $22,350</p>
          </div>
          <div className={styles.carCard}>
            <div className={styles.imageContainer}>
              <img src={hondaCrv} alt="Honda CR-V" />
            </div>
            <h3>Honda CR-V</h3>
            <p>Starting at $26,400</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;