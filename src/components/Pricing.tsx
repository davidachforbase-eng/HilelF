import React from 'react';
import { motion } from 'framer-motion';

const PLANS = [
    {
        name: "Starter",
        price: "$800",
        items: ["1x Strategy Call", "4x Short Form", "Basic Captions", "1x Revision Round"],
        total: "$800.00"
    },
    {
        name: "Viral",
        price: "$2500",
        items: ["Content Strategy", "12x Short Form", "Trend Research", "Motion GFX", "Unlimited Revisions"],
        total: "$2500.00",
        popular: true
    },
    {
        name: "Empire",
        price: "Custom",
        items: ["Full Management", "Daily Posting", "Analytics Report", "Dedicated Editor", "24/7 Support"],
        total: "CALL US"
    }
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-32 bg-genz-neon relative">
        <div className="container mx-auto px-6">
            <h2 className="text-black text-6xl md:text-9xl font-black mb-20 text-center tracking-tighter uppercase leading-[0.8]">
                PICK YOUR<br/>POISON
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {PLANS.map((plan, i) => (
                    <motion.div
                        key={i}
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: i * 0.15 }}
                        whileHover={{ rotate: i % 2 === 0 ? 2 : -2, scale: 1.02 }}
                        className={`relative bg-white text-black font-mono p-6 filter drop-shadow-2xl ${plan.popular ? 'transform -translate-y-4 z-10' : ''}`}
                    >
                        {plan.popular && (
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-2 font-black uppercase text-sm rotate-3 border-2 border-white">
                                Best Value
                            </div>
                        )}
                        
                        {/* Receipt Header */}
                        <div className="text-center border-b-2 border-dashed border-black pb-6 mb-6">
                            <h3 className="text-2xl font-black uppercase tracking-widest mb-1">{plan.name}</h3>
                            <p className="text-xs text-gray-500">ORDER #{100 + i}</p>
                            <p className="text-xs text-gray-500">{new Date().toLocaleDateString()}</p>
                        </div>

                        {/* Items */}
                        <ul className="space-y-3 mb-8 text-sm">
                            {plan.items.map((item, idx) => (
                                <li key={idx} className="flex justify-between">
                                    <span>{item}</span>
                                    <span className="font-bold">1</span>
                                </li>
                            ))}
                        </ul>

                        {/* Total */}
                        <div className="border-t-2 border-dashed border-black pt-4 mb-8">
                            <div className="flex justify-between text-2xl font-black">
                                <span>TOTAL</span>
                                <span>{plan.total}</span>
                            </div>
                            <div className="text-xs mt-2 text-center">TAX INCLUDED (DOPAMINE TAX)</div>
                        </div>

                        {/* Barcode */}
                        <div className="h-12 bg-black w-full mb-6 opacity-80" style={{ maskImage: 'repeating-linear-gradient(90deg, black, black 2px, transparent 2px, transparent 4px)' }}></div>

                        <button className="w-full bg-black text-white font-black py-4 hover:bg-genz-pink hover:text-black transition-colors uppercase tracking-widest border-2 border-transparent hover:border-black">
                            ADD TO CART
                        </button>

                        {/* Zig Zag Bottom */}
                        <div className="absolute left-0 -bottom-[10px] w-full h-[10px] receipt-bottom"></div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
};