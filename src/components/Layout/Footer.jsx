import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiInstagram, FiLinkedin, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  // Handle navigation with scroll to top
  const goTo = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          {/* Brand */}
          <div className={styles.brand}>
            <img src="/assets/logo3.png" alt="Vardaan Tech Hub" className={styles.footerLogo} />
            <p>Building intelligent solutions for tomorrow's challenges.</p>
            <div className={styles.socials}>
              <a href="https://www.instagram.com/vardaantechhub/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FiInstagram />
              </a>
              <a href="https://www.linkedin.com/company/vardaantechhub-india/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.links}>
            <h4>Quick Links</h4>
            <ul>
              <li><button className={styles.linkBtn} onClick={() => goTo('/')}>Home</button></li>
              <li><button className={styles.linkBtn} onClick={() => goTo('/about')}>About</button></li>
              <li><button className={styles.linkBtn} onClick={() => goTo('/services')}>Services</button></li>
              <li><button className={styles.linkBtn} onClick={() => goTo('/portfolio')}>Portfolio</button></li>
              <li><button className={styles.linkBtn} onClick={() => goTo('/contact')}>Contact</button></li>
            </ul>
          </div>

          {/* Resources */}
          <div className={styles.links}>
            <h4>Resources</h4>
            <ul>
              <li><button className={styles.linkBtn} onClick={() => goTo('/blog')}>Blog</button></li>
              <li><button className={styles.linkBtn} onClick={() => goTo('/careers')}>Careers</button></li>
              <li><button className={styles.linkBtn} onClick={() => goTo('/free-ai-audit')}>Free AI Audit</button></li>
              <li><button className={styles.linkBtn} onClick={() => goTo('/referral')}>Referral Programme</button></li>
              <li><button className={styles.linkBtn} onClick={() => goTo('/privacy')}>Privacy Policy</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.contactInfo}>
            <h4>Get in Touch</h4>
            <div className={styles.contactItem}>
              <FiMapPin className={styles.contactIcon} />
              <span>4th Floor, Platinum Plaza, PU-4, A.B. Road, Behind C-21 Mall, Indore, MP - 452001</span>
            </div>
            <div className={styles.contactItem}>
              <FiMail className={styles.contactIcon} />
              <a href="mailto:Vardaantechhub.info@gmail.com">Vardaantechhub.info@gmail.com</a>
            </div>
            <div className={styles.contactItem}>
              <FiPhone className={styles.contactIcon} />
              <a href="tel:+918889710105">+91 88897 10105</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className={styles.bottom}>
          <p>© {currentYear} <strong>Vardaan Tech Hub</strong>. All rights reserved.</p>
          <div className={styles.bottomLinks}>
            <button className={styles.linkBtn} onClick={() => goTo('/privacy')}>Privacy Policy</button>
            <span className={styles.separator}>|</span>
            <button className={styles.linkBtn} onClick={() => goTo('/contact')}>Contact</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;