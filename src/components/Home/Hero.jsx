import React from 'react';
import { motion } from 'framer-motion';
import Button from '../UI/Button';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroContainer}`}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={styles.title}>
            Build Intelligent <span className={styles.gradient}>AI Agents</span> & Custom Chatbots
          </h1>
          <p className={styles.subtitle}>
            Vardaantechhub delivers enterprise-grade AI solutions, web & mobile apps, and digital transformation services. Get a free demo consultation today.
          </p>
          <div className={styles.ctaGroup}>
         
<Button 
  variant="primary" 
  size="lg"
  onClick={() => {
    const phone = '918889710105';
    const message = encodeURIComponent("Hi Vardana Infotech, I'd like to schedule a free demo consultation.");
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  }}
>
  Free Demo Consultancy
</Button>
            <Button variant="secondary" size="lg">View Services</Button>
          </div>
        </motion.div>
        <motion.div
          className={styles.heroVisual}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Placeholder for illustration */}
          <img src="/assets/ai.png" alt="AI Development" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;