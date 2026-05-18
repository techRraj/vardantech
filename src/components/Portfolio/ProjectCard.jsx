import React from 'react';
import { motion } from 'framer-motion';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className={styles.card}
      whileHover={{ y: -8 }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => e.key === 'Enter' && onClick()}
    >
      <div className={styles.imageWrapper}>
        <img src={project.img} alt={project.title} />
        <div className={styles.overlay}>
          <span className={styles.caseStudyBtn}>View Case Study</span>
        </div>
      </div>
      <div className={styles.content}>
        <h3>{project.title}</h3>
        <p className={styles.client}>{project.client}</p>
        <div className={styles.tags}>
          {project.tech.map((t, idx) => (
            <span key={idx}>{t}</span>
          ))}
        </div>
        <p className={styles.outcome}>
          <strong>Outcome:</strong> {project.outcome}
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;