import React from 'react';
import styles from './MapPlaceholder.module.css';

const MapPlaceholder = () => {
  return (
    <div className={styles.map}>
      <iframe
        title="Office Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.123456789!2d78.123456!3d17.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDA3JzI0LjQiTiA3OMKwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
        width="100%"
        height="250"
        style={{ border: 0, borderRadius: 12 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default MapPlaceholder;