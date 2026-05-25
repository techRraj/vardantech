import React from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';
import { FiShield, FiZap, FiMaximize, FiHeadphones } from 'react-icons/fi';
import styles from './WhyChooseUs.module.css';

const Counter = ({ from, to }) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, latest => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, to, { duration: 3 });
    return controls.stop;
  }, []);

  return <motion.span>{rounded}</motion.span>;
};

const pillars = [
  { icon: <FiShield />, title: 'Enterprise Security', value: 100, suffix: '%', desc: 'GDPR & SOC2 compliant' },
  { icon: <FiZap />, title: 'Lightning Fast', value: 99, suffix: '%', desc: 'Performance score' },
  { icon: <FiMaximize />, title: 'Scalable', value: 10, suffix: 'M+', desc: 'Requests handled daily' },
  { icon: <FiHeadphones />, title: '24/7 Support', value: 15, suffix: 'min', desc: 'Avg response time' }
];

const WhyChooseUs = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className={styles.heading}>Why Businesses Trust Us</h2>
        <div className={styles.grid}>
          {pillars.map((item, idx) => (
            <motion.div
              key={idx}
              className={styles.pillar}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className={styles.icon}>{item.icon}</div>
              <div className={styles.stat}>
                <Counter from={0} to={item.value} />{item.suffix}
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;