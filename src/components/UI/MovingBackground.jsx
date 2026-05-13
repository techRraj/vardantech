import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import styles from './MovingBackground.module.css';

// ---- Light mode soft orbs ----
const lightOrbs = [
  { size: 400, color: '#a78bfa', x: '10%', y: '30%', duration: 18 },
  { size: 350, color: '#60a5fa', x: '80%', y: '70%', duration: 22 },
  { size: 500, color: '#f9a8d4', x: '50%', y: '10%', duration: 20 },
  { size: 300, color: '#fcd34d', x: '30%', y: '80%', duration: 25 },
];

const MovingBackground = () => {
  const { theme } = useTheme();
  const containerRef = useRef(null);

  // ---- LIGHT MODE ----
  if (theme !== 'dark') {
    return (
      <div className={styles.lightBackground}>
        {lightOrbs.map((orb, idx) => (
          <motion.div
            key={idx}
            className={styles.lightOrb}
            style={{
              width: orb.size,
              height: orb.size,
              left: orb.x,
              top: orb.y,
              background: `radial-gradient(circle at 30% 30%, ${orb.color}22, ${orb.color}06)`,
            }}
            animate={{
              x: [0, 20, -15, 10, 0],
              y: [0, -20, 15, -10, 0],
              scale: [1, 1.05, 0.98, 1.02, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: orb.duration,
              ease: 'easeInOut',
            }}
          />
        ))}
        <div className={styles.lightWash} />
      </div>
    );
  }

  // ---- DARK MODE ----
  return (
    <div ref={containerRef} className={styles.darkBackground}>
      <svg
        className={styles.neuralSvg}
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Edges */}
        <g className={styles.edges}>
          {/* Example lines – you can add more via a pre‑generated static list or generate in JSX */}
          {[...Array(25)].map((_, i) => (
            <line
              key={i}
              x1={Math.random() * 1200}
              y1={Math.random() * 800}
              x2={Math.random() * 1200}
              y2={Math.random() * 800}
              className={styles.neuralLine}
            />
          ))}
        </g>
        {/* Nodes */}
        <g className={styles.nodes}>
          {[...Array(20)].map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 1200}
              cy={Math.random() * 800}
              r={3 + Math.random() * 5}
              className={styles.neuralNode}
            />
          ))}
        </g>
        {/* Grid */}
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="var(--border)"
              strokeWidth="0.3"
              opacity="0.1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
};

export default MovingBackground;