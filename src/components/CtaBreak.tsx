import React from 'react';
import { motion } from 'framer-motion';

export const CtaBreak: React.FC = () => {
  return (
    <section className="h-[60vh] relative flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
            <video 
                autoPlay 
                muted 
                loop 
                playsInline
                className="w-full h-full object-cover grayscale brightness-50"
            >
                <source src="https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center px-6">
            <motion.h2 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase glitch-text"
                data-text="READY TO DISRUPT?"
            >
                READY TO DISRUPT?
            </motion.h2>
            <motion.a 
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-12 py-5 bg-cinematic-red text-white font-bold text-xl tracking-widest hover:bg-red-700 transition-colors rounded-none"
            >
                START NOW
            </motion.a>
        </div>
    </section>
  );
};