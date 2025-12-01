import React from 'react';
import { motion } from 'framer-motion';
import { Award, Film, Star, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-cinematic-black relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cinematic-dark to-transparent z-0 opacity-50" />
        
        <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-16">
                
                {/* Image Side */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/2 relative"
                >
                    <div className="aspect-[3/4] rounded-sm overflow-hidden border border-white/10 group">
                        <img 
                            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1287&auto=format&fit=crop" 
                            alt="Hillel - Video Editor" 
                            className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                    </div>
                    {/* Decorative frame */}
                    <div className="absolute -bottom-4 -right-4 w-full h-full border border-cinematic-gold/20 -z-10" />
                </motion.div>

                {/* Text Side */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/2"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-[1px] bg-cinematic-gold"></div>
                        <h2 className="text-cinematic-gold font-mono tracking-widest uppercase text-sm">The Editor</h2>
                    </div>
                    
                    <h3 className="text-4xl md:text-6xl font-black mb-8 leading-none tracking-tight">
                        HILLEL <br/>
                        <span className="text-white/20">BEN-DAVID</span>
                    </h3>
                    
                    <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light max-w-lg">
                        Cinema isn't just about what you see; it's about what you feel. With over a decade in the cutting room, I specialize in finding the heartbeat of every story.
                        <br/><br/>
                        My approach combines technical precision with emotional intuition. Whether it's a high-octane commercial or a slow-burn documentary, I sculpt time and light to create narratives that linger long after the screen goes black.
                    </p>

                    {/* Stats / Awards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 border-t border-white/10 pt-8">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white/5 rounded-full text-cinematic-gold shrink-0">
                                <Film size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-lg">200+ Projects</h4>
                                <p className="text-xs text-gray-500 mt-1 uppercase tracking-wide">Commercials & Docs</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white/5 rounded-full text-cinematic-gold shrink-0">
                                <Award size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-lg">Award Winning</h4>
                                <p className="text-xs text-gray-500 mt-1 uppercase tracking-wide">Berlin Indie Fest '23</p>
                            </div>
                        </div>
                         <div className="flex items-start gap-4">
                            <div className="p-3 bg-white/5 rounded-full text-cinematic-gold shrink-0">
                                <Star size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-lg">Adobe Certified</h4>
                                <p className="text-xs text-gray-500 mt-1 uppercase tracking-wide">Premiere Pro Expert</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white/5 rounded-full text-cinematic-gold shrink-0">
                                <CheckCircle2 size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-lg">Satisfaction</h4>
                                <p className="text-xs text-gray-500 mt-1 uppercase tracking-wide">100% Client Retention</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 opacity-50">
                        {/* Signature placeholder SVG */}
                         <svg width="200" height="60" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 30 C 20 20, 40 10, 50 30 S 80 50, 90 30 S 120 10, 140 40" stroke="white" strokeWidth="2" fill="none"/>
                            <path d="M140 40 L 160 20 L 180 50" stroke="white" strokeWidth="2" fill="none"/>
                         </svg>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
  );
};