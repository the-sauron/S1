import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import sauron from "../assets/the-sauron.png";

export const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  // Scroll to Services section
  const scrollToServices = () => {
    const el = document.getElementById("services-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setNavOpen(false);
  };

  // Scroll to Hero section
  const scrollToHero = () => {
    const el = document.getElementById("hero-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setNavOpen(false);
  };

  return (
    <div className="sticky top-0 z-50 mb-4">
      <div className="md:mx-20 mx-[4px] pt-[10px] pb-4  backdrop-blur-lg flex items-center font-mono text-white text-xl font-semibold  ">
        {/* main Logo */}
        <div
          onClick={scrollToHero}
          className="hover:cursor-pointer flex items-center justify-center gap-x-[10px] font-bold"
        >
          <div className="hidden md:block  h-[28px] w-[28px] rounded-full ring-2 ring-red-500/40 bg-white/5 backdrop-blur-sm overflow-hidden">
            <img
              className="hidden md:block h-full w-full object-cover rounded-[40%]"
              src={sauron}
              alt=""
            />
          </div>
          <div className="tracking-wide">
            <span className="text-xl bg-gradient-to-r from-red-500 via-rose-500 to-red-500 bg-clip-text text-transparent">
              the Sauron
            </span>
          </div>
        </div>

        {/* Center navigation links for desktop */}
        <div className={`hidden md:flex flex-1 justify-center gap-x-[35px] `}>
          <div
            className="mb-0 rounded-md px-2 py-1 transition hover:text-white hover:cursor-pointer"
            onClick={scrollToServices}
          >
            Services
          </div>
          <div className="mb-0 rounded-md px-2 py-1 transition hover:text-white hover:cursor-pointer">
            Products
          </div>
        </div>

        {/* Toggle button for mobile */}
        <button
          className="md:hidden ml-auto block pr-4 text-xl text-rose-100 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/70 rounded-md"
          onClick={() => setNavOpen(!navOpen)}
          aria-label="Toggle navigation"
        >
          <RiMenu3Fill />
        </button>

        {/* About section for desktop */}
        <div className="hidden md:block ml-4 ">
          <span className="rounded-md px-2 py-1  transition hover:text-white hover:cursor-pointer">
            About
          </span>
        </div>

        {/* Navigation links for mobile */}
        <div
          className={`md:hidden ${
            navOpen ? "flex" : "hidden"
          } absolute left-0 top-14 z-10 w-full flex-col items-center justify-center gap-x-[10px] border-y border-white/10 bg-neutral-950/95 p-4 backdrop-blur-xl`}
        >
          <div
            onClick={scrollToServices}
            className="mb-2 w-full max-w-sm rounded-lg border border-red-500/20 bg-white/5 px-4 py-3 text-center text-rose-100/95 shadow-sm transition hover:border-red-500/40 hover:bg-rose-600/10"
          >
            Services
          </div>
          <div
            onClick={() => setNavOpen(!navOpen)}
            className="mb-2 w-full max-w-sm rounded-lg border border-red-500/20 bg-white/5 px-4 py-3 text-center text-rose-100/95 shadow-sm transition hover:border-red-500/40 hover:bg-rose-600/10"
          >
            Products
          </div>
          <div
            onClick={() => setNavOpen(!navOpen)}
            className="w-full max-w-sm rounded-lg border border-red-500/20 bg-white/5 px-4 py-3 text-center text-rose-100/95 shadow-sm transition hover:border-red-500/40 hover:bg-rose-600/10"
          >
            About
          </div>
        </div>
      </div>
      {/* header Separater */}
      <div>
        <div className="w-full h-[1px] bg-red-400 opacity-25"></div>
      </div>
    </div>
  );
};
