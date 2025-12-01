import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Unlock } from 'lucide-react';

const CODES = [
    { q: "TURNAROUND_TIME", a: "Super fast. 48 hours for standard edits. We move at the speed of the internet." },
    { q: "PROJECT_FILES", a: "Raw files available for an unlocking fee. Otherwise, we handle the rendering." },
    { q: "SOFTWARE_USED", a: "DaVinci Resolve + CapCut Pro. The perfect blend of pro grading and trendy effects." },
    { q: "REVISIONS", a: "Unlimited revisions on the 'Big Meal' package. We don't stop until it's perfect." }
];

export const FAQ: React.FC = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-20 bg-[#111] font-mono">
        <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-12 text-center uppercase tracking-widest">
                <span className="text-genz-neon">&lt;</span> CHEAT CODES <span className="text-genz-neon">/&gt;</span>
            </h2>

            <div className="space-y-4">
                {CODES.map((item, i) => (
                    <div key={i} className="group">
                        <button 
                            onClick={() => setActive(active === i ? null : i)}
                            className={`w-full p-4 border-2 border-white/20 flex justify-between items-center transition-all ${active === i ? 'bg-genz-neon border-genz-neon text-black' : 'hover:border-white text-gray-400 hover:text-white'}`}
                        >
                            <span className="text-lg font-bold tracking-widest uppercase">
                                {active === i ? '> UNLOCKED: ' : '> LOCKED: '} {item.q}
                            </span>
                            {active === i ? <Unlock size={20} /> : <Lock size={20} />}
                        </button>
                        
                        {active === i && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                className="bg-white/5 border-x-2 border-b-2 border-white/20 p-6 text-white"
                            >
                                <p className="text-xl font-bold">{item.a}</p>
                            </motion.div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};