import React, { useEffect, useRef, useState } from "react";
import { Corousal } from "./Corousal";
import styles from './Hero.module.css';

export default function Hero({
  title = "Learn smarter with",
  highlight = "THE SAURON",
  subtitle = "Digital Creator, Coding tips, tech breakdowns and gadget insights",
}) {
  // Typewriter removed from subtitle per request.
  // Keep a tiny entrance for the hero elements (not the subtitle text).
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 10);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="hero-section" className="relative overflow-hidden  ">
      {/* Red theme Circle background accents */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-rose-500/20 dark:bg-rose-500/15" />
        <div className="absolute top-1/3 left-1/4 size-6 rounded-full bg-red-400/70 blur-[1.5px]" />
        <div className="absolute bottom-1/4 right-1/5 size-8 rounded-full bg-rose-400/70 blur-[2px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-24 md:pt-32 ">
        <div className={`${styles.card} flex justify-center md:text-4xl md:mb-[30px]`}>
          <div className={styles.loader}>
            <p className="">So, Who Really Am I?&nbsp;</p>
            <div  className={`${styles.words} font-semibold `}>
              <span className={styles.word}>Learner</span>
              <span className={styles.word}>Dreamer</span>
              <span className={styles.word}>Creator</span>
              <span className={styles.word}>Tech nerd</span>
              <span className={styles.word}>Thinker</span>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-3xl text-center">
          {/* tagLine */}
          <span className="inline-flex items-center gap-2 rounded-xl border px-3 py-1 text-lg font-semibold backdrop-blur border-black/10 bg-white/60 text-neutral-700 dark:border-white/10 dark:bg-white/5 dark:text-neutral-200">
            Real builds. Real tests. Real talk.
          </span>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-6xl">
            {title}
          </h1>

          {/* Highlighted text */}
          <div className="my-6 text-4xl sm:text-6xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-red-600 via-rose-600 to-red-600 bg-clip-text text-transparent">
              {highlight}
            </span>
          </div>

          <p className="mx-auto mt-10   text-neutral-800 dark:text-neutral-200">
            <span
              className="inline-block rounded-xl border border-red-200/60 bg-gradient-to-r from-rose-50 to-white px-4 py-3 leading-relaxed shadow-sm
                              dark:border-red-400/20 dark:from-white/5 dark:to-white/0"
            >
              <span className="md:text-2xl sm:text-xl md:font-bold sm:font-medium text-neutral-900 dark:text-white">
                {subtitle}
              </span>
            </span>
          </p>
        </div>
      </div>

      <div className="flex justify-center w-full mb-20 mt-10">
        <Corousal speedSec={20} />
      </div>

      <div></div>
    </section>
  );
}

