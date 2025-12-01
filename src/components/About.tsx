import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-genz-neon overflow-hidden relative border-y-4 border-black">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-checkers opacity-10 pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
                
                {/* Player Card */}
                <motion.div 
                    whileHover={{ scale: 1.02, rotate: 2 }}
                    className="relative w-full max-w-md bg-gradient-to-b from-gray-900 to-black border-4 border-black p-4 shadow-hard text-white"
                >
                    <div className="flex justify-between items-start mb-2">
                        <div className="text-5xl font-black text-genz-neon italic">99</div>
                        <div className="text-right">
                            <div className="text-sm font-mono text-gray-400">POS</div>
                            <div className="font-bold text-xl">EDIT</div>
                        </div>
                    </div>
                    
                    <div className="relative aspect-[3/4] bg-gray-800 mb-4 overflow-hidden border-2 border-white/20">
                         {/* Image source pointing to public/hillel.jpg */}
                         <img 
                            src="/hillel.jpg" 
                            alt="Hillel" 
                            className="w-full h-full object-cover grayscale contrast-125"
                        />
                        <div className="absolute bottom-0 left-0 w-full bg-genz-pink text-black font-black text-center py-1 uppercase tracking-widest">
                            Hillel B.D.
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center font-mono text-sm">
                        <div className="bg-white/10 p-1 rounded">
                            <div className="text-genz-neon font-bold">98</div>
                            <div className="text-[10px] text-gray-400">PAC</div>
                        </div>
                        <div className="bg-white/10 p-1 rounded">
                            <div className="text-genz-neon font-bold">99</div>
                            <div className="text-[10px] text-gray-400">DRB</div>
                        </div>
                        <div className="bg-white/10 p-1 rounded">
                            <div className="text-genz-neon font-bold">95</div>
                            <div className="text-[10px] text-gray-400">SHO</div>
                        </div>
                    </div>
                </motion.div>

                {/* Info / Radar Stats (Simulated with Polygon) */}
                <div className="w-full lg:w-1/2">
                    <h2 className="text-6xl md:text-8xl font-black mb-8 uppercase leading-[0.8] text-black italic">
                        The <br/>Operator
                    </h2>
                    
                    <div className="bg-white border-4 border-black p-8 shadow-hard relative">
                        <p className="font-bold text-xl leading-relaxed mb-8">
                            I treat content like a video game. The goal? <span className="bg-black text-white px-1">High Score.</span>
                            <br/><br/>
                            Most editors just cut clips. I engineer psychological triggers that force the algorithm to push your content.
                        </p>

                        {/* Power Bars */}
                        <div className="space-y-4 font-mono font-bold uppercase">
                            {[
                                { l: "Retention", v: "98%" },
                                { l: "Click Through", v: "12%" },
                                { l: "Viral Rate", v: "High" }
                            ].map((stat, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="w-32">{stat.l}</div>
                                    <div className="flex-grow h-6 bg-gray-200 border-2 border-black relative">
                                        <motion.div 
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '100%' }}
                                            transition={{ delay: 0.5 + (i*0.2), duration: 1 }}
                                            className="h-full bg-black"
                                        />
                                    </div>
                                    <div className="w-12 text-right">{stat.v}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
};
