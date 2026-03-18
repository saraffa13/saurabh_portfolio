"use client";

import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { Heart, MapPin, Languages } from "lucide-react";

const highlights = [
  {
    icon: MapPin,
    title: "Based in",
    value: "Kishore Ganj, Harmmu",
  },
  {
    icon: Heart,
    title: "Interests",
    value: "Cricket, Traveling",
  },
  {
    icon: Languages,
    title: "Languages",
    value: "Hindi, English",
  },
];

export default function About() {
  return (
    <SectionWrapper id="about">
      {/* Section badge */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-violet-600 dark:border-violet-500/20 dark:bg-violet-500/10 dark:text-violet-400"
      >
        Get to know me
      </motion.div>

      <h2 className="font-serif text-3xl font-bold text-zinc-900 dark:text-white md:text-4xl">
        About me
      </h2>

      <div className="mt-10 grid gap-10 md:grid-cols-5 md:items-start">
        {/* Left: Bio text */}
        <div className="md:col-span-3">
          <div className="space-y-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            <p>
              Hey! I&apos;m Saurabh Kumar Jaiswal &mdash; a sales and marketing
              professional with a strong background in the pharmaceutical
              industry.
            </p>
            <p>
              Over the past 2.5+ years, I&apos;ve worked as a Market
              Representative &mdash; promoting products, building relationships
              with doctors and retailers, and consistently hitting my targets. I
              know how to communicate, persuade, and get things done.
            </p>
            <p>
              When I&apos;m not working, you&apos;ll probably find me watching
              or playing cricket, or planning my next travel adventure. I believe
              in hard work, staying curious, and always looking for the next
              opportunity to grow.
            </p>
          </div>

          {/* Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "Sales",
              "Marketing",
              "Pharma",
              "Communication",
              "Field Sales",
              "Client Relations",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-sm font-medium text-violet-700 dark:border-violet-500/20 dark:bg-violet-500/10 dark:text-violet-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Info cards */}
        <div className="space-y-4 md:col-span-2">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group flex items-center gap-4 rounded-xl border border-zinc-200 bg-white p-4 transition-all hover:border-violet-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-violet-500/30"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-50 text-violet-600 transition-colors group-hover:bg-violet-100 dark:bg-violet-500/10 dark:text-violet-400 dark:group-hover:bg-violet-500/20">
                <item.icon size={18} />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-400">
                  {item.title}
                </p>
                <p className="mt-0.5 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  {item.value}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
