import React from 'react';

export const GrainOverlay: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[50] overflow-hidden">
        {/* Grain Noise Layer */}
        <div className="absolute inset-[-100%] w-[300%] h-[300%] animate-grain opacity-[0.05] bg-noise"></div>
        
        {/* Light Leaks / Blobs */}
        <div className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] bg-cinematic-gold/10 rounded-full blur-[150px] mix-blend-screen opacity-30 animate-pulse"></div>
        <div className="absolute top-[40%] -right-[10%] w-[40vw] h-[40vw] bg-cinematic-red/10 rounded-full blur-[150px] mix-blend-screen opacity-20"></div>
    </div>
  );
};