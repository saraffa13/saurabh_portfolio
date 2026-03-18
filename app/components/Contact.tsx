"use client";

import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "7004328070", href: "tel:7004328070" },
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
    <SectionWrapper id="contact">
      <div className="text-center">
        <h2 className="font-serif text-3xl font-bold text-zinc-900 dark:text-white md:text-4xl">
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
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-zinc-900 px-8 py-4 text-sm font-medium text-white transition-shadow hover:shadow-lg hover:shadow-zinc-900/20 dark:bg-white dark:text-zinc-900 dark:hover:shadow-white/10"
        >
          <Mail size={16} />
          Send me an email
        </motion.a>

        <div className="mx-auto mt-12 grid max-w-2xl gap-6 sm:grid-cols-3">
          {contactInfo.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              whileHover={{ y: -2 }}
              className="flex flex-col items-center gap-3 rounded-xl border border-zinc-200 bg-white p-6 transition-all hover:border-violet-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-violet-500/30"
            >
              <div className="rounded-full bg-violet-50 p-3 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400">
                <item.icon size={20} />
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
