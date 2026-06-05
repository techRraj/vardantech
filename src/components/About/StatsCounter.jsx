import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiAward, FiCode, FiGlobe } from 'react-icons/fi';
import styles from './StatsCounter.module.css';

const stats = [
  { icon: <FiUsers />, value: 150, suffix: '+', label: 'Happy Clients' },
  { icon: <FiCode />, value: 200, suffix: '+', label: 'Projects Delivered' },
  { icon: <FiAward />, value: 15, suffix: '+', label: 'Years Experience' },
  { icon: <FiGlobe />, value: 10, suffix: '+', label: 'Countries Served' },
];

const CountUp = ({ target }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const duration = 2000;
          const increment = target / (duration / 16);
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}</span>;
};

const StatsCounter = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className={styles.icon}>{stat.icon}</div>
              <div className={styles.number}>
                <CountUp target={stat.value} />
                {stat.suffix}
              </div>
              <p className={styles.label}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;