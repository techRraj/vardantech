import React from 'react';
import { motion } from 'framer-motion';
import styles from './HiringBanner.module.css';

const HiringBanner = () => {
  return (
    <section className={styles.banner}>
      <div className="container">
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1>We're <span className={styles.gradient}>Hiring!</span></h1>
          <p>Join a team of innovators shaping the future of AI and technology.</p>
          <a href="#openings" className={styles.cta}>View Open Positions</a>
        </motion.div>
      </div>
    </section>
  );
};

export default HiringBanner;