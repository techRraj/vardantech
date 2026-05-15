import React from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiTwitter } from 'react-icons/fi';
import styles from './TeamGrid.module.css';
// import ceomamImg from "../../assets/ceomam.png";
import ceomamImg from '../../assets/ceomam.png';
import anajana from '../../assets/anjana itwari2.jpg'
import raj from '../../assets/profileraj.png'

const team = [
  { name: 'Mrs .Mini Chauhan ', role: 'Founder & CEO', img:ceomamImg  },
  // { name: 'Ms.Ravindra singh rajawat ', role: 'CTO', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { name: 'Rajkumar Chourasiya', role: 'Head of AI', img:raj },
  { name: 'Anjana tiwari', role: 'Product Lead', img:anajana },
  { name: 'Aman Raut', role: 'Senior Architect', img: 'https://randomuser.me/api/portraits/men/75.jpg' },
  { name: 'Ranjana Karma', role: 'UX Director', img: 'https://randomuser.me/api/portraits/women/28.jpg' },
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