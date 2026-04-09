import React from 'react';
import { motion } from 'framer-motion';
import { FiShield, FiCheckCircle } from 'react-icons/fi';
import styles from './Certifications.module.css';

const certs = [
  { name: 'ISO 27001 Certified', icon: <FiShield /> },
  { name: 'GDPR Compliant', icon: <FiCheckCircle /> },
  { name: 'SOC 2 Type II', icon: <FiShield /> },
  { name: 'AWS Advanced Partner', icon: <FiCheckCircle /> },
];

const Certifications = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className={styles.heading}>Trust & Compliance</h2>
        <div className={styles.grid}>
          {certs.map((cert, idx) => (
            <motion.div
              key={idx}
              className={styles.badge}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <span className={styles.icon}>{cert.icon}</span>
              <span>{cert.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;