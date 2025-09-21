import React, { useEffect, useRef } from 'react'
import { Header } from './component/Header'
import Hero from './component/Hero'
import { Services } from './component/Service'
import { Footer } from './component/Footer'
import About from './component/About'

const App = () => {
  const appRef = useRef(null);

  useEffect(() => {
    // Remove all parallax-related code and just keep basic scroll handling if needed
    const handleScroll = () => {
      // You can add any scroll-based logic here if needed
      // For example, adding/removing classes based on scroll position
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={appRef} className="relative overflow-hidden">
      {/* Clean background without parallax elements */}
      <div className="fixed inset-0 -z-50 pointer-events-none">
        {/* Subtle background elements without movement */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-2/3 left-1/5 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/5 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Gradient overlay for depth */}
      <div className="fixed inset-0 -z-40 pointer-events-none 
        bg-gradient-to-b from-neutral-900/30 via-transparent to-black/40"></div>

      {/* Content sections without parallax */}
      <Header/>
      <Hero />
      <Services />
      <About/>
      <Footer/>
    </div>
  )
}

export default App