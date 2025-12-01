import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

export const SoundControl: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio object
  useEffect(() => {
    // Placeholder ambient noise link (White noise/Drone)
    audioRef.current = new Audio("https://cdn.pixabay.com/download/audio/2022/03/24/audio_07833a647d.mp3?filename=space-ambience-5606.mp3"); 
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleSound = () => {
    if (!audioRef.current) return;

    if (isMuted) {
      audioRef.current.play().catch(e => console.log("Audio autoplay blocked", e));
      setIsMuted(false);
    } else {
      audioRef.current.pause();
      setIsMuted(true);
    }
  };

  return (
    <button 
      onClick={toggleSound}
      className="relative z-50 p-2 text-white/50 hover:text-white transition-colors"
    >
      <motion.div
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        className="flex items-center gap-2"
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} className="text-cinematic-gold" />}
        <span className="text-xs font-mono uppercase tracking-widest hidden md:block">
            {isMuted ? "Sound Off" : "Sound On"}
        </span>
      </motion.div>
    </button>
  );
};