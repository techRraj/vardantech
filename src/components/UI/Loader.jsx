import { motion } from 'framer-motion';
import styles from './Loader.module.css';

const Loader = () => (
  <motion.div
    className={styles.wrapper}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.img
      // src="/assets/logo.png"
      // src='/src/assets/logo3.png'
      src='/assets/logo3.png'
      alt="Vardaan Tech Hub"
      // className={styles.logo}
      animate={{ scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}
      transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
    />
    {/* <motion.div className={styles.spinner} /> */}
  </motion.div>
);

export default Loader;