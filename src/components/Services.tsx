import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES, CLIENTS } from '../constants';
import { Layout, Scissors, Palette, Headphones } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Layout: <Layout size={32} />,
  Scissors: <Scissors size={32} />,
  Palette: <Palette size={32} />,
  Headphones: <Headphones size={32} />,
};

const videoMap: Record<number, string> = {
    1: "https://videos.pexels.com/video-files/3205903/3205903-uhd_2560_1440_25fps.mp4",
    2: "https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4",
    3: "https://videos.pexels.com/video-files/852292/852292-hd_1920_1080_30fps.mp4",
    4: "https://videos.pexels.com/video-files/3756247/3756247-hd_1920_1080_25fps.mp4",
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-cinematic-dark relative">
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cinematic-red/10 blur-[120px] rounded-full mix-blend-screen" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-bold mb-16 text-center">SERVICES</h2>
        
        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-2xl relative overflow-hidden group h-80 flex flex-col justify-between cursor-pointer"
            >
              {/* Background Video on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700">
                  <video 
                    src={videoMap[service.id]} 
                    className="w-full h-full object-cover" 
                    autoPlay 
                    muted 
                    loop 
                    playsInline 
                  />
                  <div className="absolute inset-0 bg-black/50" />
              </div>

              <div className="relative z-10 text-cinematic-gold mb-4 group-hover:scale-110 transition-transform duration-300 origin-left">
                {iconMap[service.icon]}
              </div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cinematic-gold transition-colors">
                    {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Clients */}
        <div className="text-center">
            <h3 className="text-sm font-mono text-gray-500 tracking-widest uppercase mb-12">Trusted By</h3>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-80">
                {CLIENTS.map((client) => (
                    <motion.div 
                        key={client.id}
                        className="w-24 md:w-32 h-20 relative group"
                        whileHover={{ scale: 1.1 }}
                    >
                        <img 
                            src={client.logo} 
                            alt={client.name}
                            className="w-full h-full object-contain filter grayscale brightness-200 contrast-0 opacity-50 group-hover:filter-none group-hover:opacity-100 transition-all duration-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                        />
                    </motion.div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};