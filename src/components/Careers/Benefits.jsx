import React from 'react';
import { motion } from 'framer-motion';
import { FiGlobe, FiCoffee, FiBook, FiHeart } from 'react-icons/fi';
import styles from './Benefits.module.css';

const benefits = [
  { icon: <FiGlobe />, title: 'Remote-First', desc: 'Work from anywhere in the world.' },
  { icon: <FiCoffee />, title: 'Health & Wellness', desc: 'Comprehensive health coverage.' },
  { icon: <FiBook />, title: 'Learning Budget', desc: '$2000/year for courses & conferences.' },
  { icon: <FiHeart />, title: 'Flexible Hours', desc: 'Work when you\'re most productive.' }
];

const Benefits = () => {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <h2 className={styles.heading}>Why Join Us?</h2>
        <div className={styles.grid}>
          {benefits.map((b, idx) => (
            <motion.div
              key={idx}
              className={styles.card}
              whileHover={{ y: -5 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className={styles.icon}>{b.icon}</div>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;