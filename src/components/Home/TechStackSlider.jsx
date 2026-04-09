import React from 'react';
import { motion } from 'framer-motion';
import styles from './TechStackSlider.module.css';

const technologies = [
  'MongoDB', 'Express.js', 'Node.js', 'React.js', 'PHP', 'Angular.js', 'Python', 'AI/ML',
  'Vector DB', 'OpenAI', 'Java', 'JavaScript', 'TypeScript', 'Next.js', 'PostgreSQL',
  'MySQL', 'Redis', 'Docker', 'AWS', 'Figma', 'Tailwind', 'Vite', 'GraphQL', 'TensorFlow'
];

const TechStackSlider = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>Our Technology Stack</h2>
      </div>
      <div className={styles.marqueeWrapper}>
        <motion.div
          className={styles.marquee}
          animate={{ x: [0, -1920] }}
          transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
        >
          {[...technologies, ...technologies].map((tech, index) => (
            <div key={index} className={styles.techPill}>
              {tech}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSlider;