import React from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiTwitter } from 'react-icons/fi';
import styles from './TeamGrid.module.css';

const team = [
  { name: 'Mr. Ravindra Singh Rajawat', role: 'Founder & CEO', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { name: 'Ms. Mini Chauhan', role: 'CTO', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { name: 'Arjun Nair', role: 'Head of AI', img: 'https://randomuser.me/api/portraits/men/46.jpg' },
  { name: 'Sneha Kapoor', role: 'Product Lead', img: 'https://randomuser.me/api/portraits/women/63.jpg' },
  { name: 'Rahul Desai', role: 'Senior Architect', img: 'https://randomuser.me/api/portraits/men/75.jpg' },
  { name: 'Anjali Singh', role: 'UX Director', img: 'https://randomuser.me/api/portraits/women/28.jpg' },
];

const TeamGrid = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className={styles.heading}>Meet Our Leadership</h2>
        <div className={styles.grid}>
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -6 }}
            >
              <img src={member.img} alt={member.name} className={styles.avatar} />
              <h3>{member.name}</h3>
              <p className={styles.role}>{member.role}</p>
              <div className={styles.social}>
                <a href="#"><FiLinkedin /></a>
                <a href="#"><FiTwitter /></a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamGrid;