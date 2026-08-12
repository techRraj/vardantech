import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  FiTrendingUp, 
  FiCpu, 
  FiMessageCircle, 
  FiBarChart2, 
  FiCloud, 
  FiShield,
  FiArrowRight,
  FiCheckCircle,
  FiStar,
  FiUsers,
  FiGlobe
} from 'react-icons/fi';
import Button from '../UI/Button';
import styles from './Hero.module.css';
import aiImage from '../../assets/ai.png';
import logoImage from '../../assets/logo3.png';

const highlights = [
  { icon: <FiTrendingUp />, label: 'Strategy & Consulting' },
  { icon: <FiCpu />, label: 'Autonomous AI Agents' },
  { icon: <FiMessageCircle />, label: 'Conversational AI' },
  { icon: <FiBarChart2 />, label: 'Predictive Analytics' },
  { icon: <FiCloud />, label: 'API & Cloud Integration' },
  { icon: <FiShield />, label: 'Enterprise Security' },
];

const trustData = [
  { icon: <FiStar />, value: '4.9/5', label: 'Client Rating' },
  { icon: <FiUsers />, value: '200+', label: 'Projects Done' },
  { icon: <FiGlobe />, value: '15+', label: 'Countries' },
];

const Hero = () => {
  const navigate = useNavigate();
  const [isFlipped, setIsFlipped] = useState(false);

  const handleTap = useCallback(() => setIsFlipped(prev => !prev), []);
  const handleMouseEnter = useCallback(() => setIsFlipped(true), []);
  const handleMouseLeave = useCallback(() => setIsFlipped(false), []);

  return (
    <section className={styles.hero}>
      {/* Background Decorative Elements */}
      <div className={styles.bgGlow1} />
      <div className={styles.bgGlow2} />
      <div className={styles.bgGrid} />

      <div className={`container ${styles.heroContainer}`}>
        {/* Left Content */}
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Badge */}
          <motion.div 
            className={styles.badgeWrapper}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className={styles.badge}>
              <FiCheckCircle />
              Enterprise AI Solutions
            </span>
            <span className={styles.badgeSub}>Trusted by 200+ companies worldwide</span>
          </motion.div>

          {/* Title */}
          <h1 className={styles.title}>
            Transform Your Business With{' '}
            <span className={styles.highlightWrapper}>
              <span className={styles.gradient}>End-to-End AI</span>
              <motion.span
                className={styles.underline}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              />
            </span>
          </h1>

          {/* Description */}
          <p className={styles.subtitle}>
            We build complete AI ecosystems — from{' '}
            <strong>strategy</strong> to{' '}
            <strong>development</strong> to{' '}
            <strong>deployment</strong> — 
            that drive revenue, reduce costs, and give you an unfair advantage.
          </p>

          {/* Service Pills */}
          <motion.div 
            className={styles.highlights}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {highlights.map((item, idx) => (
              <motion.span
                key={idx}
                className={styles.pill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + idx * 0.06 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <span className={styles.pillIcon}>{item.icon}</span>
                {item.label}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className={styles.ctaGroup}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <button
              className={styles.primaryBtn}
              onClick={() => {
                const phone = '918889710105';
                const message = encodeURIComponent(
                  "Hi Vardaan Tech Hub, I'm interested in your enterprise AI solutions. Let's discuss my project."
                );
                window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
              }}
            >
              <span>Book a Free AI Consultation</span>
              <FiArrowRight className={styles.btnIcon} />
            </button>
            <button
              className={styles.secondaryBtn}
              onClick={() => navigate('/services')}
            >
              <span>Explore AI Solutions</span>
              <FiArrowRight className={styles.btnIcon} />
            </button>
          </motion.div>

          {/* Trust Bar */}
          <motion.div 
            className={styles.trustBar}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            {trustData.map((item, idx) => (
              <div key={idx} className={styles.trustItem}>
                <span className={styles.trustIcon}>{item.icon}</span>
                <div>
                  <span className={styles.trustValue}>{item.value}</span>
                  <span className={styles.trustLabel}>{item.label}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Visual - Flip Card */}
        <motion.div
          className={styles.visualArea}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <div
            className={styles.flipCard}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleTap}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && handleTap()}
            aria-label="Tap to see company logo"
          >
            <motion.div
              className={styles.flipCardInner}
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Front */}
              <div className={styles.flipCardFront}>
                <img src={aiImage} alt="Enterprise AI Solutions" className={styles.frontImage} />
                <div className={styles.frontOverlay} />
                <div className={styles.flipHint}>
                  <span>Click to explore</span>
                  <FiArrowRight />
                </div>
              </div>

              {/* Back */}
              <div className={styles.flipCardBack}>
                <motion.div 
                  className={styles.backContent}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isFlipped ? 1 : 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                >
                  <img src={logoImage} alt="Vardaan Tech Hub" className={styles.logoImage} />
                </motion.div>
                <div className={styles.backPattern} />
              </div>
            </motion.div>

            {/* Glow ring */}
            <div className={`${styles.glowRing} ${isFlipped ? styles.glowActive : ''}`} />
          </div>

          {/* Floating elements */}
          {/* <motion.div 
            className={styles.floatEl1}
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          >
            <FiCpu />
          </motion.div>
          <motion.div 
            className={styles.floatEl2}
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 0.5 }}
          >
            <FiShield />
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;