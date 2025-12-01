import React from 'react';
import { motion } from 'framer-motion';

const TECH = [
    "TIKTOK", "INSTAGRAM REELS", "YOUTUBE SHORTS", "CAPCUT", "PREMIERE PRO", "UGC ADS", "VIRAL HOOKS", "TRENDS", "ROI"
];

export const TechStack: React.FC = () => {
  return (
    <section className="bg-genz-neon py-6 overflow-hidden border-y-4 border-black transform -rotate-1 origin-left scale-105 z-20 relative">
      <div className="flex whitespace-nowrap">
        <motion.div 
            className="flex gap-12 px-6"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
        >
            {[...TECH, ...TECH, ...TECH].map((item, i) => (
                <div key={i} className="flex items-center gap-12">
                    <span className="text-black font-black text-4xl md:text-6xl tracking-tighter italic stroke-white">{item}</span>
                    <span className="text-4xl">⚡</span>
                </div>
            ))}
        </motion.div>
        <motion.div 
            className="flex gap-12 px-6"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
        >
            {[...TECH, ...TECH, ...TECH].map((item, i) => (
                <div key={i} className="flex items-center gap-12">
                    <span className="text-black font-black text-4xl md:text-6xl tracking-tighter italic">{item}</span>
                    <span className="text-4xl">⚡</span>
                </div>
            ))}
        </motion.div>
      </div>
    </section>
  );
};