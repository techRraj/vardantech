import { useEffect, useRef } from 'react';

const useScrollReveal = (options = {}) => {
  const ref = useRef(null);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('visible');
          // Add stagger to children
          const children = element.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right');
          children.forEach((child, index) => {
            child.style.transitionDelay = `${index * 0.1}s`;
            setTimeout(() => child.classList.add('visible'), 50);
          });
        }
      },
      {
        threshold: options.threshold || 0.15,
        rootMargin: options.rootMargin || '0px 0px -50px 0px',
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return ref;
};

export default useScrollReveal;