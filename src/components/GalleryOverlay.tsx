import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../constants';

interface GalleryOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GalleryOverlay: React.FC<GalleryOverlayProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-cinematic-black overflow-y-auto no-scrollbar"
        >
          {/* Header */}
          <div className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-20 bg-gradient-to-b from-black/90 to-transparent">
            <h2 className="text-2xl font-black text-white tracking-tighter">ALL WORKS</h2>
            <button 
                onClick={onClose}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group"
            >
                <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>

          {/* Grid */}
          <div className="container mx-auto px-6 py-32">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROJECTS.map((project, i) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="group relative aspect-[4/3] overflow-hidden rounded-md cursor-pointer"
                    >
                        <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-black/60 group-hover:bg-transparent transition-colors duration-500" />
                        
                        <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <span className="text-cinematic-gold text-xs font-mono uppercase tracking-widest">{project.category}</span>
                            <div className="flex justify-between items-end mt-2">
                                <h3 className="text-2xl font-bold text-white uppercase italic">{project.title}</h3>
                                <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white" />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
            
            <div className="mt-20 text-center">
                <p className="text-gray-500 font-mono text-sm">END OF ARCHIVE</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};