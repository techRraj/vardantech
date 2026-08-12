import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiExternalLink } from 'react-icons/fi';
import styles from './TrustBadges.module.css';

const badges = [
  {
    id: 1,
    name: 'Google',
    description: 'Verified Partner',
    image: '/assets/badges/google-partner.webp',
    fallbackText: 'G',
    color: '#4285F4',
  },
  {
    id: 2,
    name: 'Upwork',
    description: 'Top Rated Agency',
    image: '/assets/badges/upwork-top-rated.webp',
    fallbackText: 'U',
    color: '#14A800',
  },
  {
    id: 3,
    name: 'Clutch',
    description: 'Verified Company',
    image: '/assets/badges/clutch-verified.jpg',
    fallbackText: 'C',
    color: '#FF6B35',
  },
  {
    id: 4,
    name: 'Freelancer',
    description: 'Preferred Partner',
    image: '/assets/badges/freelancer-verified.jpg',
    fallbackText: 'F',
    color: '#F5A623',
  },
];

const TrustBadges = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        {/* Simple Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>Trusted & Verified</h2>
          <p className={styles.subtitle}>Our expertise is recognized by leading platforms</p>
        </motion.div>

        {/* Badges Row */}
        <div className={styles.grid}>
          {badges.map((badge, idx) => (
            <motion.div
              key={badge.id}
              className={styles.badgeCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              whileHover={{ y: -4 }}
            >
              {/* Logo Image */}
              <div className={styles.logoWrapper}>
                <img 
                  src={badge.image} 
                  alt={badge.name}
                  className={styles.logo}
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<span class="${styles.fallbackText}" style="color:${badge.color}">${badge.fallbackText}</span>`;
                  }}
                />
              </div>

              {/* Name & Description */}
              <div className={styles.info}>
                <span className={styles.name}>{badge.name}</span>
                <span className={styles.desc}>{badge.description}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Simple Bottom Line */}
        <motion.p
          className={styles.bottomLine}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <FiAward style={{ marginRight: 6 }} />
          Trusted by 200+ businesses worldwide
        </motion.p>
      </div>
    </section>
  );
};

export default TrustBadges;