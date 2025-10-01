import React, { useEffect, useState, useRef } from "react";
import { Corousal } from "./Corousal";
import styles from "./Hero.module.css";

export default function Hero({
  tagLine = "Learn smarter with",
  name = "THE SAURON",
  subtitle = "Digital Creator, Coding tips, tech breakdowns and gadget insights",
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  const words = ["Learner", "Dreamer", "Creator", "Tech nerd", "Thinker"];

  useEffect(() => {
    // Set visible after component mounts
    setIsVisible(true);

    // Word rotation animation
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => {
      clearInterval(wordInterval);
    };
  }, [words.length]);

  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      ref={heroRef}
    >
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-black z-0"></div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 left-1/4 w-60 h-60 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-20">
        <div className="flex flex-col items-center">
          {/* Animated title word rotator */}
          {/* Dynamic Word Rotator */}
          <div
            className={`mb-12 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center px-5 py-3 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10">
              <p className="text-white text-lg font-medium mr-3">
                So, Who Really Am I?&nbsp;
              </p>
              <div className="h-8 overflow-hidden relative">
                <div
                  className="flex flex-col items-start transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateY(-${
                      (currentWordIndex * 100) / words.length
                    }%)`,
                  }}
                >
                  {words.map((word, index) => (
                    <span
                      key={index}
                      className="text-red-400 font-semibold text-lg py-1 h-8 flex items-center"
                    >
                      {word}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            {/* Tagline badge */}
            <div
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-base font-medium mb-8 bg-white/5 backdrop-blur border border-white/10 text-white transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
              Real builds. Real tests. Real talk.
            </div>

            {/* Main heading */}
            <h1
              className={`text-5xl md:text-5xl font-bold text-white mb-6 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {tagLine}
            </h1>

            {/* Highlighted name */}
            <div
              className={`my-6 text-5xl md:text-6xl font-extrabold transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <span className="bg-gradient-to-r from-red-500 via-rose-500 to-red-600 bg-clip-text text-transparent">
                {name}
              </span>
            </div>

            {/* Subtitle */}
            <div
              className={`mx-auto mt-10 max-w-2xl transition-all duration-1000 delay-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <p className="inline-block px-6 py-4 text-base text-neutral-300 bg-black/30 backdrop-blur rounded-xl border border-white/10 transition-all duration-300 hover:bg-white/5">
                {subtitle}
              </p>
            </div>

           
          </div>
        </div>
      </div>

      {/* Corousal section */}
      <div
        className={`flex justify-center w-full mt-6 mb-6 transition-all duration-1000 delay-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <Corousal  />
      </div>

       {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <a
                href="#services-section"
                className="px-6 py-3 bg-red-600 text-white rounded-lg font-medium transition-all duration-300 hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/20"
              >
                Explore Services
              </a>
              <a
                href="#about-section"
                className="px-6 py-3 bg-transparent text-white border border-white/20 rounded-lg font-medium transition-all duration-300 hover:bg-white/10"
              >
                Get in Touch
              </a>
            </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1200 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
