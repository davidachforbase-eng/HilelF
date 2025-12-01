import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const PLANS = [
    {
        name: "SOCIAL CUT",
        price: "$800",
        desc: "High-impact short form content.",
        features: ["Up to 60 Seconds", "Vertical Format (9:16)", "Dynamic Captions", "Basic Color Correction", "2 Revisions"],
        highlight: false
    },
    {
        name: "NARRATIVE",
        price: "$2,500",
        desc: "Music videos and commercials.",
        features: ["Up to 5 Minutes", "4K Delivery", "Advanced Sound Design", "Cinematic Color Grade", "Motion Graphics", "3 Revisions"],
        highlight: true
    },
    {
        name: "CINEMA",
        price: "CUSTOM",
        desc: "Full scale production editing.",
        features: ["Feature Length / Docs", "Offline & Online Edit", "VFX Integration", "Theatrical Mix Support", "DCP Creation", "Unlimited Revisions"],
        highlight: false
    }
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-32 bg-cinematic-black relative">
        <div className="container mx-auto px-6">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-6xl font-black mb-4 glitch-text" data-text="INVESTMENT">INVESTMENT</h2>
                <p className="text-gray-400 font-serif italic">Transparent pricing for premium results.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {PLANS.map((plan, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ y: -10 }}
                        className={`relative p-8 rounded-2xl border flex flex-col ${plan.highlight ? 'bg-white/5 border-cinematic-gold shadow-[0_0_30px_rgba(212,175,55,0.1)]' : 'bg-transparent border-white/10'}`}
                    >
                        {plan.highlight && (
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cinematic-gold text-black text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                                Most Popular
                            </div>
                        )}
                        <h3 className="text-2xl font-bold font-mono uppercase tracking-widest mb-2">{plan.name}</h3>
                        <div className="text-4xl font-black mb-4 text-white">{plan.price}</div>
                        <p className="text-gray-400 text-sm mb-8 border-b border-white/10 pb-8">{plan.desc}</p>
                        
                        <ul className="space-y-4 mb-12 flex-grow">
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                                    <Check size={16} className="text-cinematic-gold" />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <button className={`w-full py-4 rounded-lg font-bold tracking-widest transition-all ${plan.highlight ? 'bg-cinematic-gold text-black hover:bg-white' : 'bg-white/10 text-white hover:bg-white hover:text-black'}`}>
                            SELECT PLAN
                        </button>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
};