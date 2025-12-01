import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div ref={containerRef} className="min-h-screen relative flex items-center justify-center overflow-hidden bg-genz-black pt-20">
      
      {/* Background Chaos */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
        <motion.div style={{ y: y1 }} className="absolute -top-20 -left-20 w-96 h-96 bg-genz-neon rounded-full blur-[100px]" />
        <motion.div style={{ y: y2 }} className="absolute bottom-0 right-0 w-96 h-96 bg-genz-pink rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        
        <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
        >
            <h2 className="text-xl md:text-3xl font-mono font-bold text-genz-neon tracking-widest mb-4 bg-black/50 inline-block px-4 py-2 border border-genz-neon rounded-full transform -rotate-2">
                ATTENTION ARCHITECT
            </h2>
        </motion.div>

        <h1 className="text-[15vw] leading-[0.8] font-black text-white mix-blend-normal">
            <motion.span 
                className="block text-outline hover:text-genz-pink transition-colors cursor-default"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
            >
                STOP
            </motion.span>
            <motion.span 
                className="block text-white"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                THE
            </motion.span>
            <motion.span 
                className="block text-genz-neon drop-shadow-[0_0_15px_rgba(204,255,0,0.8)]"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                SCROLL
            </motion.span>
        </h1>

        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex flex-col md:flex-row justify-center items-center gap-6"
        >
            <a href="#contact" className="px-8 py-4 bg-genz-pink text-white font-black text-xl uppercase tracking-wider hover:bg-white hover:text-black hover:shadow-[8px_8px_0px_#00FFFF] transition-all transform hover:-translate-y-1 border-2 border-transparent">
                Go Viral Now
            </a>
            <p className="font-mono text-gray-400 text-sm md:max-w-xs text-left">
                We craft short-form content that hacks attention spans and prints ROI.
            </p>
        </motion.div>

      </div>
      
      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0] }} 
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[10%] hidden lg:block"
      >
        <div className="bg-white text-black font-black p-4 rotate-12 shadow-brutal border-2 border-black">
            +500% VIEWS 🚀
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 20, 0] }} 
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-[10%] hidden lg:block"
      >
        <div className="bg-genz-blue text-black font-black p-4 -rotate-6 shadow-brutal border-2 border-black">
            HIGH RETENTION 👁️
        </div>
      </motion.div>
    </div>
  );
};