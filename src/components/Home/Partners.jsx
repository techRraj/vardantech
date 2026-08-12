import React from 'react';
import { motion } from 'framer-motion';
import { FiStar, FiAward, FiShield, FiTrendingUp } from 'react-icons/fi';
import styles from './Partners.module.css';

const partners = [
  {
    id: 1,
    name: 'Google',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg',
    type: 'Technology Partner',
    since: '2020',
  },
  {
    id: 2,
    name: 'Microsoft',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoft/microsoft-original.svg',
    type: 'Cloud Partner',
    since: '2021',
  },
  {
    id: 3,
    name: 'Amazon AWS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
    type: 'Cloud Partner',
    since: '2019',
  },
  {
    id: 4,
    name: 'OpenAI',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg',
    type: 'AI Partner',
    since: '2023',
  },
  {
    id: 5,
    name: 'Meta',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/meta.svg',
    type: 'Marketing Partner',
    since: '2022',
  },
  {
    id: 6,
    name: 'GitHub',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    type: 'Development Partner',
    since: '2018',
  },
  {
    id: 7,
    name: 'Docker',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    type: 'DevOps Partner',
    since: '2020',
  },
  {
    id: 8,
    name: 'Stripe',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/stripe.svg',
    type: 'Payment Partner',
    since: '2021',
  },
];

const clientLogos = [
  { id: 1, name: 'TechCorp', logo: 'https://via.placeholder.com/120x60/0a66c2/ffffff?text=TechCorp' },
  { id: 2, name: 'FinSecure', logo: 'https://via.placeholder.com/120x60/8b5cf6/ffffff?text=FinSecure' },
  { id: 3, name: 'HealthPlus', logo: 'https://via.placeholder.com/120x60/ec4899/ffffff?text=HealthPlus' },
  { id: 4, name: 'EduLearn', logo: 'https://via.placeholder.com/120x60/14b8a6/ffffff?text=EduLearn' },
  { id: 5, name: 'RetailMax', logo: 'https://via.placeholder.com/120x60/f97316/ffffff?text=RetailMax' },
  { id: 6, name: 'LogiTrans', logo: 'https://via.placeholder.com/120x60/06b6d4/ffffff?text=LogiTrans' },
];

const trustBadges = [
  { icon: FiStar, label: '4.9/5 Rating', desc: '150+ Reviews' },
  { icon: FiAward, label: '15+ Awards', desc: 'Industry Recognition' },
  { icon: FiShield, label: '100% Secure', desc: 'GDPR Compliant' },
  { icon: FiTrendingUp, label: '200+ Projects', desc: 'Successfully Delivered' },
];

const Partners = () => {
  // Duplicate arrays for infinite scroll
  const duplicatedPartners = [...partners, ...partners];
  const duplicatedClients = [...clientLogos, ...clientLogos];

  return (
    <section className={styles.section}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>Trusted Worldwide</span>
          <h2>Our Technology Partners & Clients</h2>
          <p>We collaborate with the world's leading technology companies to deliver exceptional solutions</p>
          <motion.div
            className={styles.divider}
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          className={styles.trustGrid}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {trustBadges.map((badge, idx) => {
            const IconComponent = badge.icon;
            return (
              <motion.div
                key={idx}
                className={styles.trustCard}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className={styles.trustIcon}>
                  <IconComponent size={32} />
                </div>
                <h4>{badge.label}</h4>
                <p>{badge.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Technology Partners - 3D Carousel */}
        <motion.div
          className={styles.partnerSection}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className={styles.subTitle}>Technology Partners</h3>
          
          {/* Row 1 - Left to Right */}
          <div className={styles.marqueeWrapper}>
            <motion.div
              className={styles.marquee}
              animate={{ x: ['0%', '-50%'] }}
              transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
            >
              {duplicatedPartners.map((partner, idx) => (
                <motion.div
                  key={`${partner.id}-${idx}`}
                  className={styles.partnerCard}
                  whileHover={{ scale: 1.1, rotateY: 10 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <div className={styles.partnerLogo}>
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.partnerInfo}>
                    <h5>{partner.name}</h5>
                    <span>{partner.type}</span>
                    <small>Since {partner.since}</small>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Row 2 - Right to Left */}
          <div className={styles.marqueeWrapper}>
            <motion.div
              className={styles.marqueeReverse}
              animate={{ x: ['-50%', '0%'] }}
              transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
            >
              {duplicatedPartners.slice(0, 8).map((partner, idx) => (
                <motion.div
                  key={`rev-${partner.id}-${idx}`}
                  className={styles.partnerCardSmall}
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    loading="lazy"
                  />
                  <span>{partner.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Client Logos */}
        <motion.div
          className={styles.clientSection}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className={styles.subTitle}>Our Happy Clients</h3>
          
          <div className={styles.marqueeWrapper}>
            <motion.div
              className={styles.marquee}
              animate={{ x: ['0%', '-50%'] }}
              transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
            >
              {duplicatedClients.map((client, idx) => (
                <motion.div
                  key={`${client.id}-${idx}`}
                  className={styles.clientCard}
                  whileHover={{ scale: 1.08 }}
                >
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    loading="lazy"
                  />
                  <span>{client.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className={styles.ctaCard}>
            <h3>Want to Become a Partner?</h3>
            <p>Join our network of trusted partners and grow together</p>
            <a href="/contact" className={styles.ctaBtn}>
              Partner With Us →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;