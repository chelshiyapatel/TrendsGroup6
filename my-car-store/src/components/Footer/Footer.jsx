import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>Honda CarStore</h3>
          <p>Your journey begins with us!</p>
        </div>
        <div className={styles.footerSection}>
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cars">Our Models</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3>Contact Us</h3>
          <p><i className="fas fa-envelope"></i> info@hondacarstore.com</p>
          <p><i className="fas fa-phone"></i> (123) 456-7890</p>
          <p><i className="fas fa-map-marker-alt"></i> 123 Honda Drive, Autoville, CA 90210</p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2024 Honda CarStore. All rights reserved.</p>
        <div className={styles.socialIcons}>
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;