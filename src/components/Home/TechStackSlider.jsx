// TechStackSlider.jsx
import React from 'react';
import { motion } from 'framer-motion';
import styles from './TechStackSlider.module.css';

const technologies = [
  { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', darkInvert: true },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'React.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'Angular.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'AI/ML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
  {
  name: 'Qdrant',
  logo: 'https://cdn.simpleicons.org/qdrant',
  darkInvert: true
}



,
  { name: 'OpenAI', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg', darkInvert: true },
  { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', darkInvert: true },
  { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
  { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
 {
  name: 'AWS',
  logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/amazonaws.svg',
  darkInvert: true
}



,
  { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Vite', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
  { name: 'GraphQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
  { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
];

const TechStackSlider = () => {
  const duplicatedTech = [...technologies, ...technologies];

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
          {duplicatedTech.map((tech, index) => (
            <div key={index} className={styles.techPill}>
              <img
                src={tech.logo}
                alt={tech.name}
                className={`${styles.techLogo} ${tech.darkInvert ? styles.darkInvert : ''}`}
                loading="lazy"
              />
              <span>{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSlider;