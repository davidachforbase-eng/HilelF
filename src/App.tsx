import React, { useState, useEffect } from 'react';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Showreel } from './components/Showreel';
import { TechStack } from './components/TechStack';
import { About } from './components/About';
import { Process } from './components/Process';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Socials } from './components/Socials';
import { Footer } from './components/Footer';
import { GalleryOverlay } from './components/GalleryOverlay';
import { ProcessModal } from './components/ProcessModal';

function App() {
  const [loading, setLoading] = useState(true);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isProcessOpen, setIsProcessOpen] = useState(false);

  useEffect(() => {
    if (loading || isGalleryOpen || isProcessOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [loading, isGalleryOpen, isProcessOpen]);

  return (
    <>
        <CustomCursor />
        
        {loading && <Preloader onComplete={() => setLoading(false)} />}
        
        {/* Overlays */}
        <GalleryOverlay isOpen={isGalleryOpen} onClose={() => setIsGalleryOpen(false)} />
        <ProcessModal isOpen={isProcessOpen} onClose={() => setIsProcessOpen(false)} />

        <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
            <Navigation 
                onOpenGallery={() => setIsGalleryOpen(true)} 
                onOpenProcess={() => setIsProcessOpen(true)}
            />
            
            <main className="relative z-10 bg-genz-black mb-[100vh] shadow-[0_50px_100px_rgba(0,0,0,1)]">
                <Hero />
                <TechStack />
                <Showreel onOpenGallery={() => setIsGalleryOpen(true)} />
                <Process />
                <Services />
                <Pricing />
                <Testimonials />
                <About />
                <FAQ />
                <Contact />
                <Socials />
            </main>

            <Footer />
        </div>
    </>
  );
}

export default App;