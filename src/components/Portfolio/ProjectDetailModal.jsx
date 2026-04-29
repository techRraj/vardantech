import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiX, FiExternalLink } from 'react-icons/fi';
import styles from './ProjectDetailModal.module.css';

const ProjectDetailModal = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <motion.div
      className={styles.overlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className={styles.modal}
        initial={{ scale: 0.8, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 30 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        onClick={e => e.stopPropagation()}
      >
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
          <FiX size={24} />
        </button>

        <div className={styles.heroImage}>
          <img src={project.img} alt={project.title} />
        </div>

        <div className={styles.body}>
          <h2>{project.title}</h2>
          <p className={styles.client}>
            Client: <strong>{project.client}</strong>
          </p>

          <section className={styles.section}>
            <h3>Overview</h3>
            <p>{project.description}</p>
          </section>

          <section className={styles.section}>
            <h3>The Challenge</h3>
            <p>{project.challenge}</p>
          </section>

          <section className={styles.section}>
            <h3>Our Solution</h3>
            <p>{project.solution}</p>
          </section>

          <section className={styles.section}>
            <h3>Key Features</h3>
            <ul>
              {project.features?.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </section>

          <section className={styles.section}>
            <h3>Technology Stack</h3>
            <div className={styles.techTags}>
              {project.tech.map((t, idx) => (
                <span key={idx} className={styles.tech}>{t}</span>
              ))}
            </div>
          </section>

          {/* {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.liveLink}
            >
              <FiExternalLink /> Visit Live Project
            </a>
          )} */}

          {project.gallery && project.gallery.length > 0 && (
            <section className={styles.section}>
              <h3>Screenshots</h3>
              <div className={styles.gallery}>
                {project.gallery.map((src, idx) => (
                  <img key={idx} src={src} alt={`${project.title} screenshot ${idx + 1}`} />
                ))}
              </div>
            </section>
          )}
<div className={styles.ctaBlock}>
  <p>Want a project like this? Let’s talk.</p>
  <a href="/contact" className={styles.ctaButton}>Get a Free Consultation</a>
</div>
          <div className={styles.cta}>
            <button className={styles.contactBtn} onClick={onClose}>
              Close Case Study
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetailModal;