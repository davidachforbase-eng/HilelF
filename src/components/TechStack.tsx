import React from 'react';
import { motion } from 'framer-motion';

const TECH = [
    "DAVINCI RESOLVE", "ADOBE PREMIERE", "AFTER EFFECTS", "CINEMA 4D", "RED DIGITAL CINEMA", "ARRI ALEXA", "AVID MEDIA COMPOSER", "FINAL CUT PRO", "SONY VENICE"
];

export const TechStack: React.FC = () => {
  return (
    <section className="bg-cinematic-gold py-4 overflow-hidden border-y border-black">
      <div className="flex whitespace-nowrap">
        <motion.div 
            className="flex gap-12 px-6"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        >
            {[...TECH, ...TECH, ...TECH].map((item, i) => (
                <div key={i} className="flex items-center gap-12">
                    <span className="text-black font-black text-2xl md:text-4xl tracking-tighter">{item}</span>
                    <div className="w-3 h-3 bg-black rounded-full" />
                </div>
            ))}
        </motion.div>
        <motion.div 
            className="flex gap-12 px-6"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        >
            {[...TECH, ...TECH, ...TECH].map((item, i) => (
                <div key={i} className="flex items-center gap-12">
                    <span className="text-black font-black text-2xl md:text-4xl tracking-tighter">{item}</span>
                    <div className="w-3 h-3 bg-black rounded-full" />
                </div>
            ))}
        </motion.div>
      </div>
    </section>
  );
};