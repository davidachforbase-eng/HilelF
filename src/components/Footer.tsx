import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full h-screen bg-cinematic-black flex flex-col justify-between z-0 pt-32 pb-10 px-6">
        {/* Background Texture */}
        <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" />

        <div className="container mx-auto flex-grow flex flex-col justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div>
                    <h2 className="text-[12vw] leading-[0.8] font-black tracking-tighter text-white/10 select-none">
                        HILLEL
                        <br/>
                        MEDIA
                    </h2>
                </div>
                
                <div className="flex flex-col justify-end h-full gap-12">
                     <div className="grid grid-cols-2 gap-8 text-sm font-mono uppercase tracking-widest">
                        <div>
                            <h3 className="text-cinematic-gold mb-4">Socials</h3>
                            <ul className="space-y-2 text-gray-500">
                                <li><a href="#" className="hover:text-white">Instagram</a></li>
                                <li><a href="#" className="hover:text-white">Twitter</a></li>
                                <li><a href="#" className="hover:text-white">LinkedIn</a></li>
                                <li><a href="#" className="hover:text-white">Vimeo</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-cinematic-gold mb-4">Menu</h3>
                            <ul className="space-y-2 text-gray-500">
                                <li><a href="#work" className="hover:text-white">Work</a></li>
                                <li><a href="#about" className="hover:text-white">About</a></li>
                                <li><a href="#contact" className="hover:text-white">Contact</a></li>
                            </ul>
                        </div>
                     </div>
                     
                     <div className="text-right">
                        <a href="mailto:hello@hillel.media" className="text-2xl md:text-4xl font-bold hover:text-cinematic-gold transition-colors underline decoration-1 underline-offset-8 decoration-white/20">
                            hello@hillel.media
                        </a>
                     </div>
                </div>
            </div>
        </div>

        <div className="container mx-auto flex justify-between items-end border-t border-white/10 pt-8 text-xs font-mono text-gray-600">
            <div>
                &copy; {new Date().getFullYear()} HILLEL MEDIA
            </div>
            <div>
                TEL AVIV &bull; NYC &bull; LDN
            </div>
            <div>
                SCROLL TO TOP
            </div>
        </div>
    </footer>
  );
};
