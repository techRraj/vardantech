import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import styles from './ApplicationModal.module.css';

const ApplicationModal = ({ job, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', resume: null, coverLetter: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Application submitted! (Demo)');
    onClose();
  };

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
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeBtn} onClick={onClose}><FiX size={24} /></button>
        <h2>Apply for {job?.title}</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" required onChange={(e) => setFormData({...formData, name: e.target.value})} />
          <input type="email" placeholder="Email" required onChange={(e) => setFormData({...formData, email: e.target.value})} />
          <input type="file" accept=".pdf,.doc,.docx" onChange={(e) => setFormData({...formData, resume: e.target.files[0]})} />
          <textarea placeholder="Cover Letter (Optional)" rows="4" onChange={(e) => setFormData({...formData, coverLetter: e.target.value})} />
          <button type="submit" className={styles.submitBtn}>Submit Application</button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ApplicationModal;