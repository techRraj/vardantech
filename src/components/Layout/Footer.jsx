import React from 'react';
import { Link } from 'react-router-dom';
import { FiInstagram, FiLinkedin, FiTwitter, FiFacebook, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import styles from './Footer.module.css';
// import Referral from '../../pages/Referral';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          <div className={styles.brand}>
            <img src="/assets/logo3.png" alt="Vardaantech Hub" className={styles.footerLogo} />
            <p>Building intelligent solutions for tomorrow's challenges.</p>
            <div className={styles.socials}>
              <a href="#"><FiInstagram /></a>
              <a href="#"><FiLinkedin /></a>
              <a href="#"><FiTwitter /></a>
              <a href="#"><FiFacebook /></a>
            </div>
          </div>
          <div className={styles.links}>
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
            </ul>
          </div>
          <div className={styles.links}>
            <h4>Resources</h4>
            <ul>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/referral">Referral Programme</Link></li>


              <li><Link to="/privacy">Privacy Policy</Link></li>

            </ul>
          </div>
          <div className={styles.contactInfo}>
            <h4>Get in Touch</h4>
            <p><FiMapPin />  
4th Floor, Platinum Plaza
PU-4, A.B. Road, Behind C-21 Mall </p>
            <p><FiMail /> Vardaantechhub.info@gmail.com</p>
            <p><FiPhone />+91 8889710105</p>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} VARDAAN TECH HUB. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;