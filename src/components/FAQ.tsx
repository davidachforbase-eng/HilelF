import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const QUESTIONS = [
    { q: "What is your typical turnaround time?", a: "For short-form content, typically 48-72 hours. Music videos and commercials usually require 1-2 weeks depending on complexity and VFX requirements." },
    { q: "Do you provide raw project files?", a: "Project files are not included in standard packages but can be purchased for an additional fee of 30% of the total project cost." },
    { q: "What software do you use?", a: "My primary NLE is DaVinci Resolve Studio for its superior color capabilities, but I am also fluent in Premiere Pro and Avid Media Composer." },
    { q: "How do revisions work?", a: "All packages include a set number of revision rounds. We use Frame.io for precise, time-stamped feedback to ensure every note is addressed efficiently." }
];

export const FAQ: React.FC = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-20 bg-black">
        <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">FAQ</h2>
            <div className="space-y-4">
                {QUESTIONS.map((item, i) => (
                    <div key={i} className="border-b border-white/10">
                        <button 
                            className="w-full py-6 flex justify-between items-center text-left hover:text-cinematic-gold transition-colors"
                            onClick={() => setActive(active === i ? null : i)}
                        >
                            <span className="text-lg md:text-xl font-medium">{item.q}</span>
                            <motion.div 
                                animate={{ rotate: active === i ? 45 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Plus size={24} />
                            </motion.div>
                        </button>
                        <AnimatePresence>
                            {active === i && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden"
                                >
                                    <p className="pb-8 text-gray-400 leading-relaxed">
                                        {item.a}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};