import React from 'react';
import { motion } from 'framer-motion';

const PLANS = [
    {
        id: "01",
        name: "THE SNACK PACK",
        price: "$1,200",
        desc: "Taste the virality.",
        features: ["4x Short Form Videos", "Basic Hooks", "Simple Captions", "1 Revision Round"],
        color: "text-white"
    },
    {
        id: "02",
        name: "THE BIG MEAL",
        price: "$3,500",
        desc: "Full belly, high ROI.",
        features: ["12x Short Form Videos", "Viral Strategy", "Motion GFX", "Unlimited Revisions", "Trend Research"],
        color: "text-genz-neon",
        popular: true
    },
    {
        id: "03",
        name: "ALL YOU CAN EAT",
        price: "RETAINER",
        desc: "Never go hungry again.",
        features: ["Daily Content (30x)", "Account Management", "Comment Response", "Monthly Analytics", "Dedicated Editor"],
        color: "text-genz-pink"
    }
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-32 bg-red-600 relative">
        <div className="container mx-auto px-4 relative z-10">
            
            {/* Menu Header */}
            <div className="bg-black text-white p-6 border-4 border-white mb-8 flex justify-between items-end shadow-hard-white transform -rotate-1">
                <div>
                    <h2 className="text-5xl md:text-8xl font-black uppercase leading-none tracking-tighter">
                        COMBO MENU
                    </h2>
                    <p className="font-mono text-genz-neon font-bold text-xl uppercase">Served Hot & Fresh Daily</p>
                </div>
                <div className="hidden md:block text-right">
                    <div className="text-4xl font-black">OPEN 24/7</div>
                    <div className="text-sm font-mono">WORLDWIDE DELIVERY</div>
                </div>
            </div>

            {/* Menu Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {PLANS.map((plan, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.02 }}
                        className={`bg-[#1a1a1a] border-4 ${plan.popular ? 'border-genz-neon z-10 scale-105' : 'border-black'} p-6 flex flex-col relative shadow-2xl`}
                    >
                        {plan.popular && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-genz-neon text-black font-black px-4 py-1 uppercase tracking-widest text-sm border-2 border-black rotate-2">
                                Chef's Choice
                            </div>
                        )}

                        <div className="flex justify-between items-start border-b-2 border-dashed border-gray-700 pb-4 mb-4">
                            <div>
                                <span className="font-mono text-gray-500 font-bold block">#{plan.id}</span>
                                <h3 className={`text-3xl font-black uppercase italic ${plan.color}`}>{plan.name}</h3>
                            </div>
                            <div className="text-2xl font-black text-white">{plan.price}</div>
                        </div>

                        <p className="text-gray-400 font-mono text-sm mb-6 italic">"{plan.desc}"</p>

                        <ul className="space-y-3 mb-8 flex-grow">
                            {plan.features.map((feat, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-sm font-bold text-gray-200">
                                    <span className={`w-2 h-2 ${plan.color} rounded-sm`}></span>
                                    {feat}
                                </li>
                            ))}
                        </ul>

                        <button className={`w-full py-4 font-black uppercase tracking-widest text-xl transition-all border-2 border-transparent ${
                            plan.popular 
                            ? 'bg-genz-neon text-black hover:bg-white' 
                            : 'bg-white text-black hover:bg-gray-200'
                        }`}>
                            ORDER NOW
                        </button>
                    </motion.div>
                ))}
            </div>

            {/* Decor */}
            <div className="mt-8 text-center font-black text-white/20 text-9xl leading-none select-none overflow-hidden whitespace-nowrap">
                HUNGRY? HUNGRY? HUNGRY?
            </div>
        </div>
    </section>
  );
};