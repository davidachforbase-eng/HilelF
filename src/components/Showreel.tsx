import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Play } from 'lucide-react';

interface ShowreelProps {
    onOpenGallery: () => void;
}

export const Showreel: React.FC<ShowreelProps> = ({ onOpenGallery }) => {
  return (
    <section id="work" className="py-20 bg-genz-black border-t border-white/10">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
                <h2 className="text-6xl md:text-8xl font-black text-white mb-2 leading-none">
                    THE <span className="text-genz-neon">FEED</span>
                </h2>
                <p className="font-mono text-gray-400 text-lg">Results that speak for themselves.</p>
            </div>
            <button 
                onClick={onOpenGallery}
                className="text-white font-bold underline decoration-genz-pink decoration-4 underline-offset-4 hover:bg-genz-pink hover:no-underline px-4 py-2 transition-all"
            >
                VIEW FULL ARCHIVE ↗
            </button>
        </div>

        {/* Masonry-ish Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, i) => (
                <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -10, rotate: i % 2 === 0 ? 2 : -2 }}
                    className="relative aspect-[9/16] bg-gray-900 rounded-2xl overflow-hidden border-2 border-white/10 group cursor-pointer shadow-none hover:shadow-neon hover:border-genz-neon transition-all duration-300"
                >
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />
                    
                    <div className="absolute bottom-0 left-0 p-6 w-full">
                        <div className="bg-genz-pink text-white text-xs font-bold px-2 py-1 inline-block mb-2 rounded-sm uppercase transform -rotate-2">
                            {project.category}
                        </div>
                        <h3 className="text-3xl font-black uppercase italic leading-none">{project.title}</h3>
                    </div>

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform scale-50 group-hover:scale-100">
                        <Play fill="white" size={24} />
                    </div>
                </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
};