import { ArrowRight } from "lucide-react";
import React from "react";

export const Services = () => {
  return (
    <div id="services-section" className="text-white pt-20 p-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6 text-red-500">
          What I Can Do For You
        </h1>

        <p className="text-xl text-center mb-12 text-white">
          I offer comprehensive digital solutions to help your business thrive
          in the digital landscape.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* UI/UX Design Section */}
          <div className="bg-black p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-red-500">
              UI/UX Design
            </h2>
            <p className="text-white mb-4">
              Creating intuitive and beautiful user experiences that convert
              visitors into customers.
            </p>
            <ul className="list-disc list-inside text-white">
              <li>User-centered design approach</li>
              <li>Wireframing & prototyping</li>
              <li>Design systems & style guides</li>
              <li>Usability testing & optimization</li>
            </ul>
            {/* book Call button UI/UX*/}
            <div className=" mt-8">
              <a
                className="hover:cursor-pointer"
                target="__blank"
                href="https://topmate.io/the_sauron/1693712?utm_source=public_profile&utm_campaign=the_sauron"
              >
                <button
                  class="hover:cursor-pointer w-full flex justify-center gap-2 gap-x-4 items-center  shadow-xl text-lg bg-red-700 hover:border border-red-300 backdrop-blur-md lg:font-semibold isolation-auto before:absolute  before:transition-all before:duration-700  before:-left-full before:hover:left-0 before:rounded-full before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-1 overflow-hidden rounded-full group"
                >
                  Book a Call
                  <svg
                    class="w-8 h-8 gap-x-4 justify-end group-hover:rotate-90 bg-red-300 text-gray-50 ease-linear duration-300 rounded-full group-hover:border-none p-2 rotate-45"
                    viewBox="0 0 16 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                      class="fill-gray-800 group-hover:fill-gray-800"
                    ></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>

          {/* Web Development Section */}
          <div className="bg-black p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-red-500">
              Web Development
            </h2>
            <p className="text-white mb-4">
              Building fast, scalable, and maintainable web applications using
              modern technologies.
            </p>
            <ul className="list-disc list-inside text-white">
              <li>FullStack development</li>
              <li>Responsive design implementation</li>
              <li>Performance optimization</li>
              <li>SEO-friendly development</li>
            </ul>
            {/* book Call button Web Dev*/}
            <div className=" mt-8">
              <a
                className="hover:cursor-pointer"
                target="__blank"
                href="https://topmate.io/the_sauron/1693712?utm_source=public_profile&utm_campaign=the_sauron"
              >
                <button
                  class="hover:cursor-pointer w-full flex justify-center gap-2 gap-x-4 items-center  shadow-xl text-lg bg-red-700 hover:border border-red-300 backdrop-blur-md lg:font-semibold isolation-auto before:absolute  before:transition-all before:duration-700  before:-left-full before:hover:left-0 before:rounded-full before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-1 overflow-hidden rounded-full group"
                >
                  Book a Free Call
                  <svg
                    class="w-8 h-8 gap-x-4 justify-end group-hover:rotate-90 bg-red-300 text-gray-50 ease-linear duration-300 rounded-full group-hover:border-none p-2 rotate-45"
                    viewBox="0 0 16 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                      class="fill-gray-800 group-hover:fill-gray-800"
                    ></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>

          {/* Gadget Buying Suggestions Section */}
          <div className="bg-black p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-red-500">
              Gadget Buying Suggestions
            </h2>
            <p className="text-white mb-4">
              Get expert advice on buying mobile phones, laptops, headphones,
              mouse, and other electronic gadgets tailored to your needs and
              budget.
            </p>
            <ul className="list-disc list-inside text-white">
              <li>Personalized recommendations for mobiles and laptops</li>
              <li>Best headphones and audio gear for your use case</li>
              <li>Choosing the right mouse and accessories</li>
              <li>Suggestions for other electronic gadgets</li>
              <li>Latest tech trends and deals</li>
            </ul>
            {/* book Call button Gadgets */}
            <div className=" mt-8">
              <a
                className="hover:cursor-pointer"
                target="__blank"
                href="https://topmate.io/the_sauron/1681422?utm_source=public_profile&utm_campaign=the_sauron"
              >
                <button
                  class="hover:cursor-pointer w-full flex justify-center gap-2 gap-x-4 items-center  shadow-xl text-lg bg-red-700 hover:border border-red-300 backdrop-blur-md lg:font-semibold isolation-auto before:absolute  before:transition-all before:duration-700  before:-left-full before:hover:left-0 before:rounded-full before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-1 overflow-hidden rounded-full group"
                >
                  Book a Free Call
                  <svg
                    class="w-8 h-8 gap-x-4 justify-end group-hover:rotate-90 bg-red-300 text-gray-50 ease-linear duration-300 rounded-full group-hover:border-none p-2 rotate-45"
                    viewBox="0 0 16 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                      class="fill-gray-800 group-hover:fill-gray-800"
                    ></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>

          {/* Coding Tuition & Course Advice Section */}
          <div className="bg-black p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-red-500">
              Coding Tuition & Course Advice
            </h2>
            <p className="text-white mb-4">
              Get guidance on learning to code, choosing the right courses, and
              finding the best instructors for your goals.
            </p>
            <ul className="list-disc list-inside text-white">
              <li>1-on-1 coding tuition for beginners and advanced learners</li>
              <li>Advice on which programming courses to take</li>
              <li>Recommendations for trusted instructors and platforms</li>
              <li>Roadmaps for web, mobile, and data science</li>
              <li>Interview and career guidance</li>
            </ul>

            {/* book Call button  Tution*/}
            <div className=" mt-8">
              <a
                className="hover:cursor-pointer"
                target="__blank"
                href="https://topmate.io/the_sauron/1693712?utm_source=public_profile&utm_campaign=the_sauron"
              >
                <button
                  class="hover:cursor-pointer w-full flex justify-center gap-2 gap-x-4 items-center  shadow-xl text-lg bg-red-700 hover:border border-red-300 backdrop-blur-md lg:font-semibold isolation-auto before:absolute  before:transition-all before:duration-700  before:-left-full before:hover:left-0 before:rounded-full before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-1 overflow-hidden rounded-full group"
                >
                  Book a Free Call
                  <svg
                    class="w-8 h-8 gap-x-4 justify-end group-hover:rotate-90 bg-red-300 text-gray-50 ease-linear duration-300 rounded-full group-hover:border-none p-2 rotate-45"
                    viewBox="0 0 16 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                      class="fill-gray-800 group-hover:fill-gray-800"
                    ></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
