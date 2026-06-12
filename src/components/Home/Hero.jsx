import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../UI/Button';
import styles from './Hero.module.css';
import aiImage from '../../assets/ai.png';
import logoImage from '../../assets/logo3.png';

const Hero = () => {
  const navigate = useNavigate();
  const [isFlipped, setIsFlipped] = useState(false);

  // Toggle flip for mobile tap
  const handleTap = useCallback(() => {
    setIsFlipped(prev => !prev);
  }, []);

  // Desktop hover handlers
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
          <h1 className={styles.title}>
            Build Intelligent{' '}
        
              <span className={styles.gradient}>AI Agents</span>
              <motion.span
               
                initial={{ scaleX: 0 }}
                animate={{ scaleX: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              />
           
            
              <span className={styles.gradient}>Custom Chatbots</span>
              <motion.span
               
                initial={{ scaleX: 0 }}
                animate={{ scaleX: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut', delay: 0.5 }}
              />
          
          </h1>
          <p className={styles.subtitle}>
            Vardaan tech hub delivers enterprise‑grade AI solutions, web & mobile apps, and digital
            transformation services. Get a free demo consultation today.
          </p>
          <div className={styles.ctaGroup}>
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                const phone = '918889710105';
                const message = encodeURIComponent(
                  "Hi Vardaan tech hub, I'd like to schedule a free demo consultation."
                );
                window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
              }}
            >
              Free Demo Consultancy
            </Button>
            <Button variant="secondary" size="lg" onClick={() => navigate('/services')}>
              View Services
            </Button>
          </div>
        </motion.div>

        {/* Flip Card Container */}
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
            {/* Front Side */}
            <div className={styles.flipCardFront}>
              <img src={aiImage} alt="AI Development" />
              {/* <div className={styles.flipHint}>
                <span>👆 {typeof window !== 'undefined' && 'ontouchstart' in window ? 'Tap' : 'Hover'} to reveal</span>
              </div> */}
            </div>

            {/* Back Side */}
            <div className={styles.flipCardBack}>
  <motion.div 
    className={styles.backContent}
    initial={{ opacity: 0 }}
    animate={{ opacity: isFlipped ? 1 : 0 }}
    transition={{ delay: 0.2, duration: 0.3 }}
  >
                <img src={logoImage} alt="Vardaan Tech Hub" className={styles.logoImage} />
                <h3>Vardaan Tech Hub</h3>
                <p>Building Tomorrow's Technology, Today</p>
                {/* <div className={styles.backBadges}>
                  <span>🚀 AI Solutions</span>
                  <span>💡 Innovation</span>
                  <span>⚡ Fast Delivery</span>
                </div> */}
              </motion.div>
            </div>
          </motion.div>

          {/* Glow effect on hover */}
          <motion.div
            className={styles.flipGlow}
            animate={{
              opacity: isFlipped ? 1 : 0,
              scale: isFlipped ? 1.1 : 0.9,
            }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;