// src/components/Contact/MapPlaceholder.jsx
import React from 'react';
import styles from './MapPlaceholder.module.css';

const MapPlaceholder = () => {
  return (
    <div className={styles.map}>
      <iframe
        title="Office Location"
        src="https://maps.google.com/maps?q=Platinum%20Plaza%20PU-4%2C%20A.B.%20Road%2C%20Behind%20C-21%20Mall%2C%20Indore%2C%20India&t=&z=15&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="250"
        style={{ border: 0, borderRadius: 12 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapPlaceholder;