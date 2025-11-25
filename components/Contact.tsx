import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', details: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNext = (field: string, value: string) => {
    if (!value) return;
    setFormData(prev => ({ ...prev, [field]: value }));
    setStep(prev => prev + 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Simulate Haptic Feedback
    if (navigator.vibrate) navigator.vibrate(200);
  };

  return (
    <section className="min-h-screen bg-black relative flex items-center justify-center py-20 overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 opacity-20">
         <img 
            src="https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=2600&auto=format&fit=crop" 
            className="w-full h-full object-cover grayscale"
            alt="Editing Suite"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
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

            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Step 1: Name */}
                <div className="space-y-4">
                    <label className="text-sm font-mono text-cinematic-gold uppercase tracking-widest block">01. Who are you?</label>
                    <input 
                        type="text" 
                        placeholder="Your Name"
                        className="w-full bg-transparent border-b border-white/20 text-3xl md:text-5xl py-4 focus:outline-none focus:border-cinematic-gold transition-colors placeholder-white/20"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                handleNext('name', formData.name);
                            }
                        }}
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
                            <label className="text-sm font-mono text-cinematic-gold uppercase tracking-widest block">02. Where can I reach you?</label>
                            <input 
                                type="email" 
                                placeholder="email@example.com"
                                className="w-full bg-transparent border-b border-white/20 text-3xl md:text-5xl py-4 focus:outline-none focus:border-cinematic-gold transition-colors placeholder-white/20"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        e.preventDefault();
                                        handleNext('email', formData.email);
                                    }
                                }}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Step 3: Details */}
                <AnimatePresence>
                    {formData.email.includes('@') && (
                        <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="space-y-8 overflow-hidden"
                        >
                            <div className="space-y-4">
                                <label className="text-sm font-mono text-cinematic-gold uppercase tracking-widest block">03. Project Brief</label>
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
                onClick={() => { setIsSuccess(false); setFormData({name:'', email:'', details:''}); }}
                className="mt-12 text-sm uppercase tracking-widest text-white/50 hover:text-white"
            >
                Send Another
            </button>
          </motion.div>
        )}
      </div>

      {/* Floating WhatsApp CTA */}
      <motion.a
        href="https://wa.me/1234567890" // Replace with real number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-[#25D366]/50 transition-shadow"
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </motion.a>
    </section>
  );
};
