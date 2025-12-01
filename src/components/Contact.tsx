import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

export const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <section id="contact" className="py-32 bg-yellow-400 relative border-t-8 border-black pattern-diagonal-lines-sm">
      <div className="container mx-auto px-6 max-w-5xl">
        
        <div className="bg-black p-8 md:p-16 shadow-hard-white relative overflow-hidden">
            {/* Warning Strip */}
            <div className="absolute top-0 left-0 w-full h-4 bg-yellow-400 bg-[length:20px_20px] bg-[linear-gradient(45deg,transparent_25%,#000_25%,#000_50%,transparent_50%,transparent_75%,#000_75%,#000_100%)]"></div>
            
            <div className="relative z-10">
                <h2 className="text-5xl md:text-8xl font-black text-white mb-2 uppercase leading-none tracking-tighter">
                    START MISSION
                </h2>
                <p className="text-gray-400 font-mono mb-12 uppercase tracking-widest border-b border-gray-800 pb-8">
                    // Ready to dominate the algorithm?
                </p>

                {!isSuccess ? (
                    <form onSubmit={handleSubmit} className="space-y-8 font-mono">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <label className="text-genz-neon text-xs font-bold uppercase mb-2 block">Agent Name</label>
                                <input type="text" className="w-full bg-[#111] border-2 border-[#333] focus:border-genz-neon p-4 text-white text-xl font-bold uppercase outline-none transition-colors" placeholder="ENTER NAME" />
                            </div>
                            <div>
                                <label className="text-genz-neon text-xs font-bold uppercase mb-2 block">Comms Channel</label>
                                <input type="email" className="w-full bg-[#111] border-2 border-[#333] focus:border-genz-neon p-4 text-white text-xl font-bold uppercase outline-none transition-colors" placeholder="ENTER EMAIL" />
                            </div>
                        </div>
                        
                        <div>
                            <label className="text-genz-neon text-xs font-bold uppercase mb-2 block">Objective</label>
                            <textarea rows={4} className="w-full bg-[#111] border-2 border-[#333] focus:border-genz-neon p-4 text-white text-xl font-bold uppercase outline-none transition-colors resize-none" placeholder="DESCRIBE MISSION OBJECTIVES..." />
                        </div>

                        <button 
                            disabled={isSubmitting}
                            className="w-full bg-genz-neon text-black font-black text-2xl py-6 hover:bg-white transition-colors uppercase tracking-widest flex items-center justify-center gap-4 group"
                        >
                            {isSubmitting ? 'ESTABLISHING UPLINK...' : 'LAUNCH PROJECT'}
                            <Zap className="group-hover:fill-black animate-pulse" />
                        </button>
                    </form>
                ) : (
                    <div className="bg-green-500/10 border-2 border-green-500 p-8 text-center">
                        <h3 className="text-green-500 text-4xl font-black uppercase mb-4">UPLINK ESTABLISHED</h3>
                        <p className="text-white font-mono">Stand by for transmission.</p>
                        <button onClick={() => setIsSuccess(false)} className="mt-8 text-sm text-gray-500 hover:text-white uppercase underline">Reset Terminal</button>
                    </div>
                )}
            </div>
        </div>

      </div>

      {/* Floating WhatsApp CTA */}
      <motion.a
        href="https://wa.me/972559875222"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-[#25D366]/50 transition-shadow border-2 border-black"
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-black">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </motion.a>
    </section>
  );
};