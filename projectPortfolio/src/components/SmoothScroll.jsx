import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

function SmoothScrollWrapper({ children }) {
  const containerRef = useRef(null);
  const scrollY = useMotionValue(0);
  
  // Faster, more responsive spring settings
  const smoothScrollY = useSpring(scrollY, {
    damping: 30,        // Lower damping for more responsiveness
    stiffness: 180,     // Higher stiffness for faster response
    mass: 1.0,          // Lower mass for less lag
    restDelta: 0.01
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      scrollY.set(-scrollTop);
    };

    const updateHeight = () => {
      if (containerRef.current) {
        // Get the actual content height without any artificial padding
        const contentHeight = containerRef.current.offsetHeight;
        document.body.style.height = `${contentHeight}px`;
      }
    };

    // Initial setup
    handleScroll();
    
    // Use ResizeObserver for more accurate height tracking
    let resizeObserver;
    if (containerRef.current) {
      resizeObserver = new ResizeObserver(() => {
        updateHeight();
      });
      resizeObserver.observe(containerRef.current);
    }

    // Initial height update with a small delay to ensure content is rendered
    setTimeout(updateHeight, 100);

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateHeight);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateHeight);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      // Reset body height when component unmounts
      document.body.style.height = '';
    };
  }, [scrollY]);

  return (
    <motion.div
      ref={containerRef}
      style={{ 
        y: smoothScrollY,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        willChange: 'transform',
        zIndex: 1,
        minHeight: 'auto', // Ensure the container doesn't add extra height
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}

export default SmoothScrollWrapper;