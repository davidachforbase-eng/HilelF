import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play } from 'lucide-react';
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
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "100%" }}
          transition={{ duration: 0.5, ease: "circOut" }}
          className="fixed inset-0 z-[100] bg-genz-black overflow-y-auto no-scrollbar"
        >
          {/* Header */}
          <div className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-20 bg-genz-black border-b border-white/10">
            <h2 className="text-3xl font-black text-genz-neon tracking-tighter italic uppercase">THE VAULT</h2>
            <button 
                onClick={onClose}
                className="w-12 h-12 bg-white text-black flex items-center justify-center font-bold hover:bg-genz-pink transition-colors border-2 border-transparent hover:border-white"
            >
                <X size={24} />
            </button>
          </div>

          <div className="container mx-auto px-6 py-32">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PROJECTS.map((project, i) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="relative aspect-[9/16] bg-[#111] group cursor-pointer border-2 border-transparent hover:border-genz-neon transition-colors"
                    >
                        <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                        />
                        
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="bg-genz-neon text-black p-4 rounded-full">
                                <Play fill="black" />
                            </div>
                        </div>

                        <div className="absolute bottom-4 left-4">
                            <h3 className="text-2xl font-black text-white italic uppercase">{project.title}</h3>
                            <span className="bg-white text-black text-xs font-bold px-2 py-0.5">{project.category}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
            
            <div className="mt-20 text-center">
                <button onClick={onClose} className="text-white font-mono hover:text-genz-neon underline">CLOSE ARCHIVE</button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};