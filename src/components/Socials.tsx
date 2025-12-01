import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Mail } from 'lucide-react';

export const Socials: React.FC = () => {
    // Custom icons or generic lucide ones
    const links = [
        { name: "Instagram", icon: <Instagram size={32} />, url: "#" },
        { name: "Email", icon: <Mail size={32} />, url: "mailto:hello@hillel.media" },
        { name: "WhatsApp", icon: <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>, url: "https://wa.me/972559875222" },
        { name: "TikTok", icon: <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>, url: "#" },
    ];

    return (
        <section className="bg-cinematic-black py-20 border-t border-white/5">
            <div className="container mx-auto px-6 flex justify-center gap-12 flex-wrap">
                {links.map((link, i) => (
                    <motion.a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-white/50 hover:text-white transition-colors p-4 rounded-full bg-white/5 hover:bg-cinematic-gold hover:text-black"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {link.icon}
                    </motion.a>
                ))}
            </div>
        </section>
    );
};