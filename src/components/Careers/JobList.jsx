import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ApplicationModal from './ApplicationModal';
import styles from './JobList.module.css';

const jobs = [
  { id: 1, title: 'AI Engineer', location: 'Remote / Indore', type: 'Full-time', department: 'AI' ,job:'Intern'},
  { id: 2, title: 'React.js Developer', location: 'Indore', type: 'Full-time', department: 'Web',job:'Intern' },
  { id: 3, title: 'Product Manager', location: 'Remote', type: 'Full-time', department: 'Product',job:'Intern' },
  { id: 4, title: 'DevOps Engineer', location: 'Indore', type: 'Contract', department: 'Cloud',job:'Intern' },
  { id: 5, title: 'UX/UI Designer', location: 'Remote', type: 'Full-time', department: 'Design',job:'Intern' },
  { id: 6, title: 'senior Mern stack devloper', location: 'indore', type: 'Full-time', department: 'Design' },

];

const JobList = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (job) => {
    setSelectedJob(job);
    setModalOpen(true);
  };

  return (
    <section className="section" id="openings">
      <div className="container">
        <h2 className={styles.heading}>Open Positions</h2>
        <div className={styles.list}>
          {jobs.map(job => (
            <motion.div
              key={job.id}
              className={styles.jobCard}
              whileHover={{ x: 8 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div>
                <h3>{job.title} </h3>
                <div className={styles.meta}>
                  
                  <span>{job.location}</span>
                  <span>•</span>
                  <span>{job.type}</span>
                  <span>{job.job}</span>
                </div>
              </div>
              <button className={styles.applyBtn} onClick={() => openModal(job)}>Apply</button>
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {modalOpen && <ApplicationModal job={selectedJob} onClose={() => setModalOpen(false)} />}
      </AnimatePresence>
    </section>
  );
};

export default JobList;