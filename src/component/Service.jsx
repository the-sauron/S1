import { CodeXml, Keyboard, LaptopMinimal } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

export const Services = () => {
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef(null);
  const parallaxRef = useRef(null);

  const services = [
    {
      title: "Web Development",
      icon: <LaptopMinimal />,
      shortDesc: "Modern, responsive websites that convert visitors to customers",
      fullDesc: "Building fast, scalable web applications with cutting-edge technologies tailored to your business needs.",
      features: ["User-centered design", "FullStack development", "Business websites", "Animated experiences"],
      link: "https://topmate.io/the_sauron/1693712",
      color: "from-red-500 to-rose-500"
    },
    {
      title: "Gadget Advice",
      icon: <Keyboard />,
      shortDesc: "Expert gadget recommendations tailored to your needs",
      fullDesc: "Personalized advice on phones, laptops and tech accessories that fit your budget and use case.",
      features: ["Mobile & laptop guidance", "Audio gear selection", "Accessory recommendations", "Tech trend insights"],
      link: "https://topmate.io/the_sauron/1681422",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Coding Guidance",
      icon: <CodeXml />,
      shortDesc: "Personalized learning paths to master programming",
      fullDesc: "1-on-1 mentorship and course recommendations to accelerate your coding journey and career growth.",
      features: ["Personalized tuition", "Course selection", "Career roadmaps", "Interview preparation"],
      link: "https://topmate.io/the_sauron/1693712",
      color: "from-purple-500 to-pink-500"
    }
  ];

  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      const elements = containerRef.current.querySelectorAll('.service-item, .section-title');
      elements.forEach(el => observer.observe(el));
    }

    // Parallax effect
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        const parallaxElements = parallaxRef.current.querySelectorAll('.parallax-element');
        
        parallaxElements.forEach((element, index) => {
          const speed = 0.05 + (index * 0.05);
          const yPos = -(scrolled * speed);
          element.style.transform = `translateY(${yPos}px)`;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="services-section" className="relative py-20 px-4 min-h-screen bg-gradient-to-b from-neutral-900 to-black overflow-hidden" ref={parallaxRef}>
      {/* Parallax background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="parallax-element absolute -top-20 -left-20 w-80 h-80 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="parallax-element absolute -bottom-20 -right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" style={{transition: 'transform 0.1s ease-out'}}></div>
        <div className="parallax-element absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" style={{transition: 'transform 0.1s ease-out'}}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10" ref={containerRef}>
        {/* Section Header */}
        <div className="text-center mb-16 section-title opacity-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent">
            Services
          </h1>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            Comprehensive digital solutions to help you thrive
          </p>
        </div>

        {/* Services Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 flex  rounded-full font-medium transition-all duration-300 ${
                activeTab === index
                  ? `bg-gradient-to-r ${service.color} text-white shadow-lg`
                  : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
              }`}
            >
              <span className="mr-2">{service.icon}</span>
              {service.title}
            </button>
          ))}
        </div>

        {/* Active Service Display - Fixed alignment */}
        <div className="bg-neutral-900/70 backdrop-blur-md rounded-2xl p-8 border border-neutral-800 shadow-xl mb-16 service-item opacity-0">
          <div className="flex flex-col lg:flex-row gap-8 items-stretch"> {/* Changed to items-stretch */}
            {/* Left Content - Service Details */}
            <div className="flex-1 flex flex-col">
              <div className={`text-6xl mb-6 bg-gradient-to-r ${services[activeTab].color} bg-clip-text text-transparent`}>
                {services[activeTab].icon}
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">{services[activeTab].title}</h2>
              <p className="text-xl text-neutral-300 mb-6 flex-1">{services[activeTab].fullDesc}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {services[activeTab].features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${services[activeTab].color} mr-3`}></div>
                    <span className="text-neutral-400">{feature}</span>
                  </div>
                ))}
              </div>
              
              <a
                href={services[activeTab].link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center px-6 py-3 rounded-xl font-medium text-white bg-gradient-to-r ${services[activeTab].color} hover:shadow-lg transition-all duration-300 mt-auto`} 
              >
                Book a Free Call
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
            
            {/* Right Content - What You'll Get */}
            <div className="flex-1 bg-neutral-800/50 rounded-xl p-6 border border-neutral-700 flex flex-col">
              <h3 className="text-xl font-semibold text-white mb-4">What You'll Get</h3>
              <ul className="space-y-3 flex-1">
                <li className="flex items-start">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center bg-gradient-to-r ${services[activeTab].color} text-white text-xs mr-3 mt-1 flex-shrink-0`}>✓</span>
                  <span className="text-neutral-300">Personalized consultation to understand your needs</span>
                </li>
                <li className="flex items-start">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center bg-gradient-to-r ${services[activeTab].color} text-white text-xs mr-3 mt-1 flex-shrink-0`}>✓</span>
                  <span className="text-neutral-300">Tailored solutions that match your goals</span>
                </li>
                <li className="flex items-start">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center bg-gradient-to-r ${services[activeTab].color} text-white text-xs mr-3 mt-1 flex-shrink-0`}>✓</span>
                  <span className="text-neutral-300">Ongoing support and guidance</span>
                </li>
                <li className="flex items-start">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center bg-gradient-to-r ${services[activeTab].color} text-white text-xs mr-3 mt-1 flex-shrink-0`}>✓</span>
                  <span className="text-neutral-300">Results-driven approach</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* All Services Grid */}
        <h2 className="text-3xl font-bold text-center text-white mb-8 section-title opacity-0">All Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div key={index} className="service-item opacity-0 bg-neutral-900/70 backdrop-blur-md rounded-2xl p-6 border border-neutral-800 hover:border-neutral-600 transition-all duration-300">
              <div className={`text-4xl mb-4 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-neutral-400 mb-4">{service.shortDesc}</p>
              <a
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-white hover:underline"
              >
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0% { opacity: 0.2; }
          100% { opacity: 0.6; }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease forwards;
        }
        .service-item:nth-child(1) { animation-delay: 0.1s; }
        .service-item:nth-child(2) { animation-delay: 0.2s; }
        .service-item:nth-child(3) { animation-delay: 0.3s; }
        .service-item:nth-child(4) { animation-delay: 0.4s; }
        .section-title { animation-delay: 0.1s; }
      `}</style>
    </div>
  );
};