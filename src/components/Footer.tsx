import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10 text-sm">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            
            {/* Column 1: Brand */}
            <div>
                <div className="text-3xl font-black tracking-tighter mb-6 flex items-center gap-2">
                    <span>HILLEL</span>
                    <span className="w-2 h-2 rounded-full bg-cinematic-red"></span>
                </div>
                <p className="text-gray-400 leading-relaxed max-w-xs">
                    Crafting visual narratives that resonate. Specialized in high-end video editing, color grading, and motion graphics.
                </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
                <h4 className="font-mono text-cinematic-gold uppercase tracking-widest mb-6">Explore</h4>
                <ul className="space-y-4">
                    <li><a href="#work" className="text-gray-400 hover:text-white transition-colors">Selected Work</a></li>
                    <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                    <li><a href="#process" className="text-gray-400 hover:text-white transition-colors">The Process</a></li>
                    <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Start a Project</a></li>
                </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div>
                <h4 className="font-mono text-cinematic-gold uppercase tracking-widest mb-6">Contact</h4>
                <ul className="space-y-4 text-gray-400">
                    <li>hello@hillel.media</li>
                    <li>+972 50 123 4567</li>
                    <li>Tel Aviv, Israel</li>
                </ul>
            </div>
        </div>

        <div className="container mx-auto px-6 pt-8 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-white/30 font-mono text-xs">
            <p>&copy; {new Date().getFullYear()} HILLEL MEDIA. All Rights Reserved.</p>
            <p>Designed for Impact.</p>
        </div>
    </footer>
  );
};