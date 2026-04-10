import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiClock, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './ContactInfo.module.css';
import MapPlaceholder from './MapPlaceholder';

const ContactInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h3>Get in Touch</h3>
        <div className={styles.infoItem}>
          <FiPhone /> <span>+91 8889710105</span>
        </div>
        <div className={styles.infoItem}>
          <FiMail /> <span>Vardaantechhub.info@gmail.com</span>
        </div>
        <div className={styles.infoItem}>
          <FiMapPin /> <span>Platinum Plaza
PU-4, A.B. Road, Behind C-21 Mall 
Indore, , Indore, India</span>
        </div>
        <div className={styles.infoItem}>
          <FiClock /> <span>Mon-Fri: 9:00 AM - 6:00 PM IST</span>
        </div>
        <div className={styles.social}>
          <a href="#"><FiInstagram /></a>
          <a href="#"><FiLinkedin /></a>
          <a href="#"><FiTwitter /></a>
          <a href="#"><FaWhatsapp /></a>
        </div>
      </div>
      <MapPlaceholder />
    </div>
  );
};

export default ContactInfo;