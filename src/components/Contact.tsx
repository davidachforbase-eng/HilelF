import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, Zap } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', details: '' });
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
    <section id="contact" className="min-h-screen bg-genz-pink flex items-center justify-center py-20 relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-multiply"></div>

      <div className="container mx-auto px-6 relative z-10 max-w-3xl">
        <div className="bg-black text-white p-8 md:p-12 shadow-hard border-4 border-white transform rotate-1">
            
            {!isSuccess ? (
                <>
                    <h2 className="text-5xl md:text-7xl font-black mb-8 uppercase leading-none">
                        Let's Go <span className="text-genz-neon">Viral</span>
                    </h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-8 font-mono">
                        <div>
                            <label className="block text-genz-neon text-xs font-bold uppercase mb-2 tracking-widest">Codename</label>
                            <input 
                                type="text" 
                                placeholder="YOUR NAME"
                                className="w-full bg-[#111] border-2 border-[#333] p-4 text-white focus:border-genz-neon focus:outline-none transition-colors text-xl font-bold uppercase placeholder-gray-700"
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                            />
                        </div>

                        <div>
                            <label className="block text-genz-neon text-xs font-bold uppercase mb-2 tracking-widest">Coordinates</label>
                            <input 
                                type="email" 
                                placeholder="YOUR@EMAIL.COM"
                                className="w-full bg-[#111] border-2 border-[#333] p-4 text-white focus:border-genz-neon focus:outline-none transition-colors text-xl font-bold uppercase placeholder-gray-700"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                            />
                        </div>

                        <div>
                            <label className="block text-genz-neon text-xs font-bold uppercase mb-2 tracking-widest">Mission Brief</label>
                            <textarea 
                                rows={4}
                                placeholder="WHAT ARE WE BUILDING?"
                                className="w-full bg-[#111] border-2 border-[#333] p-4 text-white focus:border-genz-neon focus:outline-none transition-colors text-xl font-bold uppercase placeholder-gray-700 resize-none"
                                value={formData.details}
                                onChange={(e) => setFormData({...formData, details: e.target.value})}
                            />
                        </div>

                        <button 
                            disabled={isSubmitting}
                            className="w-full bg-genz-neon text-black font-black text-2xl py-6 hover:bg-white transition-colors border-2 border-transparent uppercase tracking-widest flex items-center justify-center gap-4 group"
                        >
                            {isSubmitting ? 'TRANSMITTING...' : 'INITIATE LAUNCH'}
                            <Zap className="group-hover:fill-black" />
                        </button>
                    </form>
                </>
            ) : (
                <div className="text-center py-20">
                    <CheckCircle className="w-24 h-24 text-genz-neon mx-auto mb-6" />
                    <h3 className="text-4xl font-black uppercase mb-4">Transmission Received</h3>
                    <button 
                        onClick={() => setIsSuccess(false)}
                        className="text-gray-500 hover:text-white underline font-mono"
                    >
                        Send Another
                    </button>
                </div>
            )}
        </div>
      </div>
    </section>
  );
};