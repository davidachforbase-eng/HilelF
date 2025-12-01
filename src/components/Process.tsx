import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export const Process: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    let clientX;
    
    if ('touches' in e) {
        clientX = e.touches[0].clientX;
    } else {
        clientX = (e as React.MouseEvent).clientX;
    }

    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const steps = [
    { num: "01", title: "Ingest", desc: "Raw footage organization & proxies" },
    { num: "02", title: "Offline", desc: "Story construction & pacing" },
    { num: "03", title: "Color", desc: "Look development & grading" },
    { num: "04", title: "Mix", desc: "Sound design & mastering" },
  ];

  return (
    <section id="process" className="py-32 bg-cinematic-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="mb-24">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">THE PROCESS</h2>
            <p className="text-xl text-gray-400 max-w-2xl font-serif italic">
                From raw chaos to refined narrative. Every frame counts.
            </p>
        </div>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-40 relative">
            <div className="absolute top-12 left-0 w-full h-[1px] bg-white/10 hidden md:block"></div>
            {steps.map((step, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="relative pt-12"
                >
                    <div className="absolute top-0 left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-cinematic-gold rounded-full shadow-[0_0_15px_rgba(212,175,55,0.5)] z-10" />
                    <span className="text-6xl font-bold text-white/5 absolute -top-10 left-4 md:left-1/2 select-none">
                        {step.num}
                    </span>
                    <h3 className="text-2xl font-bold mb-2 md:text-center">{step.title}</h3>
                    <p className="text-gray-400 text-sm md:text-center">{step.desc}</p>
                </motion.div>
            ))}
        </div>

        {/* Color Grading Slider */}
        <div className="relative w-full max-w-5xl mx-auto aspect-video rounded-xl overflow-hidden border border-white/20 shadow-2xl">
            <h3 className="absolute top-6 left-6 z-30 text-xs font-mono bg-black/50 backdrop-blur px-3 py-1 rounded">
                COLOR GRADING • BEFORE / AFTER
            </h3>
            
            <div 
                ref={sliderRef}
                className="relative w-full h-full cursor-col-resize select-none touch-none"
                onMouseMove={handleMouseMove}
                onTouchMove={handleMouseMove}
            >
                {/* Ungraded Image (Base) */}
                <img 
                    src="https://images.unsplash.com/photo-1518135114454-e72d24d45d3e?q=80&w=2000&auto=format&fit=crop&saturation=-80" 
                    className="absolute inset-0 w-full h-full object-cover filter sepia-[0.3] contrast-75 brightness-90 grayscale-[0.5]"
                    alt="Raw Footage" 
                    draggable={false}
                />
                <div className="absolute bottom-6 left-6 text-white/70 font-mono text-sm uppercase tracking-widest z-10">LOG / RAW</div>

                {/* Graded Image (Overlay) */}
                <div 
                    className="absolute inset-0 w-full h-full overflow-hidden"
                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                    <img 
                        src="https://images.unsplash.com/photo-1518135114454-e72d24d45d3e?q=80&w=2000&auto=format&fit=crop" 
                        className="absolute inset-0 w-full h-full object-cover contrast-125 saturate-110"
                        alt="Graded Footage" 
                        draggable={false}
                    />
                    <div className="absolute bottom-6 right-6 text-cinematic-gold font-mono text-sm uppercase tracking-widest z-10 w-full text-right pr-12">FINAL GRADE</div>
                </div>

                {/* Slider Handle */}
                <div 
                    className="absolute top-0 bottom-0 w-[2px] bg-white z-20"
                    style={{ left: `${sliderPosition}%` }}
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <div className="flex gap-[2px]">
                            <div className="w-[1px] h-3 bg-black"></div>
                            <div className="w-[1px] h-3 bg-black"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};