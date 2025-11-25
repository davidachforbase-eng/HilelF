import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Play } from 'lucide-react';

export const Showreel: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // Smooth scroll progress
  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });
  
  // Transform vertical scroll to horizontal movement
  // Adjust range: Needs to move enough to see all items. 
  const x = useTransform(smoothProgress, [0.1, 0.9], ["20%", "-80%"]);
  
  // Tunnel effects: Rotation and scale based on progress
  const rotateX = useTransform(smoothProgress, [0.2, 0.8], ["20deg", "-20deg"]);
  const scale = useTransform(smoothProgress, [0.2, 0.5, 0.8], [0.8, 1, 0.8]);

  return (
    <section ref={targetRef} className="h-[400vh] relative bg-cinematic-black">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden perspective-1000">
        
        <div className="absolute top-10 left-10 z-10">
            <h2 className="text-4xl md:text-6xl font-bold font-mono text-white/90">SELECTED WORKS</h2>
            <div className="w-20 h-1 bg-cinematic-red mt-4"></div>
        </div>

        <motion.div 
          style={{ x, rotateX, scale }}
          className="flex gap-10 md:gap-20 px-20 items-center will-change-transform"
        >
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={project.id}
              className="group relative flex-shrink-0 w-[80vw] md:w-[600px] aspect-video bg-cinematic-gray rounded-lg overflow-hidden border border-white/10 shadow-2xl cursor-none"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="text-cinematic-gold text-sm font-mono tracking-widest uppercase mb-2 block">
                    {project.category}
                </span>
                <h3 className="text-4xl font-bold uppercase italic">{project.title}</h3>
              </div>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                    <Play fill="white" className="ml-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
