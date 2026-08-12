import React from 'react';
import { motion } from 'framer-motion';
import styles from './CompanyStory.module.css';

const CompanyStory = () => {
  return (
    <section className="section">
      <div className={`container ${styles.container}`}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className={styles.label}>Our Story</span>
          <h1>Building Tomorrow's Technology, Today</h1>
          <p>
           Vardaan tech hub was founded with a bold mission: to empower businesses by making advanced AI, modern web design, and scalable software development accessible to every ambitious brand.
          </p>
          <p>
            As a nimble, next-generation technology partner, we combine cut-throat speed, modern design principles, and cutting-edge tech stacks (React, TypeScript, Node.js, and AI integrations) to turn complex ideas into high-converting digital products. From slick e-commerce platforms to intelligent web apps, we help startups and growing businesses automate workflows, elevate brand presence, and scale seamlessly.
          </p>
        </motion.div>
        <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Our office" />
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyStory;