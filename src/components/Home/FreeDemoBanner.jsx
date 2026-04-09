import React from 'react';
import { motion } from 'framer-motion';
import Button from '../UI/Button';
import styles from './FreeDemoBanner.module.css';

const FreeDemoBanner = () => {
  return (
    <section className={styles.banner}>
      <div className="container">
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2>Ready to Transform Your Business with AI?</h2>
          <p>Get a free 30-minute consultation with our AI specialists.</p>
          <Button variant="primary" size="lg">Book Your Free Demo</Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FreeDemoBanner;