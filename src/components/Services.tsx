import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { Layout, Scissors, Palette, Headphones } from 'lucide-react';
import { TiltCard } from './TiltCard';

const iconMap: Record<string, React.ReactNode> = {
  Layout: <Layout size={32} />,
  Scissors: <Scissors size={32} />,
  Palette: <Palette size={32} />,
  Headphones: <Headphones size={32} />,
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-genz-black relative">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl md:text-7xl font-black mb-16 text-center text-white uppercase italic">
            How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-genz-pink to-genz-blue">Kill It</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32 perspective-1000">
          {SERVICES.map((service, index) => (
            <TiltCard key={service.id} className="h-full">
                <motion.div
                initial={{ opacity: 0, rotateX: 90 }}
                whileInView={{ opacity: 1, rotateX: 0 }}
                transition={{ delay: index * 0.1 }}
                className="holo-card p-8 rounded-xl h-96 flex flex-col justify-between group shadow-neon"
                >
                <div className="w-16 h-16 bg-black/50 rounded-full flex items-center justify-center border border-white/20 text-white group-hover:bg-genz-neon group-hover:text-black transition-colors duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                    {iconMap[service.icon]}
                </div>
                
                <div className="relative z-10">
                    <h3 className="text-3xl font-black mb-4 text-white group-hover:text-genz-neon transition-colors uppercase italic transform group-hover:translate-x-2 duration-300">
                        {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm font-mono leading-relaxed border-l-2 border-white/10 pl-4 group-hover:border-genz-pink transition-colors">
                        {service.description}
                    </p>
                </div>

                <div className="absolute top-4 right-4 text-white/10 font-black text-6xl select-none group-hover:text-white/5 transition-colors">
                    0{index + 1}
                </div>
                </motion.div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};