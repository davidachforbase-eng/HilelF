import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  strength?: number; // How much the image moves inside (0-1)
}

export const ParallaxImage: React.FC<ParallaxImageProps> = ({ src, alt, className = "", strength = 0.15 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Map scroll progress to percentage movement
  // e.g., move from -10% to +10%
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength * 100}%`, `${strength * 100}%`]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1.2, 1.1]);

  return (
    <div ref={containerRef} className={`overflow-hidden relative ${className}`}>
      <motion.div 
        style={{ y, scale }} 
        className="w-full h-[120%] -top-[10%] relative" 
      >
        <img 
            src={src} 
            alt={alt} 
            className="w-full h-full object-cover" 
        />
      </motion.div>
    </div>
  );
};
