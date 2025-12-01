import React from 'react';
import { motion } from 'framer-motion';

export const Intro: React.FC = () => {
  return (
    <section className="bg-white py-32 md:py-48 relative overflow-hidden border-b border-black/5">
      
      {/* Decorative floating elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-black rounded-full" />
      <div className="absolute bottom-20 right-10 w-2 h-2 bg-black rounded-full" />

      {/* Main Text Content */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center text-center">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
        >
            <p className="text-3xl md:text-5xl lg:text-6xl font-sans font-medium leading-tight text-studio-black" dir="rtl">
                מוֹזי, סטודיו לדיגיטל ומיתוג שכולו מוקדש ליצירת חוויה זכירה ובלתי נשכחת עבור המותג שלך.
            </p>
            
            <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "100px" }}
                transition={{ delay: 0.5, duration: 1 }}
                className="h-1 bg-black mt-12 mx-auto"
            />
        </motion.div>
      </div>

      {/* Marquee Effect at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden whitespace-nowrap py-4 opacity-10 select-none">
          <motion.div 
            className="inline-block text-8xl font-black uppercase tracking-tighter"
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            Strategy • Design • Motion • Development • Branding • Strategy • Design • Motion • Development • Branding •
          </motion.div>
          <motion.div 
            className="inline-block text-8xl font-black uppercase tracking-tighter"
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            Strategy • Design • Motion • Development • Branding • Strategy • Design • Motion • Development • Branding •
          </motion.div>
      </div>
    </section>
  );
};