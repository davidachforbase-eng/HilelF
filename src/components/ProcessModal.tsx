import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, AlertTriangle } from 'lucide-react';

interface ProcessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProcessModal: React.FC<ProcessModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="w-full max-w-2xl bg-[#c0c0c0] border-t-2 border-l-2 border-white border-r-2 border-b-2 border-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Title Bar */}
            <div className="bg-[#000080] px-2 py-1 flex justify-between items-center select-none">
                <span className="text-white font-bold font-mono text-sm">C:\SYSTEM\VIRAL_PROTOCOL.EXE</span>
                <button 
                    onClick={onClose}
                    className="bg-[#c0c0c0] border-t border-l border-white border-r border-b border-black p-0.5"
                >
                    <X size={14} className="text-black" />
                </button>
            </div>

            {/* Content */}
            <div className="p-8 font-mono text-black">
                <div className="flex items-center gap-4 mb-6">
                    <AlertTriangle size={48} className="text-yellow-600" />
                    <div>
                        <h2 className="text-xl font-bold">EXECUTING VIRAL SEQUENCE...</h2>
                        <p className="text-sm">Please review the following protocol:</p>
                    </div>
                </div>

                <div className="space-y-4 bg-white border border-black p-4 text-sm h-64 overflow-y-auto shadow-inner">
                    <p className="font-bold">> INIT_PHASE_1: THE_HOOK</p>
                    <p className="pl-4 text-gray-700">Analyzing trends. Injecting dopamine triggers. Cutting silence. Target: 3-second retention.</p>
                    
                    <p className="font-bold mt-4">> INIT_PHASE_2: PACING</p>
                    <p className="pl-4 text-gray-700">Removing dead air. Adding SFX layers. Visual overload initiated.</p>

                    <p className="font-bold mt-4">> INIT_PHASE_3: CONVERSION</p>
                    <p className="pl-4 text-gray-700">Deploying CTA. Optimizing for algorithm. Launching content.</p>

                    <p className="text-green-600 font-bold mt-4">> SUCCESS: ROI_DETECTED</p>
                </div>

                <div className="mt-6 flex justify-center gap-4">
                    <button onClick={onClose} className="px-8 py-2 border-t-2 border-l-2 border-white border-r-2 border-b-2 border-black active:border-t-black active:border-l-black active:border-white bg-[#c0c0c0] font-bold">
                        OK
                    </button>
                </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};