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

function App() {
  const [loading, setLoading] = useState(true);

  // Lock body scroll during loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [loading]);

  return (
    <>
        <CustomCursor />
        <ScrollProgress />
        {loading && <Preloader onComplete={() => setLoading(false)} />}
        
        <main className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
            <Navigation />
            <Hero />
            <Showreel />
            <About />
            <TechStack />
            <Services />
            <Pricing />
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