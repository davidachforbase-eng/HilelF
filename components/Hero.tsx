import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Expand text scale: starts at 1, goes massive
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 50]);
  // Opacity for the "fill" video to reveal fully
  const videoOpacity = useTransform(scrollYProgress, [0.3, 0.4], [0.4, 1]);
  // Fade out the text overlay itself when it gets too big
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.4], [1, 0]);

  return (
    <div ref={containerRef} className="h-[200vh] relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-black">
        
        {/* Background Video (Initially Dim) */}
        <motion.div 
            style={{ opacity: videoOpacity }}
            className="absolute inset-0 w-full h-full z-0"
        >
            <img 
                src="https://images.unsplash.com/photo-1478720568477-152d9b164e63?q=80&w=2500&auto=format&fit=crop" 
                className="w-full h-full object-cover grayscale brightness-75"
                alt="Cinematic Background" 
            />
            {/* Grain Overlay */}
            <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay"></div>
        </motion.div>

        {/* Text Mask Container */}
        <motion.div 
          className="absolute inset-0 z-10 flex items-center justify-center bg-black mix-blend-multiply pointer-events-none"
          style={{ opacity: textOpacity }}
        >
            {/* This div effectively masks the content below because of mix-blend-multiply with the white text below? 
                Actually, simpler approach for reliable "text mask" in React without canvas:
                Use a big white text on black background, and set mix-blend-mode: screen on the text layer over the video.
            */}
        </motion.div>
        
        <motion.h1 
            style={{ scale, opacity: textOpacity }}
            className="text-[15vw] md:text-[12vw] font-black text-white mix-blend-difference z-20 whitespace-nowrap tracking-tighter"
        >
            HILLEL <span className="text-cinematic-gold">MEDIA</span>
        </motion.h1>

        {/* Scroll Indicator */}
        <motion.div 
            style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-sm tracking-widest uppercase flex flex-col items-center gap-2"
        >
            <span>Scroll to Enter</span>
            <div className="w-[1px] h-12 bg-white/30">
                <motion.div 
                    animate={{ y: [0, 48, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-full h-1/2 bg-white"
                />
            </div>
        </motion.div>
      </div>
    </div>
  );
};
