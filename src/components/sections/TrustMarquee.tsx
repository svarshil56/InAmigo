"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, FileText, Landmark } from "lucide-react";

const credentials = [
  { icon: Landmark, text: "Section 8 Registered Company" },
  { icon: ShieldCheck, text: "80G & 12A Certified (Tax Exempt)" },
  { icon: Award, text: "NITI Aayog NGO Darpan Registered" },
  { icon: FileText, text: "CSR-1 Approved Organization" },
];

export function TrustMarquee() {
  return (
    <div className="bg-[var(--color-forest-dark)] py-4 border-y border-white/10 overflow-hidden relative flex">
      {/* Gradient fades for smooth edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[var(--color-forest-dark)] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[var(--color-forest-dark)] to-transparent z-10" />

      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        }}
      >
        {/* Double the list to make it infinitely loop smoothly */}
        {[...credentials, ...credentials, ...credentials, ...credentials].map((cred, index) => {
          const Icon = cred.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-3 mx-8 md:mx-12 text-white/90"
            >
              <Icon className="w-5 h-5 text-[var(--color-terracotta)]" />
              <span className="font-medium tracking-wide text-sm md:text-base">
                {cred.text}
              </span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
