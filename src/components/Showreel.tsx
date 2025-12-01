import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Play, Grid } from 'lucide-react';

interface ShowreelProps {
    onOpenGallery: () => void;
}

export const Showreel: React.FC<ShowreelProps> = ({ onOpenGallery }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });
  const x = useTransform(smoothProgress, [0.1, 0.9], ["20%", "-100%"]);
  const rotateX = useTransform(smoothProgress, [0.2, 0.8], ["20deg", "-20deg"]);
  const scale = useTransform(smoothProgress, [0.2, 0.5, 0.8], [0.8, 1, 0.8]);

  // Take only first 5 for the reel, show full gallery on click
  const reelProjects = PROJECTS.slice(0, 5);

  return (
    <section 
      id="work"
      ref={targetRef} 
      className={`relative bg-cinematic-black ${isMobile ? 'h-auto py-20' : 'h-[400vh]'}`}
    >
      <div className={`${isMobile ? '' : 'sticky top-0 h-screen flex items-center overflow-hidden perspective-1000'}`}>
        
        <div className="absolute top-10 left-10 z-10">
            <h2 className="text-4xl md:text-6xl font-bold font-mono text-white/90">SELECTED WORKS</h2>
            <div className="w-20 h-1 bg-cinematic-red mt-4"></div>
        </div>

        <motion.div 
          style={isMobile ? {} : { x, rotateX, scale }}
          className={`${isMobile ? 'flex flex-col gap-10 mt-32 px-6' : 'flex gap-10 md:gap-20 px-20 items-center will-change-transform'}`}
        >
          {reelProjects.map((project) => (
            <motion.div 
              key={project.id}
              className={`group relative flex-shrink-0 aspect-video bg-cinematic-gray rounded-lg overflow-hidden border border-white/10 shadow-2xl cursor-none ${isMobile ? 'w-full' : 'w-[600px]'}`}
              whileHover={isMobile ? {} : { scale: 1.05 }}
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

          {/* View All Card */}
          <motion.div 
            className={`flex-shrink-0 bg-cinematic-gray/50 border border-white/20 rounded-lg flex items-center justify-center cursor-pointer group hover:bg-cinematic-gold hover:text-black transition-colors ${isMobile ? 'w-full h-48' : 'w-[300px] h-[338px]'}`}
            onClick={onOpenGallery}
            whileHover={{ scale: 1.05 }}
          >
              <div className="text-center">
                  <Grid size={48} className="mx-auto mb-4 opacity-50 group-hover:opacity-100" />
                  <span className="text-xl font-bold tracking-widest uppercase">View All<br/>Works</span>
              </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};