import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, Zap } from 'lucide-react';

const REVIEWS = [
  { user: "viral_king", comment: "BRO this editing is absolutely cracked 💀🔥", color: "from-blue-500 to-cyan-500" },
  { user: "agency_ceo", comment: "ROI went up 400% in week one. Hillel is a cheat code.", color: "from-purple-500 to-pink-500" },
  { user: "sarah_content", comment: "Finally an editor who understands pacing!! ⚡️", color: "from-yellow-400 to-orange-500" },
  { user: "drop_shipper", comment: "Can we sign a retainer ASAP? take my money 💰", color: "from-green-400 to-emerald-600" },
  { user: "marketing_pro", comment: "Stop scrolling and hire him. Seriously.", color: "from-red-500 to-pink-600" }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-black overflow-hidden relative">
      <div className="absolute inset-0 bg-grid-neon opacity-20"></div>
      
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Side */}
        <div className="text-left relative z-10">
            <h2 className="text-7xl font-black text-white mb-6 uppercase leading-none">
                THE <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-genz-neon to-genz-blue">HYPE</span>
            </h2>
            <div className="bg-white text-black p-6 font-mono font-bold text-lg inline-block transform rotate-2 border-4 border-genz-pink shadow-hard-neon">
                Rated 5.0 Stars on Every Platform
            </div>
            <div className="mt-12 flex gap-4">
                {[1,2,3,4,5].map(i => (
                    <Star key={i} size={48} fill="#CCFF00" strokeWidth={0} className="animate-pulse" />
                ))}
            </div>
        </div>

        {/* Chat Feed */}
        <div className="relative h-[500px] w-full bg-gray-900/50 border-4 border-gray-800 rounded-xl overflow-hidden backdrop-blur-sm p-4">
            <div className="absolute top-0 left-0 w-full bg-gray-800 p-2 text-xs font-mono text-gray-400 uppercase tracking-widest z-10 flex justify-between">
                <span>🔴 LIVE CHAT</span>
                <span>12.4K VIEWERS</span>
            </div>
            
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-10"></div>

            <div className="mt-8 flex flex-col gap-4">
                {REVIEWS.map((rev, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.2 }}
                        className="bg-black/80 p-4 rounded-lg rounded-tl-none border-l-4 border-genz-neon backdrop-blur-md max-w-sm ml-auto mr-0 shadow-lg relative"
                    >
                        <div className={`absolute -top-2 -left-2 w-8 h-8 rounded-full bg-gradient-to-br ${rev.color} border-2 border-black`}></div>
                        <div className="text-xs font-bold text-gray-400 mb-1 ml-4">@{rev.user}</div>
                        <p className="text-white font-bold leading-tight">{rev.comment}</p>
                        <div className="absolute -right-2 -bottom-2">
                            <Heart className="text-genz-pink fill-genz-pink w-6 h-6" />
                        </div>
                    </motion.div>
                ))}
                {/* Floating Emojis */}
                <motion.div 
                    animate={{ y: -500, opacity: 0 }} 
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-0 right-10 text-4xl pointer-events-none"
                >
                    🔥
                </motion.div>
                <motion.div 
                    animate={{ y: -500, opacity: 0 }} 
                    transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
                    className="absolute bottom-0 right-20 text-4xl pointer-events-none"
                >
                    💀
                </motion.div>
            </div>
        </div>

      </div>
    </section>
  );
};