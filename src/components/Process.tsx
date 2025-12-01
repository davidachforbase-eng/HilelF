import React from 'react';
import { motion } from 'framer-motion';

export const Process: React.FC = () => {
  const steps = [
    { num: "01", title: "THE HOOK", desc: "We stop the scroll in 3 seconds or less. Brutal cuts, loud audio, instant value." },
    { num: "02", title: "THE VALUE", desc: "High-paced editing that retains attention. No boring moments. Pure dopamine." },
    { num: "03", title: "THE CTA", desc: "Psychological triggers that force engagement. Like, Follow, Buy." },
  ];

  return (
    <section id="process" className="py-32 bg-genz-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        <h2 className="text-4xl md:text-7xl font-black mb-20 text-center uppercase">
            THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-genz-neon to-genz-blue">FORMULA</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {steps.map((step, i) => (
                <motion.div 
                    key={i}
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="brutalist-card p-8 relative group"
                >
                    <div className="absolute -top-6 -right-6 w-20 h-20 bg-genz-purple rounded-full flex items-center justify-center font-black text-3xl transform rotate-12 group-hover:rotate-0 transition-transform">
                        {step.num}
                    </div>
                    
                    <h3 className="text-4xl font-black mb-4 italic uppercase text-white group-hover:text-genz-neon transition-colors">{step.title}</h3>
                    <p className="text-gray-400 text-lg font-mono leading-tight">{step.desc}</p>
                </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
};