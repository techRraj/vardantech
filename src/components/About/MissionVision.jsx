import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiEye, FiHeart } from 'react-icons/fi';
import styles from './MissionVision.module.css';

const items = [
  { icon: <FiTarget />, title: 'Mission', desc: 'Empower businesses with intelligent, scalable, and secure software solutions that drive growth and innovation.' },
  { icon: <FiEye />, title: 'Vision', desc: 'To be the global leader in AI-driven enterprise solutions, shaping a future where technology amplifies human potential.' },
  { icon: <FiHeart />, title: 'Values', desc: 'Integrity, Excellence, Collaboration, and Customer-Centricity guide everything we do.' }
];

const MissionVision = () => {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.grid}>
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className={styles.icon}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;