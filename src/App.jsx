import React, { useEffect, useRef } from 'react'
import { Header } from './component/Header'
import Hero from './component/Hero'
import { Services } from './component/Service'
import { Footer } from './component/Footer'
import About from './component/About'

const App = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
  // Strong parallax effect
  const handleScroll = () => {
    if (parallaxRef.current) {
      const scrolled = window.pageYOffset;
      const parallaxElements = parallaxRef.current.querySelectorAll('.parallax-element');
      
      parallaxElements.forEach((element, index) => {
        // Much stronger speed variation
        const speed = 0.1 + (index * 0.05);
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px) scale(${1 + speed * 0.1})`;
      });

      // Strong content parallax
      const contentSections = parallaxRef.current.querySelectorAll('.content-section');
      contentSections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.pageYOffset;
        const scrollPercent = (scrolled - sectionTop + window.innerHeight) / (window.innerHeight + rect.height);
        
        if (scrollPercent > 0 && scrollPercent < 1) {
          const translateY = scrollPercent * 50; // Much more movement
          const scale = 1 - (scrollPercent * 0.1);
          section.style.transform = `translateY(${translateY}px) scale(${scale})`;
        }
      });
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  return (
    <div ref={parallaxRef} className="relative overflow-hidden">
      {/* Enhanced parallax background elements */}
      <div className="parallax-element fixed inset-0 -z-50 pointer-events-none transition-transform duration-100 ease-out">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>
      <div className="parallax-element fixed inset-0 -z-50 pointer-events-none transition-transform duration-100 ease-out">
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow delay-2000"></div>
      </div>
      <div className="parallax-element fixed inset-0 -z-50 pointer-events-none transition-transform duration-100 ease-out">
        <div className="absolute top-2/3 left-1/5 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow delay-3000"></div>
      </div>
      <div className="parallax-element fixed inset-0 -z-50 pointer-events-none transition-transform duration-100 ease-out">
        <div className="absolute top-1/3 right-1/5 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl animate-pulse-slow delay-4000"></div>
      </div>

      {/* Animated floating particles with more parallax */}
      <div className="parallax-element fixed inset-0 -z-40 pointer-events-none transition-transform duration-100 ease-out">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 20 + 8}px`,
              height: `${Math.random() * 20 + 8}px`,
              background: `radial-gradient(circle, rgba(251, 113, 133, ${0.1 + Math.random() * 0.1}) 0%, transparent 70%)`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 15}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient overlay for depth */}
      <div className="fixed inset-0 -z-30 pointer-events-none 
        bg-gradient-to-b from-neutral-900/50 via-transparent to-black/50"></div>

      {/* Content with subtle parallax */}
      <div className="content-section mb-10">
        <Header/>
      </div>
      <div className="content-section">
        <Hero />
      </div>
      <div className="content-section">
        <Services />
      </div>
      <div className="content-section">
        <About/>
      </div>
      <div className="content-section">
        <Footer/>
      </div>
    </div>
  )
}

export default App