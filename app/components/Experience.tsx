"use client";

import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import Image from "next/image";

const experiences = [
  {
    role: "Market Representative",
    company: "Mankind Healthcare",
    period: "Sep 2025 — Dec 2025",
    logo: "/mankind.jpeg",
    description:
      "Promoted healthcare products across the assigned territory. Engaged with doctors, chemists, and medical professionals to drive brand awareness and achieve sales targets.",
  },
  {
    role: "Market Representative",
    company: "Intas Pharmaceutical",
    period: "1.5 Years",
    logo: "/intas.jpeg",
    description:
      "Promoted pharmaceutical products to doctors, chemists, and healthcare professionals. Managed territory sales, built strong client relationships, and consistently met monthly targets.",
  },
  {
    role: "Market Representative",
    company: "Shri Nivas Gujarat Pvt Ltd",
    period: "1 Year",
    logo: "/srinavas.jpeg",
    description:
      "Handled product detailing and promotion in the assigned market area. Developed new business contacts, managed retail partnerships, and drove product awareness across the territory.",
  },
];

const education = [
  {
    degree: "12th (Intermediate)",
    board: "B.S.E.B",
    year: "2021",
    result: "1st Division",
  },
  {
    degree: "Matric (10th)",
    board: "B.B.O.S.E",
    year: "2019",
    result: "1st Division",
  },
];

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      {/* Work Experience */}
      <h2 className="font-serif text-3xl font-bold text-zinc-900 dark:text-white md:text-4xl">
        Experience
      </h2>
      <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
        2.5+ years in pharmaceutical sales &mdash; here&apos;s where I&apos;ve
        been and what I&apos;ve done.
      </p>

      <div className="relative mt-12">
        {/* Timeline line */}
        <div className="absolute left-0 top-0 hidden h-full w-px bg-zinc-200 dark:bg-zinc-800 md:block md:left-8" />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative md:pl-20"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 hidden h-4 w-4 rounded-full border-2 border-violet-500 bg-white dark:bg-zinc-950 md:block md:left-[1.625rem]" />

              <div className="rounded-xl border border-zinc-200 bg-white p-6 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700">
                <div className="flex items-start gap-4">
                  {/* Company logo */}
                  <div className="hidden h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-zinc-200 bg-white dark:border-zinc-700 sm:block">
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                      quality={100}
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="font-semibold text-zinc-900 dark:text-white">
                          {exp.role}
                        </h3>
                        <p className="text-sm text-violet-600 dark:text-violet-400">
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-sm text-zinc-500 dark:text-zinc-500">
                        {exp.period}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mt-20">
        <h2 className="font-serif text-3xl font-bold text-zinc-900 dark:text-white md:text-4xl">
          Education
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-xl border border-zinc-200 bg-white p-6 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
            >
              <h3 className="font-semibold text-zinc-900 dark:text-white">
                {edu.degree}
              </h3>
              <p className="mt-1 text-sm text-violet-600 dark:text-violet-400">
                {edu.board}
              </p>
              <div className="mt-3 flex items-center justify-between text-sm text-zinc-500">
                <span>{edu.result}</span>
                <span>{edu.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
