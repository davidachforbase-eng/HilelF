import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';

export const ProjectList: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse position for the floating image
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    // Calculate position relative to container or viewport
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section 
        className="py-20 bg-cinematic-black relative z-20 border-t border-white/5"
        onMouseMove={handleMouseMove}
        ref={containerRef}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-12">Archive Selection</h2>
        
        <div className="flex flex-col">
            {PROJECTS.map((project, index) => (
                <div 
                    key={project.id}
                    className="group border-b border-white/10 py-8 flex justify-between items-center cursor-pointer transition-colors hover:bg-white/5 px-4"
                    onMouseEnter={() => setActiveProject(index)}
                    onMouseLeave={() => setActiveProject(null)}
                >
                    <div className="flex items-center gap-8">
                        <span className="text-xs font-mono text-gray-600 group-hover:text-cinematic-gold">
                            {String(index + 1).padStart(2, '0')}
                        </span>
                        <h3 className="text-4xl md:text-6xl font-black text-white/50 group-hover:text-white transition-colors uppercase tracking-tight">
                            {project.title}
                        </h3>
                    </div>
                    <span className="text-sm font-mono text-gray-500 group-hover:text-white transition-colors hidden md:block">
                        {project.category}
                    </span>
                </div>
            ))}
        </div>
      </div>

      {/* Floating Image Preview */}
      <motion.div
        className="fixed top-0 left-0 w-[400px] h-[300px] pointer-events-none z-50 overflow-hidden rounded-lg hidden md:block mix-blend-difference"
        variants={{
            initial: { scale: 0, opacity: 0 },
            visible: { scale: 1, opacity: 1 }
        }}
        animate={activeProject !== null ? "visible" : "initial"}
        style={{
            x: mousePos.x - 200, // Center on cursor
            y: mousePos.y - 150,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      >
        {activeProject !== null && (
            <img 
                src={PROJECTS[activeProject].image} 
                alt="Project Preview" 
                className="w-full h-full object-cover grayscale contrast-125"
            />
        )}
      </motion.div>
    </section>
  );
};
