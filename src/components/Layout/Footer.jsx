import React from 'react';
import { Link } from 'react-router-dom';
import { FiInstagram, FiLinkedin, FiTwitter, FiFacebook, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          <div className={styles.brand}>
            <img src="/assets/logo.svg" alt="Vardana Infotech" className={styles.footerLogo} />
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
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div className={styles.contactInfo}>
            <h4>Get in Touch</h4>
            <p><FiMapPin /> 123 Tech Park, Silicon Valley, CA</p>
            <p><FiMail /> hello@vardanainfotech.com</p>
            <p><FiPhone /> +1 (555) 123-4567</p>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Vardana Infotech Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;