"use client";

import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "7004328070",
    href: "tel:7004328070",
  },
  {
    icon: Mail,
    label: "Email",
    value: "saurabhkumarjais@gmail.com",
    href: "mailto:saurabhkumarjais@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kishore Ganj, Harmmu",
    href: "#",
  },
];

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="relative overflow-hidden">
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-blob absolute -left-40 bottom-0 h-[350px] w-[350px] rounded-full bg-violet-500/10 blur-3xl dark:bg-violet-500/5" />
        <div className="animate-blob-reverse absolute -right-40 top-0 h-[300px] w-[300px] rounded-full bg-fuchsia-500/10 blur-3xl dark:bg-fuchsia-500/5" />
      </div>

      <div className="relative text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-violet-600 dark:border-violet-500/20 dark:bg-violet-500/10 dark:text-violet-400"
        >
          Reach out
        </motion.div>

        <h2 className="font-serif text-3xl font-bold text-zinc-900 dark:text-white md:text-5xl">
          Let&apos;s connect
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-zinc-600 dark:text-zinc-400">
          Looking for a dedicated sales professional? I&apos;m always open to
          new opportunities and conversations. Feel free to reach out.
        </p>

        <motion.a
          href="mailto:saurabhkumarjais@gmail.com"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group mt-8 inline-flex items-center gap-2 rounded-full bg-violet-600 px-8 py-4 text-sm font-medium text-white transition-all hover:bg-violet-700 hover:shadow-lg hover:shadow-violet-500/25"
        >
          <Mail size={16} />
          Send me an email
          <ArrowUpRight
            size={14}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </motion.a>

        <div className="mx-auto mt-14 grid max-w-2xl gap-6 sm:grid-cols-3">
          {contactInfo.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              whileHover={{ y: -4 }}
              className="group flex flex-col items-center gap-4 rounded-2xl border border-zinc-200 bg-white/80 p-6 backdrop-blur-sm transition-all hover:border-violet-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900/80 dark:hover:border-violet-500/30 dark:hover:shadow-violet-500/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 text-violet-600 transition-all group-hover:scale-110 group-hover:bg-violet-100 dark:bg-violet-500/10 dark:text-violet-400 dark:group-hover:bg-violet-500/20">
                <item.icon size={22} />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-400">
                  {item.label}
                </p>
                <p className="mt-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  {item.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
