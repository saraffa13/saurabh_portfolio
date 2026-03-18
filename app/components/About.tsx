"use client";

import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        {/* Avatar placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="relative h-72 w-72 overflow-hidden rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 dark:from-violet-500/10 dark:to-fuchsia-500/10">
            <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-violet-500/40">
              S
            </div>
          </div>
        </motion.div>

        <div>
          <h2 className="font-serif text-3xl font-bold text-zinc-900 dark:text-white md:text-4xl">
            About me
          </h2>
          <div className="mt-6 space-y-4 text-zinc-600 dark:text-zinc-400">
            <p>
              Hey! I&apos;m Saurabh Kumar Jaiswal from Kishore Ganj, Harmmu.
              I&apos;m a sales and marketing professional with a strong
              background in the pharmaceutical industry.
            </p>
            <p>
              Over the past 2.5+ years, I&apos;ve worked as a Market
              Representative &mdash; promoting products, building relationships
              with doctors and retailers, and consistently hitting my targets.
              I know how to communicate, persuade, and get things done.
            </p>
            <p>
              When I&apos;m not working, you&apos;ll probably find me watching
              or playing cricket, or planning my next travel adventure. I
              believe in hard work, staying curious, and always looking for the
              next opportunity to grow.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Sales", "Marketing", "Pharma", "Communication", "Hindi & English"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-violet-50 px-4 py-1.5 text-sm font-medium text-violet-700 dark:bg-violet-500/10 dark:text-violet-300"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
