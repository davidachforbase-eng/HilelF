import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { Layout, Scissors, Palette, Headphones, Zap } from 'lucide-react';
import { TiltCard } from './TiltCard';

const iconMap: Record<string, React.ReactNode> = {
  Layout: <Layout size={48} strokeWidth={3} />,
  Scissors: <Scissors size={48} strokeWidth={3} />,
  Palette: <Palette size={48} strokeWidth={3} />,
  Headphones: <Headphones size={48} strokeWidth={3} />,
};

const colors = [
    "bg-genz-pink", // Hot Pink
    "bg-genz-blue", // Electric Blue
    "bg-genz-neon", // Slime Green
    "bg-purple-500" // Purple
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-dots opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
            <h2 className="text-6xl md:text-9xl font-black text-black uppercase leading-[0.8] tracking-tighter transform -rotate-2 inline-block bg-genz-neon px-4 border-4 border-black shadow-hard">
                THE LOADOUT
            </h2>
            <p className="mt-8 text-xl font-bold font-mono uppercase tracking-widest text-gray-500">
                Select Your Weapon
            </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 perspective-1000">
          {SERVICES.map((service, index) => (
            <TiltCard key={service.id} className="h-full">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, type: "spring" }}
                    className={`h-96 ${colors[index % colors.length]} border-4 border-black p-6 flex flex-col justify-between shadow-hard hover:shadow-none hover:translate-x-[8px] hover:translate-y-[8px] transition-all duration-200`}
                >
                    <div className="flex justify-between items-start">
                        <div className="bg-black text-white p-3 rounded-full">
                            {iconMap[service.icon]}
                        </div>
                        <span className="font-black text-4xl opacity-20">0{index + 1}</span>
                    </div>
                    
                    <div>
                        <h3 className="text-3xl font-black uppercase italic mb-4 text-black leading-none">
                            {service.title}
                        </h3>
                        <div className="bg-black text-white p-4 font-mono text-sm leading-tight font-bold skew-x-[-5deg]">
                            {service.description}
                        </div>
                    </div>

                    <div className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full"></div>
                    <div className="absolute top-2 right-5 w-2 h-2 bg-white rounded-full"></div>
                </motion.div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};