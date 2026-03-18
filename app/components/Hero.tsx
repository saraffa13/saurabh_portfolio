"use client";

import { motion } from "framer-motion";
import { ArrowDown, MapPin, Briefcase } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

const roles = [
  "Sales Professional",
  "Market Representative",
  "Pharma Expert",
  "Team Player",
];

function useTypingAnimation(
  words: string[],
  typingSpeed = 80,
  deletingSpeed = 50,
  pauseDuration = 1500
) {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
          if (displayText.length + 1 === currentWord.length) {
            setTimeout(() => setIsDeleting(true), pauseDuration);
          }
        } else {
          setDisplayText(currentWord.slice(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    displayText,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return displayText;
}

const stats = [
  { value: "2.5+", label: "Years Experience" },
  { value: "3", label: "Companies" },
  { value: "100+", label: "Client Relationships" },
];

export default function Hero() {
  const typedText = useTypingAnimation(roles);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24">
      {/* Background grid */}
      <div className="bg-grid pointer-events-none absolute inset-0" />

      {/* Animated gradient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-blob absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-3xl dark:bg-violet-500/5" />
        <div className="animate-blob-reverse absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-fuchsia-500/10 blur-3xl dark:bg-fuchsia-500/5" />
        <div className="animate-blob absolute -bottom-40 left-1/3 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/5" />
      </div>

      {/* Grain overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Radial gradient center glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-violet-500/5 via-fuchsia-500/5 to-transparent blur-2xl" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-12 md:flex-row md:gap-16">
          {/* Left: Text content */}
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 dark:border-violet-500/20 dark:bg-violet-500/10"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-500" />
              </span>
              <span className="text-sm font-medium text-violet-700 dark:text-violet-300">
                Open to opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-serif text-5xl font-bold leading-[1.1] tracking-tight text-zinc-900 dark:text-white md:text-6xl lg:text-7xl"
            >
              Hi, I&apos;m{" "}
              <span className="animate-gradient-x bg-gradient-to-r from-violet-600 via-fuchsia-500 to-violet-600 bg-clip-text text-transparent">
                Saurabh
              </span>
            </motion.h1>

            {/* Typing animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-3 flex h-10 items-center justify-center md:justify-start"
            >
              <span className="text-xl font-medium text-zinc-500 dark:text-zinc-400 md:text-2xl">
                I&apos;m a{" "}
                <span className="text-violet-600 dark:text-violet-400">
                  {typedText}
                </span>
              </span>
              <span className="ml-0.5 inline-block h-7 w-[2px] animate-pulse bg-violet-500 md:h-8" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-zinc-600 dark:text-zinc-400 md:mx-0 md:text-lg"
            >
              A results-driven market representative with 2.5+ years in
              pharmaceutical sales. I connect products with the people who need
              them &mdash; and I do it well.
            </motion.p>

            {/* Location & role badges */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="mt-5 flex flex-wrap items-center justify-center gap-4 text-sm text-zinc-500 dark:text-zinc-500 md:justify-start"
            >
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={14} className="text-violet-500" />
                Kishore Ganj, Harmmu
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Briefcase size={14} className="text-violet-500" />
                Pharma Sales
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:justify-start"
            >
              <a
                href="#experience"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-violet-600 px-7 py-3.5 text-sm font-medium text-white transition-all hover:bg-violet-700 hover:shadow-lg hover:shadow-violet-500/25"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View my experience
                  <span className="transition-transform group-hover:translate-x-0.5">
                    &rarr;
                  </span>
                </span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white/50 px-7 py-3.5 text-sm font-medium text-zinc-700 backdrop-blur-sm transition-all hover:border-violet-300 hover:bg-violet-50 dark:border-zinc-700 dark:bg-zinc-900/50 dark:text-zinc-300 dark:hover:border-violet-500/30 dark:hover:bg-violet-500/10"
              >
                Get in touch
              </a>
            </motion.div>
          </div>

          {/* Right: Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="relative shrink-0"
          >
            <div className="animate-float relative">
              {/* Glow ring behind image — sits behind, doesn't blur the photo */}
              <div className="absolute -inset-6 -z-10 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-20 blur-2xl" />

              {/* Gradient border ring */}
              <div className="relative h-56 w-56 rounded-full p-[3px] md:h-72 md:w-72">
                <div className="animate-gradient-x absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-violet-500" />
                <div className="relative h-full w-full overflow-hidden rounded-full bg-white dark:bg-zinc-950">
                  <Image
                    src="/saurabh.jpg"
                    alt="Saurabh Kumar Jaiswal"
                    width={600}
                    height={600}
                    className="h-full w-full object-cover"
                    priority
                    quality={100}
                  />
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="absolute -left-4 bottom-8 z-20 rounded-xl border border-zinc-200 bg-white/90 px-3 py-2 shadow-lg backdrop-blur-sm dark:border-zinc-700 dark:bg-zinc-900/90 md:-left-12"
            >
              <p className="text-xs font-semibold text-zinc-900 dark:text-white">
                2.5+ Years
              </p>
              <p className="text-[10px] text-zinc-500">in Pharma Sales</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="absolute -right-4 top-8 z-20 rounded-xl border border-zinc-200 bg-white/90 px-3 py-2 shadow-lg backdrop-blur-sm dark:border-zinc-700 dark:bg-zinc-900/90 md:-right-12"
            >
              <p className="text-xs font-semibold text-zinc-900 dark:text-white">
                3 Companies
              </p>
              <p className="text-[10px] text-zinc-500">Trusted Experience</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="mt-20 grid grid-cols-3 gap-4 rounded-2xl border border-zinc-200/80 bg-white/60 p-6 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/40 md:gap-8 md:p-8"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center ${i !== stats.length - 1 ? "border-r border-zinc-200 dark:border-zinc-800" : ""}`}
            >
              <p className="font-serif text-3xl font-bold text-violet-600 dark:text-violet-400 md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-medium text-zinc-500 dark:text-zinc-500 md:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.6 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="#about"
            className="group flex flex-col items-center gap-2 text-zinc-400 transition-colors hover:text-violet-500"
            aria-label="Scroll down"
          >
            <span className="text-xs font-medium uppercase tracking-widest">
              Scroll
            </span>
            <ArrowDown
              size={16}
              className="animate-bounce"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
