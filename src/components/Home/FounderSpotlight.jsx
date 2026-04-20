import React from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin } from 'react-icons/fi';
import styles from './FounderSpotlight.module.css';

const FounderSpotlight = () => {
  return (
    <section className="section">
      <div className={`container ${styles.container}`}>
        <motion.div
          className={styles.imageWrapper}
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'tween' }}
        >
          <img
            src="https://via.placeholder.com/400x400?text=Founder"
            alt="Founder"
            className={styles.image}
          />
          <div className={styles.parallaxOverlay} />
        </motion.div>
        <div className={styles.content}>
          <span className={styles.label}>Founder & CEO</span>
          <h2>Mr. Ravindra Singh Rajawat</h2>
          <p className={styles.quote}>
            "Our mission is to democratize AI for businesses of all sizes. With over 15 years in tech, I've seen the transformative power of intelligent automation."
          </p>
          <p className={styles.signature}>Proprietor:</p>
          <a href="#" className={styles.linkedin} aria-label="LinkedIn">
            <FiLinkedin size={20} /> Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default FounderSpotlight;