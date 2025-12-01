import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-genz-black text-white pt-20 pb-4 z-0 flex flex-col justify-end min-h-[80vh]">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 font-mono text-sm uppercase tracking-widest">
                <div>
                    <h4 className="text-genz-neon mb-4 font-black">Menu</h4>
                    <ul className="space-y-2 text-gray-500">
                        <li><a href="#work" className="hover:text-white hover:pl-2 transition-all">Work</a></li>
                        <li><a href="#about" className="hover:text-white hover:pl-2 transition-all">Player 1</a></li>
                        <li><a href="#pricing" className="hover:text-white hover:pl-2 transition-all">Shop</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-genz-neon mb-4 font-black">Socials</h4>
                    <ul className="space-y-2 text-gray-500">
                        <li><a href="#" className="hover:text-white hover:pl-2 transition-all">TikTok</a></li>
                        <li><a href="#" className="hover:text-white hover:pl-2 transition-all">Instagram</a></li>
                        <li><a href="#" className="hover:text-white hover:pl-2 transition-all">YouTube</a></li>
                    </ul>
                </div>
                <div className="col-span-2 text-right">
                    <h4 className="text-genz-neon mb-4 font-black">Contact</h4>
                    <a href="mailto:hello@hillel.media" className="text-2xl md:text-4xl font-black hover:text-genz-pink transition-colors">
                        HELLO@HILLEL.MEDIA
                    </a>
                </div>
            </div>

            <div className="border-t-4 border-white/10 pt-4 flex justify-between items-end">
                <h1 className="text-[14vw] leading-[0.8] font-black tracking-tighter text-white/5 select-none pointer-events-none">
                    GAME OVER
                </h1>
                <div className="text-xs font-mono text-gray-600 mb-4 text-right hidden md:block">
                    © {new Date().getFullYear()} HILLEL MEDIA INC.<br/>
                    ALL RIGHTS RESERVED.<br/>
                    LEVEL 2024
                </div>
            </div>
        </div>
    </footer>
  );
};