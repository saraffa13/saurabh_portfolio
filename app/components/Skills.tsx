"use client";

import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Sales & Marketing",
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
    <SectionWrapper id="skills">
      <h2 className="font-serif text-3xl font-bold text-zinc-900 dark:text-white md:text-4xl">
        Skills & Strengths
      </h2>
      <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
        What I bring to the table. These are the skills I&apos;ve built through
        real-world experience on the field.
      </p>

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {skillCategories.map((category, catIdx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: catIdx * 0.1 }}
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-violet-500">
              {category.title}
            </h3>
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
                  className="cursor-default rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-violet-500/30 dark:hover:bg-violet-500/10 dark:hover:text-violet-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
