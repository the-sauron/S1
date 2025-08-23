import React from 'react';

export const Services = () => {
  return (
    <div className="bg-black text-white p-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6 text-red-500">
          What I Can Do For You
        </h1>
        
        <p className="text-xl text-center mb-12 text-white">
          I offer comprehensive digital solutions to help your business thrive in the digital landscape.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* UI/UX Design Section */}
          <div className="bg-gray-900 p-6 rounded-lg">
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
          </div>

          {/* Brand Identity Section
          <div className="bg-gray-900 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-red-500">Brand Identity</h2>
            <p className="text-white">
              Crafting memorable brand identities that resonate with your target audience.
            </p>
          </div> */}

          {/* Web Development Section */}
          <div className="bg-gray-900 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-red-500">Web Development</h2>
            <p className="text-white mb-4">
              Building fast, scalable, and maintainable web applications using modern technologies.
            </p>
            <ul className="list-disc list-inside text-white">
              <li>React & Next.js development</li>
              <li>Responsive design implementation</li>
              <li>Performance optimization</li>
              <li>SEO-friendly development</li>
            </ul>
          </div>

          {/* Mobile Development Section
          <div className="bg-gray-900 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-red-500">Mobile Development</h2>
            <p className="text-white mb-4">
              Developing cross-platform mobile apps that provide native-like experiences.
            </p>
            <ul className="list-disc list-inside text-white">
              <li>React Native development</li>
              <li>iOS & Android compatibility</li>
              <li>App store optimization</li>
              <li>Push notifications & analytics</li>
            </ul>
          </div> */}

          {/* Performance Optimization Section
          <div className="bg-gray-900 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-red-500">Performance Optimization</h2>
            <p className="text-white">
              Improving website speed and performance for better user experience and SEO.
            </p>
          </div> */}

          {/* Consulting Section
          <div className="bg-gray-900 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-red-500">Consulting</h2>
            <p className="text-white">
              Strategic guidance on digital transformation and technology decisions.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

