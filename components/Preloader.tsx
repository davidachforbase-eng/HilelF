import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [count, setCount] = useState(5);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 800);
      return () => clearTimeout(timer);
    } else {
      // Play swoosh sound here if audio was allowed
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(onComplete, 1000); // Allow exit animation to finish
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [count, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[10000] bg-black flex items-center justify-center font-mono"
          exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Film Leader Effect Circles */}
          <div className="absolute inset-0 border-[2px] border-white/20 m-8 rounded-lg pointer-events-none" />
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/20" />
          <div className="absolute left-1/2 top-0 h-full w-[1px] bg-white/20" />

          {/* Countdown Circle */}
          <div className="relative w-64 h-64 border-4 border-white rounded-full flex items-center justify-center overflow-hidden">
             {/* Rotating sweep */}
             <motion.div 
                className="absolute w-full h-1/2 bg-white/10 top-0 left-0 origin-bottom"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
             />
             
             <motion.span
               key={count}
               initial={{ opacity: 0, scale: 0.5 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 2 }}
               className="text-8xl font-bold text-white relative z-10"
             >
               {count === 0 ? "REC" : count}
             </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
