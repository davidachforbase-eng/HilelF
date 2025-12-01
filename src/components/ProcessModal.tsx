import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Database, Film, Sliders, Volume2, UploadCloud } from 'lucide-react';

interface ProcessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProcessModal: React.FC<ProcessModalProps> = ({ isOpen, onClose }) => {
  const steps = [
    { 
        icon: <Database size={24} />,
        title: "01. INGEST & PROXY",
        desc: "Organization is key. We backup all raw footage to RAID arrays and generate lightweight proxies for fluid editing, ensuring no frame is lost and playback is buttery smooth."
    },
    { 
        icon: <Film size={24} />,
        title: "02. THE ASSEMBLY",
        desc: "The skeleton of the story. We select the best takes and build the narrative arc. This is where the story finds its rhythm and structure before we add the polish."
    },
    { 
        icon: <Sliders size={24} />,
        title: "03. COLOR GRADE",
        desc: "Using DaVinci Resolve, we apply color science to conform the footage, followed by a creative grade to establish the film's emotional palette and visual identity."
    },
    { 
        icon: <Volume2 size={24} />,
        title: "04. SOUNDSCAPING",
        desc: "Sound is 50% of the experience. We layer dialogue, foley, sound effects, and score to create an immersive auditory environment that surrounds the viewer."
    },
    { 
        icon: <UploadCloud size={24} />,
        title: "05. MASTERING",
        desc: "Final export in the required formats (DCP, ProRes, H.264). We perform strict quality control checks to ensure the final deliverable is pixel-perfect for any screen."
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-xl flex items-center justify-center p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-cinematic-gray border border-white/10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
                onClick={onClose}
                className="absolute top-6 right-6 z-10 text-white/50 hover:text-white transition-colors p-2"
            >
                <X size={28} />
            </button>

            <div className="p-8 md:p-16">
                <div className="mb-12">
                    <h2 className="text-4xl font-black text-white mb-4">THE WORKFLOW</h2>
                    <p className="text-gray-400 font-serif italic text-lg">
                        A rigorous approach to creative chaos.
                    </p>
                </div>

                <div className="space-y-12 relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[27px] top-4 bottom-4 w-[2px] bg-white/10 hidden md:block" />

                    {steps.map((step, i) => (
                        <motion.div 
                            key={i}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col md:flex-row gap-6 relative"
                        >
                            {/* Icon Bubble */}
                            <div className="w-14 h-14 rounded-full bg-cinematic-black border border-cinematic-gold text-cinematic-gold flex items-center justify-center shrink-0 z-10 relative">
                                {step.icon}
                            </div>

                            {/* Content */}
                            <div className="bg-white/5 p-6 rounded-lg border border-white/5 hover:border-cinematic-gold/30 transition-colors w-full">
                                <h3 className="text-xl font-bold text-white mb-2 tracking-wide">{step.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    {step.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
                
                <div className="mt-12 pt-8 border-t border-white/10 text-center">
                    <button 
                        onClick={onClose}
                        className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-cinematic-gold transition-colors"
                    >
                        GOT IT
                    </button>
                </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};