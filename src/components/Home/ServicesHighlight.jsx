import React from 'react';
import { motion } from 'framer-motion';
import { FiCpu, FiMessageCircle, FiGlobe } from 'react-icons/fi';
import styles from './ServicesHighlight.module.css';

const services = [
  {
    icon: <FiCpu size={32} />,
    title: 'AI Agent Development',
    description: 'Custom autonomous agents that automate complex workflows.',
    badge: 'Trending'
  },
  {
    icon: <FiMessageCircle size={32} />,
    title: 'Custom Chatbot',
    description: 'Intelligent conversational AI with RAG and vector search.',
    badge: 'Hot'
  },
  {
    icon: <FiGlobe size={32} />,
    title: 'Web & App Development',
    description: 'Scalable, responsive web and mobile applications.',
  }
];

const ServicesHighlight = () => {
  return (
    <section className="section">
      <div className="container">
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Featured Services
        </motion.h2>
        <div className={styles.cardGrid}>
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className={styles.serviceCard}
              whileHover={{ y: -8, boxShadow: 'var(--shadow-hover)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              {service.badge && <span className={styles.badge}>{service.badge}</span>}
              <div className={styles.icon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="/services" className={styles.learnMore}>Learn More →</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesHighlight;