import React, { useState, useEffect } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import sauron from "../assets/the-sauron.png";

export const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setNavOpen(false);
  };

  const navItems = [
    { id: "services-section", label: "Services" },
    { id: "about-section", label: "About" },
    { id: "contact-section", label: "Contact" }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-white/5 backdrop-blur-sm border-b border-white/10" 
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div
            onClick={() => scrollToSection("hero-section")}
            className="flex items-center cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-full overflow-hidden mr-3 border border-white/20">
              <img
                className="w-full h-full object-cover"
                src={sauron}
                alt="The Sauron"
              />
            </div>
            <span className="text-white font-medium text-lg">the Sauron</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-neutral-400 hover:text-white transition-colors duration-200 text-lg"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-neutral-300 transition-colors duration-200"
            onClick={() => setNavOpen(!navOpen)}
            aria-label="Toggle navigation"
          >
            {navOpen ? <RiCloseLine size={20} /> : <RiMenu3Line size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
  className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-white/5 overflow-hidden transition-all duration-300 ${
    navOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
  }`}
>
  <div className="px-6 py-4 space-y-1">
    {navItems.map((item) => (
      <button
        key={item.id}
        onClick={() => scrollToSection(item.id)}
        className="block w-full text-left text-neutral-300 py-3 hover:text-white transition-colors duration-200 text-lg"
      >
        {item.label}
      </button>
    ))}
  </div>
</div>

      </div>
    </header>
  );
};