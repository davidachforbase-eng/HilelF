import React from 'react';
import { motion } from 'framer-motion';
import { CLIENTS } from '../constants';

export const TechStack: React.FC = () => {
  return (
    <section className="py-20 bg-genz-blue overflow-hidden relative border-y-4 border-black">
      <div className="absolute inset-0 bg-checkers opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-center font-black text-4xl mb-12 uppercase italic text-stroke-white text-transparent">
            Stuck On Us
        </h2>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {CLIENTS.map((client, i) => (
                <motion.div
                    key={client.id}
                    whileHover={{ scale: 1.2, rotate: 0, zIndex: 10 }}
                    initial={{ rotate: Math.random() * 20 - 10 }}
                    viewport={{ once: true }}
                    className="relative group cursor-pointer"
                >
                    <div className="bg-white px-8 py-4 border-4 border-black shadow-hard transform transition-transform duration-300">
                        <img 
                            src={client.logo} 
                            alt={client.name} 
                            className="h-8 md:h-12 object-contain filter grayscale contrast-200 group-hover:filter-none transition-all"
                        />
                    </div>
                    {/* Tape Effect */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-8 bg-yellow-200 opacity-80 transform -rotate-2 shadow-sm border border-white/20"></div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};