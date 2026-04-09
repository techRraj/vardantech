import React from 'react';
import { motion } from 'framer-motion';
import styles from './Milestones.module.css';

const milestones = [
  { year: '2018', title: 'Company Founded', desc: 'Started with a vision to democratize AI.' },
  { year: '2019', title: 'First AI Chatbot', desc: 'Deployed custom chatbot for a major e-commerce client.' },
  { year: '2020', title: 'Global Expansion', desc: 'Opened offices in Singapore and Dubai.' },
  { year: '2022', title: '100+ Projects', desc: 'Celebrated 100 successful deliveries.' },
  { year: '2024', title: 'AI Agent Platform', desc: 'Launched proprietary AI agent framework.' },
  { year: '2026', title: 'Industry Leader', desc: 'Recognized as a top AI development firm.' },
];

const Milestones = () => {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <h2 className={styles.heading}>Our Journey</h2>
        <div className={styles.timeline}>
          {milestones.map((item, idx) => (
            <motion.div
              key={idx}
              className={styles.milestone}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className={styles.year}>{item.year}</div>
              <div className={styles.content}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Milestones;