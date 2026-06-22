import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiShield, FiZap, FiMaximize, FiHeadphones, FiUsers, FiGlobe } from 'react-icons/fi';
import styles from './WhyChooseUs.module.css';

const pillars = [
  { 
    icon: <FiShield />, 
    title: 'Enterprise Security', 
    value: 100, 
    suffix: '%', 
    desc: 'GDPR & SOC2 Compliant',
    color: '#10b981'
  },
  { 
    icon: <FiZap />, 
    title: 'Lightning Fast', 
    value: 99, 
    suffix: '%', 
    desc: 'Performance Score',
    color: '#f59e0b'
  },
  { 
    icon: <FiMaximize />, 
    title: 'Highly Scalable', 
    value: 10, 
    suffix: 'M+', 
    desc: 'Requests Handled Daily',
    color: '#3b82f6'
  },
  { 
    icon: <FiHeadphones />, 
    title: '24/7 Support', 
    value: 15, 
    suffix: 'min', 
    desc: 'Avg Response Time',
    color: '#8b5cf6'
  },
  { 
    icon: <FiUsers />, 
    title: 'Expert Team', 
    value: 50, 
    suffix: '+', 
    desc: 'Skilled Professionals',
    color: '#ec4899'
  },
  { 
    icon: <FiGlobe />, 
    title: 'Global Reach', 
    value: 15, 
    suffix: '+', 
    desc: 'Countries Served',
    color: '#14b8a6'
  },
];

// Optimized counter hook
const useCountUp = (target, isVisible) => {
  const [count, setCount] = useState(0);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!isVisible) return;
    
    const duration = 2000;
    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      const current = Math.floor(startValue + (target - startValue) * eased);
      
      setCount(current);
      
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [target, isVisible]);

  return count;
};

// Individual pillar component (reduces re-renders)
const Pillar = ({ pillar, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const count = useCountUp(pillar.value, isVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      className={styles.pillar}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.08,
        ease: [0.4, 0, 0.2, 1]
      }}
      whileHover={{ 
        y: -8, 
        boxShadow: 'var(--shadow-hover)',
        borderColor: pillar.color 
      }}
    >
      <div className={styles.iconWrapper} style={{ '--pillar-color': pillar.color }}>
        <div className={styles.icon}>{pillar.icon}</div>
      </div>
      
      <div className={styles.stat}>
        <span className={styles.number}>{count}</span>
        <span className={styles.suffix}>{pillar.suffix}</span>
      </div>
      
      <h3>{pillar.title}</h3>
      <p>{pillar.desc}</p>
      
      {/* Decorative line */}
      <div 
        className={styles.line} 
        style={{ background: `linear-gradient(90deg, ${pillar.color}44, ${pillar.color})` }}
      />
    </motion.div>
  );
};

const WhyChooseUs = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.badge}>Why Choose Us</span>
          <h2>Trusted by Businesses Worldwide</h2>
          <p>We deliver exceptional results through innovation, expertise, and dedication</p>
        </motion.div>

        {/* Grid */}
        <div className={styles.grid}>
          {pillars.map((pillar, index) => (
            <Pillar key={index} pillar={pillar} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className={styles.bottomCta}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p>Ready to work with a trusted partner?</p>
          <a href="/contact" className={styles.ctaLink}>
            Get Started Today →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;