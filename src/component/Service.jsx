import React, { useEffect, useRef } from "react";

export const Services = () => {
  const animatedRefs = useRef([]);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = animatedRefs.current.findIndex(ref => ref === entry.target);
          if (entry.isIntersecting) {
            // Element enters viewport
            setTimeout(() => {
              entry.target.classList.add('scale-100', 'opacity-100');
              entry.target.classList.remove('scale-90', 'opacity-0', 'translate-y-10');
            }, index * 100); // 200ms delay between each element
          } else {
            // Element leaves viewport - reset animation
            entry.target.classList.remove('scale-100', 'opacity-100');
            entry.target.classList.add('scale-90', 'opacity-0', 'translate-y-10');
          }
        });
      },
      { 
        threshold: 0.2, // Increased threshold for better trigger points
        rootMargin: '-50px 0px -50px 0px' // Adjusted margins for smoother triggering
      }
    );
    animatedRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div id="services-section" className="text-white pt-20 pb-40 p-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1
          ref={el => (animatedRefs.current[0] = el)}
          className="transition-all duration-1000 ease-out will-change-transform scale-90 opacity-0 translate-y-10 md:text-4xl text-3xl font-bold text-center mb-6 text-red-500"
        >
          What I Can Do For You
        </h1>
        <p
          ref={el => (animatedRefs.current[1] = el)}
          className="transition-all duration-1000 ease-out will-change-transform scale-90 opacity-0 translate-y-10 md:text-xl text-center mb-12 text-white md:pb-5"
        >
          I offer comprehensive digital solutions to help your business thrive in the digital landscape.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-24 md:gap-y-12">
          {/* UI/UX Design Section */}
          {/* <div
            ref={el => (animatedRefs.current[2] = el)}
            className="transition-all duration-1000 ease-out will-change-transform scale-90 opacity-0 translate-y-10 bg-black p-6 rounded-lg hover:scale-105 hover:shadow-xl"
          >
            <h2 className="text-2xl font-bold mb-4 text-red-500">UI/UX Design</h2>
            <p className="text-white mb-4">
              Creating intuitive and beautiful user experiences that convert visitors into customers.
            </p>
            <ul className="list-disc list-inside text-white">
              <li>User-centered design approach</li>
              <li>Wireframing & prototyping</li>
              <li>Design systems & style guides</li>
              <li>Usability testing & optimization</li>
            </ul>
            <div className="mt-8">
              <a
                className="hover:cursor-pointer"
                target="__blank"
                href="https://topmate.io/the_sauron/1693712?utm_source=public_profile&utm_campaign=the_sauron"
              >
                <button className="hover:cursor-pointer w-full flex justify-center gap-2 gap-x-4 items-center shadow-xl text-lg bg-red-700 hover:border border-red-300 backdrop-blur-md lg:font-semibold isolation-auto before:absolute before:transition-all before:duration-700 before:-left-full before:hover:left-0 before:rounded-full before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-1 overflow-hidden rounded-full group">
                  Book a Call
                </button>
              </a>
            </div>
          </div> */}
          {/* Web Development Section */}
          <div
            ref={el => (animatedRefs.current[3] = el)}
            className="transition-all duration-1000 ease-out will-change-transform scale-90 opacity-0 translate-y-10 bg-black p-6 rounded-lg hover:scale-105 hover:shadow-xl"
          >
            <h2 className="text-2xl font-bold mb-4 text-red-500">Web Development</h2>
            <p className="text-white mb-4">
              Building fast, scalable, and maintainable web applications using modern technologies.
            </p>
            <ul className="list-disc list-inside text-white">
              <li>User-centered design approach</li>
              <li>FullStack development</li>
              <li>Portfolio Website</li>
              <li>Website for your Business</li>
              <li>Fully animated Webistes</li>
            </ul>
            <div className="mt-8">
              <a
                className="hover:cursor-pointer"
                target="__blank"
                href="https://topmate.io/the_sauron/1693712?utm_source=public_profile&utm_campaign=the_sauron"
              >
                <button className="hover:cursor-pointer w-full flex justify-center gap-2 gap-x-4 items-center shadow-xl text-lg bg-red-700 hover:border border-red-300 backdrop-blur-md lg:font-semibold isolation-auto before:absolute before:transition-all before:duration-700 before:-left-full before:hover:left-0 before:rounded-full before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-1 overflow-hidden rounded-full group">
                  Book a Free Call
                </button>
              </a>
            </div>
          </div>
          {/* Gadget Buying Suggestions Section */}
          <div
            ref={el => (animatedRefs.current[4] = el)}
            className="transition-all duration-1000 ease-out will-change-transform scale-90 opacity-0 translate-y-10 bg-black p-6 rounded-lg hover:scale-105 hover:shadow-xl"
          >
            <h2 className="text-2xl font-bold mb-4 text-red-500">Gadget Buying Suggestions</h2>
            <p className="text-white mb-4">
              Get expert advice on buying mobile phones, laptops, headphones, mouse, and other electronic gadgets tailored to your needs and budget.
            </p>
            <ul className="list-disc list-inside text-white">
              <li>Personalized recommendations for mobiles and laptops</li>
              <li>Best headphones and audio gear for your use case</li>
              <li>Choosing the right mouse and accessories</li>
              <li>Suggestions for other electronic gadgets</li>
              <li>Latest tech trends and deals</li>
            </ul>
            <div className="mt-8">
              <a
                className="hover:cursor-pointer"
                target="__blank"
                href="https://topmate.io/the_sauron/1681422?utm_source=public_profile&utm_campaign=the_sauron"
              >
                <button className="hover:cursor-pointer w-full flex justify-center gap-2 gap-x-4 items-center shadow-xl text-lg bg-red-700 hover:border border-red-300 backdrop-blur-md lg:font-semibold isolation-auto before:absolute before:transition-all before:duration-700 before:-left-full before:hover:left-0 before:rounded-full before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-1 overflow-hidden rounded-full group">
                  Book a Free Call
                </button>
              </a>
            </div>
          </div>
          {/* Coding Tuition & Course Advice Section */}
          <div
            ref={el => (animatedRefs.current[6] = el)}
            className="transition-all duration-1000 ease-out will-change-transform scale-90 opacity-0 translate-y-10 bg-black p-6 rounded-lg hover:scale-105 hover:shadow-xl"
          >
            <h2 className="text-2xl font-bold mb-4 text-red-500">Coding Tuition & Course Advice</h2>
            <p className="text-white mb-4">
              Get guidance on learning to code, choosing the right courses, and finding the best instructors for your goals.
            </p>
            <ul className="list-disc list-inside text-white">
              <li>1-on-1 coding tuition for beginners and advanced learners</li>
              <li>Advice on which programming courses to take</li>
              <li>Recommendations for trusted instructors and platforms</li>
              <li>Roadmaps for web, mobile, and data science</li>
              <li>Interview and career guidance</li>
            </ul>
            <div className="mt-8">
              <a
                className="hover:cursor-pointer"
                target="__blank"
                href="https://topmate.io/the_sauron/1693712?utm_source=public_profile&utm_campaign=the_sauron"
              >
                <button className="hover:cursor-pointer w-full flex justify-center gap-2 gap-x-4 items-center shadow-xl text-lg bg-red-700 hover:border border-red-300 backdrop-blur-md lg:font-semibold isolation-auto before:absolute before:transition-all before:duration-700 before:-left-full before:hover:left-0 before:rounded-full before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-1 overflow-hidden rounded-full group">
                  Book a Free Call
                </button>
              </a>
            </div>
          </div>
          {/* Video Editing Section */}
          <div
            ref={el => (animatedRefs.current[5] = el)}
            className="transition-all duration-1000 ease-out will-change-transform scale-90 opacity-0 translate-y-10 bg-black p-6 rounded-lg hover:scale-105 hover:shadow-xl"
          >
            <h2 className="text-2xl font-bold mb-4 text-red-500">Video Editing</h2>
            <p className="text-white mb-4">
              Professional video editing services to bring your content to life with stunning visuals and seamless transitions.
            </p>
            <ul className="list-disc list-inside text-white">
              <li>Content Creator Video Editing</li>
              <li>YouTube Video Optimization</li>
              <li>Motion Graphics & Effects</li>
              <li>Color Grading & Correction</li>
              <li>Promotional Videos & Ads</li>
            </ul>
            <div className="mt-8">
              <a
                className="hover:cursor-pointer"
                target="__blank"
                href="https://topmate.io/the_sauron/1693712?utm_source=public_profile&utm_campaign=the_sauron"
              >
                <button className="hover:cursor-pointer w-full flex justify-center gap-2 gap-x-4 items-center shadow-xl text-lg bg-red-700 hover:border border-red-300 backdrop-blur-md lg:font-semibold isolation-auto before:absolute before:transition-all before:duration-700 before:-left-full before:hover:left-0 before:rounded-full before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-1 overflow-hidden rounded-full group">
                  Book a Free Call
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
