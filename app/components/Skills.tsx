"use client";

import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { TrendingUp, MessageCircle, FlaskConical, Zap } from "lucide-react";

const skillCategories = [
  {
    title: "Sales & Marketing",
    icon: TrendingUp,
    color: "violet",
    skills: [
      "Product Promotion",
      "Sales Strategy",
      "Market Research",
      "Client Relationship Management",
      "Target Achievement",
      "Field Sales",
    ],
  },
  {
    title: "Communication",
    icon: MessageCircle,
    color: "fuchsia",
    skills: [
      "Persuasion & Negotiation",
      "Presentation Skills",
      "Doctor & Retailer Engagement",
      "Team Collaboration",
      "Hindi (Fluent)",
      "English",
    ],
  },
  {
    title: "Industry Knowledge",
    icon: FlaskConical,
    color: "blue",
    skills: [
      "Pharmaceutical Products",
      "Healthcare Market",
      "Product Detailing",
      "Competitor Analysis",
      "Territory Management",
      "Compliance Awareness",
    ],
  },
  {
    title: "Other Skills",
    icon: Zap,
    color: "amber",
    skills: [
      "Basic Computer Knowledge",
      "Time Management",
      "Self-Motivated",
      "Problem Solving",
      "Adaptability",
      "Quick Learner",
    ],
  },
];

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="relative overflow-hidden">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-60 top-1/4 h-[400px] w-[400px] rounded-full bg-violet-500/5 blur-3xl" />
        <div className="absolute -left-60 bottom-1/4 h-[300px] w-[300px] rounded-full bg-fuchsia-500/5 blur-3xl" />
      </div>

      <div className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-violet-600 dark:border-violet-500/20 dark:bg-violet-500/10 dark:text-violet-400"
        >
          What I bring
        </motion.div>

        <h2 className="font-serif text-3xl font-bold text-zinc-900 dark:text-white md:text-4xl">
          Skills & Strengths
        </h2>
        <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
          Built through real-world experience on the field &mdash; not from a
          textbook.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIdx * 0.1 }}
              className="group rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:border-violet-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-violet-500/30 dark:hover:shadow-violet-500/5"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600 transition-colors group-hover:bg-violet-100 dark:bg-violet-500/10 dark:text-violet-400 dark:group-hover:bg-violet-500/20">
                  <category.icon size={20} />
                </div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: catIdx * 0.1 + skillIdx * 0.05,
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="cursor-default rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-sm text-zinc-600 transition-colors hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:border-violet-500/30 dark:hover:bg-violet-500/10 dark:hover:text-violet-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
