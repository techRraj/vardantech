import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import styles from './TeamGrid.module.css';
import ceomamImg from '../../assets/ceomam.png';
import anajana from '../../assets/anjana itwari2.jpg';
import raj from '../../assets/profileraj.png';
import ranjna from '../../../public/assets/ranjanmam.jpg';
import aman from '../../assets/aman.png';
import groupImg from '../../assets/groupImg.png';
import nitin from '../../assets/nitin.jpeg';
import Ahinsha from '../../assets/ahinsha.jpeg';
import anuska from '../../assets/anuska.jpeg';
import Kalash from '../../assets/kalash.jpeg';
import Mansi from '../../assets/mansi.jpeg';

const team = [
  { 
    name: 'Mrs. Mini Chauhan', 
    role: 'Founder & CEO', 
    img: ceomamImg, 
    bio: 'Visionary leader with 5+ years in tech.',
    color: '#0a66c2'
  },
  { 
    name: 'Ranjana Vishwakarma', 
    role: 'Co-Founder & CTO', 
    img: ranjna, 
    bio: 'Co-founder of Vardaan Tech Hub',
    color: '#f97316'
  },
  { 
    name: 'Rajkumar Chourasiya', 
    role: 'AI Developer', 
    img: raj, 
    bio: 'Specialist in LLMs and RAG systems.',
    color: '#8b5cf6'
  },
  { 
    name: 'Anjana Tiwari', 
    role: 'Senior Frontend Developer', 
    img: anajana, 
    bio: 'Driving product strategy and UX.',
    color: '#ec4899'
  },
  { 
    name: 'Aman Raut', 
    role: 'Senior Architect', 
    img: aman, 
    bio: 'Cloud and DevOps specialist.',
    color: '#14b8a6'
  },
  { 
    name: 'Nitin Goyal', 
    role: 'RAG/LLM Developer', 
    img: nitin, 
    bio: 'RAG/LLM Developer',
    color: '#ec4899'
  },
  { 
    name: 'Mansi Rajput', 
    role: 'Python Developer', 
    img: Mansi, 
    bio: 'Python Developer',
    color: '#8b5cf6'
  },
  { 
    name: 'Kalash Vyash', 
    role: '.NET Developer', 
    img: Kalash, 
    bio: '.NET Developer',
    color: '#f97316'
  },
  { 
    name: 'Anushka Yadav', 
    role: 'PHP Laravel Developer', 
    img: anuska, 
    bio: 'PHP Laravel Developer',
    color: '#0a66c2'
  },
  { 
    name: 'Ahinsha Suryavanshi', 
    role: 'Java Developer', 
    img: Ahinsha, 
    bio: 'Java Developer',
    color: '#14b8a6'
  },
];

const FloatingParticle = ({ delay, left, size }) => (
  <motion.div
    className={styles.particle}
    style={{ left: `${left}%`, width: size, height: size }}
    animate={{ y: [0, -30, 0], opacity: [0, 1, 0], scale: [1, 1.5, 1] }}
    transition={{ repeat: Infinity, duration: 3 + delay, ease: 'easeInOut', delay }}
  />
);

// Individual Team Card Component
const TeamCard = ({ member, idx }) => (
  <motion.div
    className={styles.card}
    initial={{ opacity: 0, y: 40, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: idx * 0.1, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
    whileHover={{ y: -8, scale: 1.02 }}
  >
    <div className={styles.accentBar} style={{ background: `linear-gradient(135deg, ${member.color}, ${member.color}88)` }} />
    
    <motion.div 
      className={styles.avatarWrapper}
      whileHover={{ scale: 1.08 }}
    >
      <div className={styles.avatarGlow} style={{ boxShadow: `0 0 30px ${member.color}44` }} />
      <img src={member.img} alt={member.name} className={styles.avatar} />
      <motion.div className={styles.statusDot} animate={{ scale: [1, 1.3, 1] }} transition={{ repeat: Infinity, duration: 2 }} />
    </motion.div>

    <h3>{member.name}</h3>
    <p className={styles.role} style={{ color: member.color }}>{member.role}</p>
    <p className={styles.bio}>{member.bio}</p>
  </motion.div>
);

const TeamGrid = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef(null);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, team.length - 1));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Touch swipe handlers
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();

    setTouchStart(0);
    setTouchEnd(0);
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } }
  };

  return (
    <section className={styles.section}>
      <div className="container">
        {/* Section Header */}
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
          <motion.div 
            className={styles.divider}
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />
        </motion.div>

        {/* Group Image */}
        <motion.div
          className={styles.groupImageWrapper}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.div className={styles.groupImage} whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }}>
            <img src={groupImg} alt="Vardaan tech hub Team" />
            <FloatingParticle delay={0} left={10} size={8} />
            <FloatingParticle delay={1} left={30} size={6} />
            <FloatingParticle delay={2} left={50} size={10} />
            <FloatingParticle delay={0.5} left={70} size={7} />
            <FloatingParticle delay={1.5} left={90} size={9} />
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

        {/* Desktop Grid / Mobile Carousel */}
        {isMobile ? (
          <div className={styles.carouselContainer}>
            {/* Previous Button */}
            <button 
              className={`${styles.navBtn} ${styles.prevBtn}`}
              onClick={prevSlide}
              disabled={currentIndex === 0}
              aria-label="Previous member"
            >
              <FiChevronLeft size={22} />
            </button>

            {/* Carousel Window */}
            <div 
              className={styles.carouselWindow}
              ref={carouselRef}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <motion.div
                className={styles.carouselTrack}
                animate={{ x: `-${currentIndex * 100}%` }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                {team.map((member, idx) => (
                  <div key={idx} className={styles.carouselSlide}>
                    <TeamCard member={member} idx={0} />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Next Button */}
            <button 
              className={`${styles.navBtn} ${styles.nextBtn}`}
              onClick={nextSlide}
              disabled={currentIndex === team.length - 1}
              aria-label="Next member"
            >
              <FiChevronRight size={22} />
            </button>
          </div>
        ) : (
          /* Desktop Grid */
          <div className={styles.grid}>
            {team.map((member, idx) => (
              <TeamCard key={idx} member={member} idx={idx} />
            ))}
          </div>
        )}

        {/* Pagination Dots (Mobile Only) */}
        {isMobile && (
          <div className={styles.dots}>
            {team.map((_, idx) => (
              <button
                key={idx}
                className={`${styles.dot} ${idx === currentIndex ? styles.activeDot : ''}`}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to member ${idx + 1}`}
              />
            ))}
          </div>
        )}

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