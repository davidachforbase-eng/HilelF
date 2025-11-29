import React, { useState, useEffect } from 'react';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { Hero } from './components/Hero';
import { Showreel } from './components/Showreel';
import { Process } from './components/Process';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
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
        {loading && <Preloader onComplete={() => setLoading(false)} />}
        
        <main className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
            <Hero />
            <Showreel />
            <Process />
            <Services />
            <Contact />
            <Footer />
        </main>
    </>
  );
}

export default App;