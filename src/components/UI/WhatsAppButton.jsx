import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './WhatsAppButton.module.css';

const WhatsAppButton = () => {
  const phoneNumber = '8889710105'; // Replace with actual number
  const message = encodeURIComponent("Hi Vardaantechhub , I want a free demo consultation.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappBtn}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5 }}
      whileHover={{ scale: 1.1 }}
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={32} />
      <motion.span
        className={styles.pulse}
        animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
      <span className={styles.tooltip}>Chat with us on WhatsApp</span>
    </motion.a>
  );
};

export default WhatsAppButton;