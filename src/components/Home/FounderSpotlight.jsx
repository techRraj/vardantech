import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiLinkedin, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import styles from './FounderSpotlight.module.css';

// import ranjna from '../../assets/ranjanmam.jpeg';

const founders = [
  {
    id: 1,
    name: 'Mrs. MINI CHAUHAN',
    role: 'Founder & CEO',
    image: '/assets/ceo_mam.jpg',
    quote: "Our mission is to democratize AI for businesses of all sizes. With over 15 years in tech, I've seen the transformative power of intelligent automation.",
    linkedin: 'https://www.linkedin.com/in/mini-chouhan/',
    color: '#0a66c2',
  },
  {
    id: 2,
    name: 'Mrs. RANJANA VISHWAKARMA',
    role: 'Co-Founder & CTO',
    image: '/assets/ranjanmam.jpg',
    quote: "Technology is not just about code — it's about solving real problems. We build solutions that create lasting impact for our clients worldwide.",
    linkedin: 'https://www.linkedin.com/',
    color: '#8b5cf6',
  },
];

const FounderSpotlight = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const founder = founders[current];

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % founders.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + founders.length) % founders.length);
  }, []);

  const goTo = (index) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  // Auto-advance
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, next]);

  // Pause auto-play on hover/touch
  const pauseAutoPlay = () => setIsAutoPlaying(false);
  const resumeAutoPlay = () => setIsAutoPlaying(true);

  // Slide animation variants
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
    },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
    }),
  };

  return (
    <section className="section">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className={styles.sectionBadge}>Our Leadership</span>
          <h2>The Visionaries Behind Vardaan Tech Hub</h2>
        </motion.div>

        {/* Carousel Container */}
        <div
          className={styles.carouselContainer}
          onMouseEnter={pauseAutoPlay}
          onMouseLeave={resumeAutoPlay}
          onTouchStart={pauseAutoPlay}
          onTouchEnd={() => setTimeout(resumeAutoPlay, 3000)}
        >
          {/* Navigation Arrows */}
          <button
            className={`${styles.navBtn} ${styles.prevBtn}`}
            onClick={prev}
            aria-label="Previous founder"
          >
            <FiChevronLeft size={24} />
          </button>

          <div className={styles.cardWrapper}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={founder.id}
                className={styles.container}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                {/* Image Section */}
                <motion.div
                  className={styles.imageWrapper}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'tween' }}
                >
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className={styles.image}
                  />
                  {/* Accent border */}
                  <div
                    className={styles.accentBorder}
                    style={{ background: `linear-gradient(135deg, ${founder.color}, ${founder.color}88)` }}
                  />
                  <div className={styles.parallaxOverlay} />
                </motion.div>

                {/* Content Section */}
                <div className={styles.content}>
                  <motion.span
                    className={styles.label}
                    style={{ color: founder.color }}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {founder.role}
                  </motion.span>

                  <motion.h2
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {founder.name}
                  </motion.h2>

                  <motion.p
                    className={styles.quote}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    "{founder.quote}"
                  </motion.p>

                  {founder.linkedin && (
                    <motion.a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.linkedin}
                      aria-label={`${founder.name} LinkedIn`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      whileHover={{ scale: 1.05, x: 4 }}
                      style={{ borderColor: founder.color, color: founder.color }}
                    >
                      <FiLinkedin size={20} /> Connect on LinkedIn
                    </motion.a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            className={`${styles.navBtn} ${styles.nextBtn}`}
            onClick={next}
            aria-label="Next founder"
          >
            <FiChevronRight size={24} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className={styles.dots}>
          {founders.map((_, index) => (
            <motion.button
              key={index}
              className={`${styles.dot} ${index === current ? styles.activeDot : ''}`}
              onClick={() => goTo(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to founder ${index + 1}`}
            >
              {index === current && (
                <motion.div
                  className={styles.dotFill}
                  layoutId="activeDot"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Progress Bar */}
        <div className={styles.progressBar}>
          <motion.div
            className={styles.progressFill}
            key={current}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 5, ease: 'linear' }}
          />
        </div>
      </div>
    </section>
  );
};

export default FounderSpotlight;