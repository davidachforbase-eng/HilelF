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
            <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover grayscale brightness-75"
            >
                <source src="https://videos.pexels.com/video-files/5804362/5804362-uhd_2560_1440_25fps.mp4" type="video/mp4" />
            </video>
            {/* Grain Overlay */}
            <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay"></div>
        </motion.div>

        {/* Text Mask Container - Simulating 'Video inside text' via multiply blend mode */}
        
        <motion.div 
            className="relative z-20 mix-blend-difference text-center"
            style={{ scale, opacity: textOpacity }}
        >
            <h1 className="text-[15vw] md:text-[12vw] font-black text-white whitespace-nowrap tracking-tighter leading-none">
                HILLEL
            </h1>
            <h2 className="text-[15vw] md:text-[5vw] font-black text-transparent bg-clip-text bg-gradient-to-b from-cinematic-gold to-yellow-800 tracking-[1vw]">
                MEDIA
            </h2>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
            style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-sm tracking-widest uppercase flex flex-col items-center gap-2 z-30"
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