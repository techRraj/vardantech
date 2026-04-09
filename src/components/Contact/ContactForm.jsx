import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '', honeypot: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone) newErrors.phone = 'Phone is required';
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.honeypot) return; // spam trap
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', service: '', message: '', honeypot: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } else {
      setErrors(validationErrors);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  return (
    <motion.form
      className={styles.form}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onSubmit={handleSubmit}
    >
      {submitted && <div className={styles.successToast}>Message sent! We'll reply soon.</div>}
      <div className={styles.field}>
        <input type="text" name="name" placeholder="Full Name *" value={formData.name} onChange={handleChange} />
        {errors.name && <span className={styles.error}>{errors.name}</span>}
      </div>
      <div className={styles.field}>
        <input type="email" name="email" placeholder="Email *" value={formData.email} onChange={handleChange} />
        {errors.email && <span className={styles.error}>{errors.email}</span>}
      </div>
      <div className={styles.field}>
        <input type="tel" name="phone" placeholder="Phone Number *" value={formData.phone} onChange={handleChange} />
        {errors.phone && <span className={styles.error}>{errors.phone}</span>}
      </div>
      <div className={styles.field}>
        <select name="service" value={formData.service} onChange={handleChange}>
          <option value="">Select Service *</option>
          <option>AI Agent Development</option>
          <option>Custom Chatbot</option>
          <option>Web Development</option>
          <option>Mobile App</option>
          <option>Other</option>
        </select>
        {errors.service && <span className={styles.error}>{errors.service}</span>}
      </div>
      <div className={styles.field}>
        <textarea name="message" placeholder="Tell us about your project *" rows="5" value={formData.message} onChange={handleChange} />
        {errors.message && <span className={styles.error}>{errors.message}</span>}
      </div>
      {/* Honeypot */}
      <input type="text" name="honeypot" style={{ display: 'none' }} value={formData.honeypot} onChange={handleChange} />
      <button type="submit" className={styles.submitBtn}>Send Message</button>
    </motion.form>
  );
};

export default ContactForm;