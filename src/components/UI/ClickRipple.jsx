import { useEffect, useRef } from 'react';

const ClickRipple = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = document.createElement('div');
    container.className = 'ripple-container';
    containerRef.current = container;
    document.body.appendChild(container);

    const createRipple = (e) => {
      const ripple = document.createElement('div');
      ripple.className = 'ripple';
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      container.appendChild(ripple);

      // Remove after animation
      setTimeout(() => {
        ripple.remove();
      }, 600);
    };

    // Mouse click
    document.addEventListener('click', createRipple);

    // Touch tap
    document.addEventListener('touchstart', (e) => {
      const touch = e.touches[0];
      if (touch) {
        const fakeEvent = { clientX: touch.clientX, clientY: touch.clientY };
        createRipple(fakeEvent);
      }
    }, { passive: true });

    return () => {
      document.removeEventListener('click', createRipple);
      document.removeEventListener('touchstart', createRipple);
      if (container.parentNode) {
        container.parentNode.removeChild(container);
      }
    };
  }, []);

  return null; // This component doesn't render anything visible itself
};

export default ClickRipple;