import React, { useState } from 'react';
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
    </section>
  );
};