import React from 'react';
import styles from './PortfolioFilters.module.css';

const PortfolioFilters = ({ categories, active, onChange }) => {
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

export default PortfolioFilters;