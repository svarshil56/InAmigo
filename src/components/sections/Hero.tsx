"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center items-center overflow-hidden">
      {/* Background Image with Zoom Effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      >
        <Image
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2940&auto=format&fit=crop"
          alt="Volunteers interacting with community"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        {/* Soft Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-12 xl:px-8 text-center mt-20">
        <FadeIn delay={0.2}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white tracking-tight mb-6 text-balance leading-[1.1] drop-shadow-md">
            Creating Opportunities.<br className="hidden md:block" /> Inspiring Hope.<br className="hidden md:block" /> Transforming Communities.
          </h1>
        </FadeIn>
        
        <FadeIn delay={0.4}>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10 text-balance leading-relaxed drop-shadow-md">
            We believe that lasting change begins with compassion, collaboration, and action. Together, we empower communities through education, healthcare, environmental initiatives, and sustainable development.
          </p>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Button href="https://rzp.io/l/kWQ87HP" size="lg" variant="primary" className="min-w-[220px] text-lg font-semibold tracking-wide">
              Donate Now
            </Button>
            <Button href="#volunteer" variant="outline" size="lg" className="min-w-[220px] text-lg font-semibold tracking-wide">
              Become a Volunteer
            </Button>
          </div>
        </FadeIn>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/70"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={32} className="opacity-80" />
      </motion.div>
    </section>
  );
}
