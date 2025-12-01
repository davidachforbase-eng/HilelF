import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  const stats = [
    { name: "SPEED", val: 95, color: "bg-genz-neon" },
    { name: "VIRALITY", val: 98, color: "bg-genz-pink" },
    { name: "RETENTION", val: 92, color: "bg-genz-blue" },
    { name: "CREATIVITY", val: 88, color: "bg-purple-500" },
  ];

  return (
    <section id="about" className="py-32 bg-genz-black relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-6xl md:text-8xl font-black mb-20 text-center glitch-text uppercase" data-text="PLAYER SELECT">
                PLAYER SELECT
            </h2>

            <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
                
                {/* Character Card */}
                <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    className="relative w-full md:w-[400px] border-4 border-genz-neon p-2 bg-black/50 shadow-hard"
                >
                    <div className="absolute top-4 left-4 z-20 bg-genz-neon text-black font-black px-2 py-1">P1</div>
                    <div className="relative aspect-[3/4] overflow-hidden bg-gray-800 group">
                         <img 
                            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1287&auto=format&fit=crop" 
                            alt="Hillel" 
                            className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-300"
                        />
                        {/* Glitch Overlay */}
                        <div className="absolute inset-0 bg-genz-pink mix-blend-color opacity-0 group-hover:opacity-20 transition-opacity" />
                    </div>
                    <div className="mt-4 text-center">
                        <h3 className="text-4xl font-black italic uppercase">HILLEL B.D.</h3>
                        <p className="font-mono text-genz-neon">LVL. 99 EDITOR</p>
                    </div>
                </motion.div>

                {/* Stats */}
                <div className="w-full md:w-1/2 space-y-8">
                    <div className="bg-white/5 p-8 border border-white/10 backdrop-blur-sm">
                        <p className="font-mono text-xl md:text-2xl leading-relaxed mb-8 text-white">
                            "I don't just edit videos. I engineer <span className="text-genz-neon font-bold">DOPAMINE HITS</span>. 
                            My mission is to turn your raw footage into an algorithmic weapon."
                        </p>
                        
                        <div className="space-y-6">
                            {stats.map((stat, i) => (
                                <div key={i}>
                                    <div className="flex justify-between font-mono font-bold text-sm mb-1">
                                        <span>{stat.name}</span>
                                        <span>{stat.val}%</span>
                                    </div>
                                    <div className="w-full h-4 bg-gray-800 border border-white/20 skew-x-[-10deg]">
                                        <motion.div 
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${stat.val}%` }}
                                            transition={{ delay: 0.5 + (i * 0.1), duration: 1 }}
                                            className={`h-full ${stat.color} shadow-[0_0_10px_currentColor]`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Accolades */}
                    <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
                        {['100M+ VIEWS', 'ADOBE CERTIFIED', 'TIKTOK PARTNER'].map((tag, i) => (
                            <span key={i} className="whitespace-nowrap px-4 py-2 border border-white/30 rounded-full font-mono text-xs uppercase hover:bg-white hover:text-black transition-colors">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};