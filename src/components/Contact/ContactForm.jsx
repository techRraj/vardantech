import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Button from '../UI/Button'; // adjust path if needed
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    honeypot: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.honeypot) return; // spam trap

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // ---- EMAILJS CONFIGURATION ----
    const serviceId = 'service_qivoyjs';   // e.g., 'service_xxxxxx'
    const templateId = 'template_0tzoxn4'; // e.g., 'template_xxxxxx'
    const publicKey = 'hGwxbA_HnIReOtKo9';   // e.g., 'user_xxxxxx'

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        console.log('Email sent:', result.text);
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', service: '', message: '', honeypot: '' });
        setErrors({});
        setIsSubmitting(false);
        setTimeout(() => setSubmitted(false), 8000);
      })
      .catch((error) => {
        console.error('Email failed:', error.text);
        alert('Failed to send email. Please try again or contact us directly.');
        setIsSubmitting(false);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
  };

  return (
    <motion.form
      ref={form}
      className={styles.form}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onSubmit={handleSubmit}
    >
      {submitted && (
        <motion.div
          className={styles.successToast}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          ✅ Thank you! Your message has been sent. We'll get back to you soon.
        </motion.div>
      )}

      <div className={styles.field}>
        <input
          type="text"
          name="name"
          placeholder="Full Name *"
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? styles.inputError : ''}
        />
        {errors.name && <span className={styles.error}>{errors.name}</span>}
      </div>

      <div className={styles.field}>
        <input
          type="email"
          name="email"
          placeholder="Email *"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? styles.inputError : ''}
        />
        {errors.email && <span className={styles.error}>{errors.email}</span>}
      </div>

      <div className={styles.field}>
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number *"
          value={formData.phone}
          onChange={handleChange}
          className={errors.phone ? styles.inputError : ''}
        />
        {errors.phone && <span className={styles.error}>{errors.phone}</span>}
      </div>

      <div className={styles.field}>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className={errors.service ? styles.inputError : ''}
        >
          <option value="">Select Service *</option>
          <option>AI Agent Development</option>
          <option>Custom Chatbot</option>
          <option>Web Development</option>
          <option>Mobile App</option>
          <option>Digital Marketing</option>
          <option>Other</option>
        </select>
        {errors.service && <span className={styles.error}>{errors.service}</span>}
      </div>

      <div className={styles.field}>
        <textarea
          name="message"
          placeholder="Tell us about your project *"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className={errors.message ? styles.inputError : ''}
        />
        {errors.message && <span className={styles.error}>{errors.message}</span>}
      </div>

      {/* Honeypot – hidden from real users */}
      <input
        type="text"
        name="honeypot"
        style={{ display: 'none' }}
        value={formData.honeypot}
        onChange={handleChange}
        tabIndex="-1"
        autoComplete="off"
      />

      <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

      <p className={styles.privacyNote}>
        We respect your privacy. Your information is secure.
      </p>
    </motion.form>
  );
};

export default ContactForm;