import React from 'react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-genz-pink pt-20 pb-4 overflow-hidden">
        {/* Animated Wavy Top Border (Simulated with CSS clip-path or simple div for now to keep it robust) */}
        <div className="absolute top-0 left-0 w-full h-8 bg-black skew-y-1"></div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 text-black">
                <div>
                    <h4 className="font-black text-2xl mb-6 uppercase border-b-4 border-black inline-block">SITEMAP</h4>
                    <ul className="space-y-2 font-mono font-bold text-xl uppercase">
                        <li><a href="#work" className="hover:text-white hover:translate-x-2 transition-transform inline-block">Work</a></li>
                        <li><a href="#services" className="hover:text-white hover:translate-x-2 transition-transform inline-block">Services</a></li>
                        <li><a href="#about" className="hover:text-white hover:translate-x-2 transition-transform inline-block">About</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 className="font-black text-2xl mb-6 uppercase border-b-4 border-black inline-block">CONNECT</h4>
                    <div className="flex flex-col gap-4">
                        {['TIKTOK', 'INSTAGRAM', 'YOUTUBE'].map(social => (
                            <a key={social} href="#" className="bg-black text-white py-2 px-4 font-black uppercase text-center hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                                {social}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="md:text-right">
                    <h4 className="font-black text-2xl mb-6 uppercase border-b-4 border-black inline-block">CONTACT</h4>
                    <a href="mailto:hello@hillel.media" className="block text-3xl md:text-4xl font-black break-words hover:text-white transition-colors leading-none">
                        HELLO@<br/>HILLEL.MEDIA
                    </a>
                </div>
            </div>
        </div>

        {/* Massive Scrolling Text */}
        <div className="border-y-4 border-black bg-white py-4 overflow-hidden flex relative z-10">
            <motion.div 
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="flex whitespace-nowrap gap-8"
            >
                {[...Array(10)].map((_, i) => (
                    <span key={i} className="text-8xl md:text-[10rem] font-black leading-none text-black">
                        GAME OVER <span className="text-genz-pink text-stroke-black">INSERT COIN</span>
                    </span>
                ))}
            </motion.div>
        </div>

        <div className="bg-black text-white text-center py-2 font-mono text-xs uppercase">
            © {new Date().getFullYear()} Hillel Media. All Rights Reserved. Level 1 Complete.
        </div>
    </footer>
  );
};