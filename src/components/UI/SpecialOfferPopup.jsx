import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import styles from './SpecialOfferPopup.module.css';

// Set the offer end date – e.g., 24 hours from now
const OFFER_END = new Date();
OFFER_END.setHours(OFFER_END.getHours() + 24);
// Or use a fixed date: new Date('2026-12-31T23:59:59')

const SpecialOfferPopup = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = OFFER_END - new Date();
    if (difference <= 0) return { hours: 0, minutes: 0, seconds: 0 };
    return {
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Hi Vardaan tech hub ! I want to claim the limited-time offer.\nName: ${name}\nEmail: ${email}`
    );
    window.open(`https://wa.me/918889710105?text=${message}`, '_blank');
    onClose(); // close popup after submitting
  };

  const { hours, minutes, seconds } = timeLeft;
  const isExpired = hours === 0 && minutes === 0 && seconds === 0;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className={styles.modal}
            initial={{ scale: 0.7, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.7, opacity: 0, y: 50 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.close} onClick={onClose} aria-label="Close">
              <FiX size={22} />
            </button>

            <div className={styles.head}>
              <span className={styles.badge}> Limited Time Offer</span>
              <h2>Get 30% Off Your First AI Project!</h2>
              <p>Lock in this exclusive deal before it expires.</p>
            </div>

            <div className={styles.timer}>
              {isExpired ? (
                <span className={styles.expired}>Offer expired</span>
              ) : (
                <>
                  <div className={styles.timeBlock}>
                    <span className={styles.number}>{String(hours).padStart(2, '0')}</span>
                    <span className={styles.unit}>Hrs</span>
                  </div>
                  <span className={styles.colon}>:</span>
                  <div className={styles.timeBlock}>
                    <span className={styles.number}>{String(minutes).padStart(2, '0')}</span>
                    <span className={styles.unit}>Min</span>
                  </div>
                  <span className={styles.colon}>:</span>
                  <div className={styles.timeBlock}>
                    <span className={styles.number}>{String(seconds).padStart(2, '0')}</span>
                    <span className={styles.unit}>Sec</span>
                  </div>
                </>
              )}
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className={styles.claimBtn}>
                Claim My Discount
              </button>
            </form>

            <p className={styles.note}>
             Your details are safe. We'll reach out via WhatsApp.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SpecialOfferPopup;