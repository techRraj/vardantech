import React from 'react';
import { motion } from 'framer-motion';
import Button from '../UI/Button';
import styles from './FreeDemoBanner.module.css';

const FreeDemoBanner = () => {
  const handleFreeDemo = () => {
    const phone = '918889710105';
    const message = encodeURIComponent("Hi Vardaan tech Hub, I'm interested in a free demo. Please share more details.");
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

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
          <Button variant="primary" size="lg" onClick={handleFreeDemo}>
            Book Your Free Demo
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FreeDemoBanner;