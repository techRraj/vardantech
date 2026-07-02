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
  FiCheckCircle
} from 'react-icons/fi';
import Button from '../UI/Button';
// import Button from '../UI/Button';
import styles from './Hero.module.css';
import aiImage from '../../assets/ai.png';
import logoImage from '../../assets/logo3.png'

const highlights = [
  { icon: <FiTrendingUp />, label: 'Strategy & Consulting' },
  { icon: <FiCpu />, label: 'Autonomous AI Agents' },
  { icon: <FiMessageCircle />, label: 'Conversational AI' },
  { icon: <FiBarChart2 />, label: 'Predictive Analytics' },
  { icon: <FiCloud />, label: 'API & Cloud Integration' },
  { icon: <FiShield />, label: 'Enterprise Security' },
];


const Hero = () => {
  const navigate = useNavigate();
  const [isFlipped, setIsFlipped] = useState(false);

  const handleTap = useCallback(() => setIsFlipped(prev => !prev), []);
  const handleMouseEnter = useCallback(() => setIsFlipped(true), []);
  const handleMouseLeave = useCallback(() => setIsFlipped(false), []);

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroContainer}`}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Premium Badge */}
          <motion.span 
            className={styles.badge}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          >
            <FiCheckCircle style={{ marginRight: 6 }} />
            Enterprise AI Solutions
          </motion.span>

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

          <p className={styles.subtitle}>
            From <strong>AI strategy consulting</strong> to <strong>custom model development</strong>,{' '}
            <strong>intelligent automation</strong>, and <strong>full-scale deployment</strong> — 
            we build complete AI ecosystems that drive revenue, reduce costs, and give you an unfair competitive advantage.
          </p>

          {/* Key Highlights with Professional Icons */}
          <div className={styles.highlights}>
            {highlights.map((item, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + idx * 0.05 }}
              >
                <span className={styles.highlightIcon}>{item.icon}</span>
                {item.label}
              </motion.span>
            ))}
          </div>

          <div className={styles.ctaGroup}>
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                const phone = '918889710105';
                const message = encodeURIComponent(
                  "Hi Vardaan Tech Hub, I'm interested in your enterprise AI solutions. Let's discuss my project."
                );
                window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
              }}
            >
              Book a Free AI Consultation
              <FiArrowRight style={{ marginLeft: 6 }} />
            </Button>
            <Button variant="secondary" size="lg" onClick={() => navigate('/services')}>
              Explore AI Solutions
            </Button>
          </div>

          {/* Trust Indicators */}
          {/* <motion.div 
            className={styles.trustIndicators}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className={styles.trustItem}>
              <span>⭐ 4.9/5</span>
              <span className={styles.trustLabel}>Client Rating</span>
            </div>
            <div className={styles.trustItem}>
              <span>🏆 200+</span>
              <span className={styles.trustLabel}>AI Projects</span>
            </div>
            <div className={styles.trustItem}>
              <span>🌍 15+</span>
              <span className={styles.trustLabel}>Countries</span>
            </div>
            <div className={styles.trustItem}>
              <span>💰 40%</span>
              <span className={styles.trustLabel}>Avg Cost Reduction</span>
            </div>
          </motion.div> */}
        </motion.div>

        {/* Flip Card */}
        <motion.div
          className={styles.flipCard}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleTap}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => e.key === 'Enter' && handleTap()}
          aria-label="Tap to see company details"
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            className={styles.flipCardInner}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className={styles.flipCardFront}>
              <img src={aiImage} alt="Enterprise AI Solutions" />
              <div className={styles.flipHint}>
                <FiArrowRight className={styles.hintIcon} />
                <span>Click to explore</span>
              </div>
            </div>
            <div className={styles.flipCardBack}>
              <motion.div 
                className={styles.backContent}
                initial={{ opacity: 0 }}
                animate={{ opacity: isFlipped ? 1 : 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                <img src={logoImage} alt="Vardaan Tech Hub" className={styles.logoImage} />
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            className={styles.flipGlow}
            animate={{ opacity: isFlipped ? 1 : 0, scale: isFlipped ? 1.1 : 0.9 }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;