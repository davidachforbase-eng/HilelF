import React, { useState, useEffect } from 'react';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';
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
import { CtaBreak } from './components/CtaBreak';
import { Contact } from './components/Contact';
import { Socials } from './components/Socials';
import { Footer } from './components/Footer';
import { GalleryOverlay } from './components/GalleryOverlay';
import { ProcessModal } from './components/ProcessModal';

function App() {
  const [loading, setLoading] = useState(true);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isProcessOpen, setIsProcessOpen] = useState(false);

  // Lock body scroll during loading or when modals are open
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
        <ScrollProgress />
        
        {loading && <Preloader onComplete={() => setLoading(false)} />}
        
        {/* Overlays */}
        <GalleryOverlay isOpen={isGalleryOpen} onClose={() => setIsGalleryOpen(false)} />
        <ProcessModal isOpen={isProcessOpen} onClose={() => setIsProcessOpen(false)} />

        <main className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
            <Navigation 
                onOpenGallery={() => setIsGalleryOpen(true)} 
                onOpenProcess={() => setIsProcessOpen(true)}
            />
            <Hero />
            <Showreel onOpenGallery={() => setIsGalleryOpen(true)} />
            <About />
            <TechStack />
            <Services />
            <Pricing />
            {/* Kept on-page process as a summary, modal is deep dive */}
            <Process />
            <Testimonials />
            <FAQ />
            <CtaBreak />
            <Contact />
            <Socials />
            <Footer />
        </main>
    </>
  );
}

export default App;