import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    details: '',
    budget: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNext = (field: string, value: string) => {
    if (!value) return;
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
    if (navigator.vibrate) navigator.vibrate(200);
  };

  return (
    <section id="contact" className="min-h-screen bg-cinematic-black relative flex items-center justify-center py-20 overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 opacity-20">
         <img 
            src="https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=2600&auto=format&fit=crop" 
            className="w-full h-full object-cover grayscale"
            alt="Editing Suite"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-2xl">
        {!isSuccess ? (
          <div className="space-y-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
            >
                <h2 className="text-4xl md:text-6xl font-bold mb-4">LET'S CREATE</h2>
                <p className="text-gray-400 text-lg font-serif italic">Tell me about your vision.</p>
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-10">
                {/* Step 1: Name */}
                <div className="space-y-4">
                    <label className="text-sm font-mono text-cinematic-gold uppercase tracking-widest block">01. Who are you?</label>
                    <input 
                        type="text" 
                        placeholder="Your Name"
                        className="w-full bg-transparent border-b border-white/20 text-2xl md:text-4xl py-4 focus:outline-none focus:border-cinematic-gold transition-colors placeholder-white/20"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                </div>

                {/* Step 2: Email */}
                <AnimatePresence>
                    {formData.name.length > 2 && (
                        <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="space-y-4 overflow-hidden"
                        >
                            <label className="text-sm font-mono text-cinematic-gold uppercase tracking-widest block">02. Your Email</label>
                            <input 
                                type="email" 
                                placeholder="email@example.com"
                                className="w-full bg-transparent border-b border-white/20 text-2xl md:text-4xl py-4 focus:outline-none focus:border-cinematic-gold transition-colors placeholder-white/20"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Step 3: Details & Extra Info */}
                <AnimatePresence>
                    {formData.email.includes('@') && (
                        <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="space-y-10 overflow-hidden"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-xs font-mono text-gray-500 uppercase">Budget Range</label>
                                    <select 
                                        className="w-full bg-transparent border-b border-white/20 py-2 text-xl focus:outline-none focus:border-cinematic-gold"
                                        value={formData.budget}
                                        onChange={(e) => setFormData({...formData, budget: e.target.value})}
                                    >
                                        <option value="" className="bg-black text-gray-500">Select...</option>
                                        <option value="low" className="bg-black text-white">$1k - $5k</option>
                                        <option value="mid" className="bg-black text-white">$5k - $15k</option>
                                        <option value="high" className="bg-black text-white">$15k+</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-mono text-gray-500 uppercase">Timeline</label>
                                    <select 
                                        className="w-full bg-transparent border-b border-white/20 py-2 text-xl focus:outline-none focus:border-cinematic-gold"
                                        value={formData.timeline}
                                        onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                                    >
                                        <option value="" className="bg-black text-gray-500">Select...</option>
                                        <option value="asap" className="bg-black text-white">ASAP</option>
                                        <option value="month" className="bg-black text-white">1 Month</option>
                                        <option value="quarter" className="bg-black text-white">3 Months</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="text-sm font-mono text-cinematic-gold uppercase tracking-widest block">05. Project Brief</label>
                                <textarea 
                                    placeholder="Music video, commercial, documentary..."
                                    rows={2}
                                    className="w-full bg-transparent border-b border-white/20 text-2xl md:text-4xl py-4 focus:outline-none focus:border-cinematic-gold transition-colors placeholder-white/20 resize-none"
                                    value={formData.details}
                                    onChange={(e) => setFormData({...formData, details: e.target.value})}
                                />
                            </div>
                            
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                disabled={isSubmitting}
                                className="bg-white text-black px-12 py-4 rounded-full font-bold text-lg hover:bg-cinematic-gold transition-colors flex items-center gap-3 disabled:opacity-50"
                            >
                                {isSubmitting ? 'SENDING...' : 'SEND PROPOSAL'}
                                <Send size={20} />
                            </motion.button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </form>
          </div>
        ) : (
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center"
          >
            <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
            <h3 className="text-4xl font-bold mb-4">MESSAGE RECEIVED</h3>
            <p className="text-gray-400 font-serif italic text-xl">I'll be in touch shortly.</p>
            <button 
                onClick={() => { setIsSuccess(false); setFormData({name:'', email:'', details:'', budget: '', timeline: ''}); }}
                className="mt-12 text-sm uppercase tracking-widest text-white/50 hover:text-white"
            >
                Send Another
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};