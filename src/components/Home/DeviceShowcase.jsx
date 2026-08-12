import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiMonitor, FiTablet, FiPhone } from 'react-icons/fi';
import styles from './DeviceShowcase.module.css';

const devices = [
  {
    id: 1,
    type: 'phone',
    title: 'Mobile View',
    icon: <FiPhone />,
    width: 375,
    height: 667,
    scale: 0.4,
    frameClass: styles.phoneFrame,
    screenClass: styles.phoneScreen,
  },
  {
    id: 2,
    type: 'tablet',
    title: 'Tablet View',
    icon: <FiTablet />,
    width: 768,
    height: 1024,
    scale: 0.3,
    frameClass: styles.tabletFrame,
    screenClass: styles.tabletScreen,
  },
  {
    id: 3,
    type: 'monitor',
    title: 'Desktop View',
    icon: <FiMonitor />,
    width: 1440,
    height: 900,
    scale: 0.28,
    frameClass: styles.monitorFrame,
    screenClass: styles.monitorScreen,
  },
];

const DeviceShowcase = () => {
  const [activeDevice, setActiveDevice] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const autoPlayRef = useRef(null);

  const currentDevice = devices[activeDevice];
  const websiteUrl = 'https://vardaantechhub.com';

  const nextDevice = () => setActiveDevice(prev => (prev + 1) % devices.length);
  const prevDevice = () => setActiveDevice(prev => (prev - 1 + devices.length) % devices.length);
  const goToDevice = (index) => setActiveDevice(index);

  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) nextDevice();
    if (distance < -50) prevDevice();
    setTouchStart(0);
    setTouchEnd(0);
  };

  // Auto-play devices
  useEffect(() => {
    autoPlayRef.current = setInterval(nextDevice, 4000);
    return () => clearInterval(autoPlayRef.current);
  }, [activeDevice]);

  return (
    <section className={styles.section}>
      <div className="container">
        {/* Header */}
        <motion.div className={styles.header} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className={styles.badge}>
            <FiMonitor style={{ marginRight: 6 }} />
            Fully Responsive Design
          </span>
          <h2>Looks Perfect on Every Device</h2>
          <p>Swipe to see how our website adapts to any screen size</p>
          <motion.div className={styles.divider} initial={{ width: 0 }} whileInView={{ width: '80px' }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.6 }} />
        </motion.div>

        {/* Desktop — All Three Devices Side by Side */}
        <div className={styles.desktopLayout}>
          {devices.map((device, idx) => (
            <motion.div
              key={device.id}
              className={styles.deviceColumn}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <div className={styles.deviceWrapper}>
                <div className={device.frameClass}>
                  {/* Phone notch */}
                  {device.type === 'phone' && <div className={styles.phoneNotch} />}
                  {/* Tablet camera */}
                  {device.type === 'tablet' && <div className={styles.tabletCamera} />}
                  {/* Monitor camera */}
                  {device.type === 'monitor' && <div className={styles.monitorCamera} />}

                  <div className={device.screenClass}>
                    <div className={styles.iframeScaler} style={{ 
                      transform: `scale(${device.scale})`, 
                      width: `${device.width}px`, 
                      height: `${device.height}px` 
                    }}>
                      <iframe
                        src={websiteUrl}
                        title={device.title}
                        style={{ width: `${device.width}px`, height: `${device.height}px`, border: 'none', pointerEvents: 'none' }}
                        sandbox="allow-scripts allow-same-origin"
                      />
                    </div>
                  </div>

                  {/* Phone button */}
                  {device.type === 'phone' && <div className={styles.phoneButton} />}
                  {/* Tablet button */}
                  {device.type === 'tablet' && <div className={styles.tabletHome} />}
                </div>

                {/* Monitor stand & base */}
                {device.type === 'monitor' && (
                  <>
                    <div className={styles.monitorStand} />
                    <div className={styles.monitorBase} />
                  </>
                )}

                <div className={styles.deviceLabel}>
                  {device.icon}
                  <span>{device.title}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile — Swipeable Carousel */}
        <div className={styles.mobileLayout}>
          <div className={styles.mobileCarousel} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
            <button className={styles.navBtn} onClick={prevDevice} aria-label="Previous device">
              <FiChevronLeft size={20} />
            </button>

            <div className={styles.carouselWindow}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDevice}
                  className={styles.carouselSlide}
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -60 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className={styles.deviceCard}>
                    <div className={currentDevice.frameClass}>
                      {currentDevice.type === 'phone' && <div className={styles.phoneNotch} />}
                      {currentDevice.type === 'tablet' && <div className={styles.tabletCamera} />}
                      {currentDevice.type === 'monitor' && <div className={styles.monitorCamera} />}

                      <div className={currentDevice.screenClass}>
                        <div className={styles.iframeScaler} style={{ 
                          transform: `scale(${currentDevice.scale})`, 
                          width: `${currentDevice.width}px`, 
                          height: `${currentDevice.height}px` 
                        }}>
                          <iframe
                            src={websiteUrl}
                            title={currentDevice.title}
                            style={{ width: `${currentDevice.width}px`, height: `${currentDevice.height}px`, border: 'none', pointerEvents: 'none' }}
                            sandbox="allow-scripts allow-same-origin"
                          />
                        </div>
                      </div>

                      {currentDevice.type === 'phone' && <div className={styles.phoneButton} />}
                      {currentDevice.type === 'tablet' && <div className={styles.tabletHome} />}
                    </div>

                    {currentDevice.type === 'monitor' && (
                      <>
                        <div className={styles.monitorStand} />
                        <div className={styles.monitorBase} />
                      </>
                    )}

                    <div className={styles.deviceInfo}>
                      <div className={styles.deviceType}>
                        {currentDevice.icon} {currentDevice.title}
                      </div>
                      <p>See how our website looks on {currentDevice.title.toLowerCase()}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <button className={styles.navBtn} onClick={nextDevice} aria-label="Next device">
              <FiChevronRight size={20} />
            </button>
          </div>

          {/* Dots */}
          <div className={styles.dots}>
            {devices.map((_, idx) => (
              <button
                key={idx}
                className={`${styles.dot} ${idx === activeDevice ? styles.activeDot : ''}`}
                onClick={() => goToDevice(idx)}
                aria-label={`Go to ${devices[idx].title}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeviceShowcase;