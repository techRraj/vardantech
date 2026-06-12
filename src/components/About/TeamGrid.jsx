import React from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import styles from './TeamGrid.module.css';
import ceomamImg from '../../assets/ceomam.png';
import anajana from '../../assets/anjana itwari2.jpg';
import raj from '../../assets/profileraj.png';
import ranjna from '../../assets/ranjanmam.jpeg';
import aman from '../../assets/aman.png';
import groupImg from '../../assets/groupImg.png';

const team = [
  { 
    name: 'Mrs. Mini Chauhan', 
    role: 'Founder & CEO', 
    img: ceomamImg, 
    bio: 'Visionary leader with 5+ years in tech.',
    linkedin: '#',
    twitter: '#',
    email: '#',
    color: '#0a66c2'
  },
  { 
    name: 'Rajkumar Chourasiya', 
    role: 'Head of AI', 
    img: raj, 
    bio: 'Specialist in LLMs and RAG systems.',
    linkedin: '#',
    twitter: '#',
    email: '#',
    color: '#8b5cf6'
  },
  { 
    name: 'Anjana Tiwari', 
    role: 'Product Lead', 
    img: anajana, 
    bio: 'Driving product strategy and UX.',
    linkedin: '#',
    twitter: '#',
    email: '#',
    color: '#ec4899'
  },
  { 
    name: 'Aman Raut', 
    role: 'Senior Architect', 
    img: aman, 
    bio: 'Cloud and DevOps specialist.',
    linkedin: '#',
    twitter: '#',
    email: '#',
    color: '#14b8a6'
  },
  // { 
  //   name: 'Ranjana Karma', 
  //   role: 'UX Director', 
  //   img: ranjna, 
  //   bio: 'Creating seamless user experiences.',
  //   linkedin: '#',
  //   twitter: '#',
  //   email: '#',
  //   color: '#f97316'
  // },
];

// Floating particles for group image
const FloatingParticle = ({ delay, left, size }) => (
  <motion.div
    className={styles.particle}
    style={{
      left: `${left}%`,
      width: size,
      height: size,
    }}
    animate={{
      y: [0, -30, 0],
      opacity: [0, 1, 0],
      scale: [1, 1.5, 1],
    }}
    transition={{
      repeat: Infinity,
      duration: 3 + delay,
      ease: 'easeInOut',
      delay: delay,
    }}
  />
);

const TeamGrid = () => {
  // Staggered reveal for header
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
    }
  };

  // Card hover animation variants
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    }),
    hover: {
      y: -12,
      scale: 1.02,
      transition: { duration: 0.3, ease: 'easeOut' }
    }
  };

  // Avatar pulse on hover
  const avatarVariants = {
    rest: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.08, 
      rotate: [0, -3, 3, 0],
      transition: { 
        rotate: { repeat: Infinity, duration: 2 },
        scale: { duration: 0.3 }
      }
    }
  };

  return (
    <section className={styles.section}>
      <div className="container">
        {/* Animated Section Header */}
        <motion.div 
          className={styles.header}
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <motion.span 
            className={styles.badge}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          >
            Our Team
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Meet Our <span className={styles.gradient}>Leadership</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            The brilliant minds driving innovation at Vardaan tech hub
          </motion.p>
          {/* Decorative line */}
          <motion.div 
            className={styles.divider}
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />
        </motion.div>

        {/* Group Image with Particles */}
        <motion.div
          className={styles.groupImageWrapper}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className={styles.groupImage}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <img src={groupImg} alt="Vardaan tech hub Team" />
            
            {/* Floating particles */}
            <FloatingParticle delay={0} left={10} size={8} />
            <FloatingParticle delay={1} left={30} size={6} />
            <FloatingParticle delay={2} left={50} size={10} />
            <FloatingParticle delay={0.5} left={70} size={7} />
            <FloatingParticle delay={1.5} left={90} size={9} />
            
            {/* Gradient overlay */}
            <div className={styles.groupOverlay}>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                Our Amazing Team
              </motion.span>
            </div>
          </motion.div>
        </motion.div>

        {/* Team Cards Grid */}
        <div className={styles.grid}>
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              className={styles.card}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              whileHover="hover"
            >
              {/* Top accent bar */}
              <div 
                className={styles.accentBar} 
                style={{ background: `linear-gradient(135deg, ${member.color}, ${member.color}88)` }}
              />
              
              {/* Avatar with ring glow */}
              <motion.div 
                className={styles.avatarWrapper}
                variants={avatarVariants}
                initial="rest"
                whileHover="hover"
              >
                <div 
                  className={styles.avatarGlow}
                  style={{ boxShadow: `0 0 30px ${member.color}44` }}
                />
                <img src={member.img} alt={member.name} className={styles.avatar} />
                {/* Status dot */}
                <motion.div 
                  className={styles.statusDot}
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />
              </motion.div>

              {/* Content */}
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.1 }}
              >
                {member.name}
              </motion.h3>
              <p className={styles.role} style={{ color: member.color }}>
                {member.role}
              </p>
              <p className={styles.bio}>{member.bio}</p>

              {/* Social Icons */}
              <motion.div 
                className={styles.social}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + idx * 0.1 }}
              >
                <motion.a 
                  href={member.linkedin} 
                  aria-label="LinkedIn"
                  whileHover={{ scale: 1.2, backgroundColor: member.color, color: '#fff' }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiLinkedin />
                </motion.a>
                <motion.a 
                  href={member.twitter} 
                  aria-label="Twitter"
                  whileHover={{ scale: 1.2, backgroundColor: member.color, color: '#fff' }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiTwitter />
                </motion.a>
                <motion.a 
                  href={`mailto:${member.email}`} 
                  aria-label="Email"
                  whileHover={{ scale: 1.2, backgroundColor: member.color, color: '#fff' }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiMail />
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Join Team CTA */}
        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className={styles.ctaCard}>
            <h3>Want to Join Our Team?</h3>
            <p>We're always looking for talented individuals to build the future with us.</p>
            <motion.a 
              href="/careers"
              className={styles.ctaButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Open Positions →
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamGrid;