import React from 'react';
import styles from './Contact.module.css';

function Contact() {
  return (
    <div className={styles.contact}>
      <h1>Contact Us</h1>
      <div className={styles.contactInfo}>
        <div className={styles.contactDetails}>
          <h2>Get in Touch</h2>
          <p><strong>Email:</strong> info@carstore.com</p>
          <p><strong>Phone:</strong> (123) 456-7890</p>
          <p><strong>Address:</strong> 123 Car Street, Autoville, CA 90210</p>
        </div>
        <div className={styles.contactForm}>
          <h2>Send us a Message</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;