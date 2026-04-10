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
            Founded in 2018, Vardaantechhub began with a simple mission: to make advanced AI and software development accessible to businesses of all sizes. 
            What started as a two-person team has grown into a global technology partner trusted by startups and Fortune 500 companies alike.
          </p>
          <p>
            We've delivered over 150 successful projects, helping clients automate workflows, enhance customer experiences, and unlock new revenue streams through intelligent solutions.
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