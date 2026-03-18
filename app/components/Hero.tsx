"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6">
      {/* Grain overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="mx-auto max-w-5xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-4 text-sm font-medium uppercase tracking-widest text-violet-500"
        >
          Sales &middot; Marketing &middot; Pharma
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-serif text-5xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-white md:text-7xl lg:text-8xl"
        >
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
            Saurabh
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-xl"
        >
          A results-driven market representative with 2.5+ years of experience
          in pharmaceutical sales. I connect products with the people who need
          them &mdash; and I do it well.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#experience"
            className="group inline-flex items-center gap-2 rounded-full bg-zinc-900 px-7 py-3.5 text-sm font-medium text-white transition-all hover:bg-zinc-800 hover:shadow-lg hover:shadow-zinc-900/20 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 dark:hover:shadow-white/10"
          >
            View my experience
            <span className="transition-transform group-hover:translate-x-0.5">
              &rarr;
            </span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-7 py-3.5 text-sm font-medium text-zinc-700 transition-all hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:bg-zinc-900"
          >
            Get in touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mt-20"
        >
          <a
            href="#about"
            className="inline-flex animate-bounce text-zinc-400 transition-colors hover:text-zinc-600 dark:hover:text-zinc-300"
            aria-label="Scroll down"
          >
            <ArrowDown size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
