import React from 'react';

export default function About() {
  return (
    <section id="about-section" className="py-20  text-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-red-500 mb-4">About Me</h2>
        <p className="text-lg text-gray-200 leading-relaxed mb-6">
          Im The Sauron — a practical digital creator focused on building real products, sharing
          clear technical breakdowns, and helping people choose the right tools. I combine hands-on
          development experience with design sensibility to deliver polished, reliable results.
        </p>

        <h3 className="text-2xl font-bold text-white mb-3">What I build</h3>
        <p className="text-gray-300 mb-6">
          From UI/UX design to full-stack web applications, I deliver end-to-end solutions:
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
          <li>
            <strong>UI/UX Design:</strong> user-centered interfaces, wireframes, prototypes, and
            design systems that scale.
          </li>
          <li>
            <strong>Web Development:</strong> responsive, performant websites and web apps using modern
            stacks — portfolio sites, business sites, and production-grade applications.
          </li>
          <li>
            <strong>Video Editing:</strong> content optimization, motion graphics, color grading and
            promotional videos for creators and businesses.
          </li>
          <li>
            <strong>Gadget Guidance:</strong> curated recommendations for smartphones, laptops,
            headphones and other gear so you buy what fits your needs and budget.
          </li>
          <li>
            <strong>Coding Tuition & Guidance:</strong> 1-on-1 coaching, course recommendations and
            roadmaps for learners at any level.
          </li>
        </ul>

        <h3 className="text-2xl font-bold text-white mb-3">How I work</h3>
        <p className="text-gray-300 mb-6">
          I emphasize clarity and measurable outcomes: rapid prototyping, regular user feedback, and
          iterative improvements. Every project begins with an audit of goals and constraints, then
          moves through practical design and engineering steps until the product is ready for real
          users.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#services-section"
            className="inline-block rounded-md bg-red-600 px-5 py-3 text-white font-semibold hover:bg-red-500 transition"
          >
            See Services
          </a>
          <a
            href="#hero-section"
            className="inline-block rounded-md border border-white/10 px-5 py-3 text-gray-200 hover:text-white transition"
          >
            Back to Top
          </a>
        </div>

        <p className="mt-8 text-sm text-gray-500">If you want to work together or have a question, use the contact links in the footer.</p>
      </div>
    </section>
  );
}
