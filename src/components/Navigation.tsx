import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Magnetic } from './Magnetic';
import { SoundControl } from './SoundControl';

interface NavigationProps {
  onOpenGallery: () => void;
  onOpenProcess: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenGallery, onOpenProcess }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    if (id === 'gallery') {
        onOpenGallery();
    } else if (id === 'process-modal') {
        onOpenProcess();
    } else {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'WORK', id: 'work', action: false },
    { name: 'GALLERY', id: 'gallery', action: true },
    { name: 'ABOUT', id: 'about', action: false },
    { name: 'SERVICES', id: 'services', action: false },
    { name: 'PROCESS', id: 'process-modal', action: true },
    { name: 'CONTACT', id: 'contact', action: false },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'py-4 bg-black/80 backdrop-blur-md border-b border-white/5' : 'py-8 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo & Sound */}
          <div className="flex items-center gap-8">
            <div 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-2xl font-black tracking-tighter cursor-pointer flex items-center gap-2 group z-50 relative"
            >
                <span className="text-white group-hover:text-cinematic-gold transition-colors">HILLEL</span>
                <span className="w-2 h-2 rounded-full bg-cinematic-red animate-pulse"></span>
            </div>
            
            <div className="hidden md:block">
                <SoundControl />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Magnetic key={link.name}>
                <button
                    onClick={() => handleLinkClick(link.id)}
                    className="text-sm font-mono font-bold text-white/70 hover:text-white hover:text-cinematic-gold transition-colors tracking-widest relative group px-2 py-4"
                >
                    {link.name}
                    <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-cinematic-gold transition-all duration-300 group-hover:w-full"></span>
                </button>
              </Magnetic>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.id)}
                className="text-3xl font-black text-white hover:text-cinematic-gold tracking-tighter"
              >
                {link.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};