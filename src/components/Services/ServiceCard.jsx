import React from 'react';
import { motion } from 'framer-motion';
import styles from './ServiceCard.module.css';

const ServiceCard = ({ service }) => {
  return (
    <motion.div
      className={styles.card}
      whileHover={{ y: -8, boxShadow: 'var(--shadow-hover)' }}
    >
      {service.trending && <span className={styles.badge}>Trending</span>}
      <div className={styles.icon}>{service.icon}</div>
      <h3>{service.title}</h3>
      <p>{service.desc}</p>
      <a href="/contact" className={styles.link}>Learn More →</a>
    </motion.div>
  );
};

export default ServiceCard;