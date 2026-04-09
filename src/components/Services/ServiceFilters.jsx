import React from 'react';
import styles from './ServiceFilters.module.css';

const ServiceFilters = ({ categories, active, onChange }) => {
  return (
    <div className={styles.filters}>
      {categories.map(cat => (
        <button
          key={cat}
          className={`${styles.filterBtn} ${active === cat ? styles.active : ''}`}
          onClick={() => onChange(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default ServiceFilters;