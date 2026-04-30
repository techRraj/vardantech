import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from './OfferTab.module.css';

const OfferTab = ({ onClick }) => {
  const [pulse, setPulse] = useState(false);

  return (
    <motion.button
      className={styles.tab}
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={{ scale: pulse ? [1, 1.15, 1] : 1 }}
      onMouseEnter={() => setPulse(true)}
      onMouseLeave={() => setPulse(false)}
    >
      🎉
      <span className={styles.label}>Limited Offer</span>
    </motion.button>
  );
};

export default OfferTab;