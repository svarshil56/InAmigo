"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Asha",
    project: "Project BachpanShala",
    quote: "Before BachpanShala, I struggled to keep up in class because I didn't have the right books. Now, I have all the study materials I need, and I'm scoring top marks!",
    image: "/images/initiative_edu.png", // Using a working local image as placeholder
  },
  {
    id: 2,
    name: "Meera Devi",
    project: "Project Udaan",
    quote: "The skill development training completely changed my life. I am now financially independent, running my own small tailoring business and supporting my family.",
    image: "/images/initiative_women.png", 
  },
  {
    id: 3,
    name: "Rajesh",
    project: "Project Seva",
    quote: "During the toughest times, InAmigos Foundation ensured my family didn't go to sleep hungry. Their dry ration kits were a true blessing for our community.",
    image: "/images/initiative_food.png",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Section bg="lightBeige" className="py-24 md:py-32 overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-black font-heading text-[var(--color-forest)] tracking-tight">
              Voices of <span className="text-[var(--color-terracotta)]">Change</span>
            </h2>
            <p className="mt-4 text-lg text-[var(--color-slate)] max-w-2xl mx-auto">
              Real stories from the people whose lives have been transformed by our initiatives.
            </p>
          </FadeIn>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 bg-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform text-[var(--color-forest)] focus:outline-none focus:ring-2 focus:ring-[var(--color-forest)]"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 bg-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform text-[var(--color-forest)] focus:outline-none focus:ring-2 focus:ring-[var(--color-forest)]"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel */}
          <div className="relative h-[400px] md:h-[350px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-white rounded-3xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row gap-8 items-center"
              >
                <div className="relative w-32 h-32 md:w-48 md:h-48 shrink-0 rounded-full overflow-hidden border-4 border-[var(--color-warmBeige)] shadow-inner">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                
                <div className="flex-1 text-center md:text-left relative">
                  <Quote className="w-12 h-12 text-[var(--color-terracotta)]/20 absolute -top-4 -left-4 md:-top-6 md:-left-8 -z-10 rotate-180" />
                  <p className="text-lg md:text-xl text-[var(--color-slate)] font-medium leading-relaxed italic mb-6">
                    &quot;{testimonials[currentIndex].quote}&quot;
                  </p>
                  <div>
                    <h4 className="text-xl font-bold text-[var(--color-forest)]">
                      {testimonials[currentIndex].name}
                    </h4>
                    <span className="inline-block mt-1 px-3 py-1 bg-[var(--color-terracotta)]/10 text-[var(--color-terracotta)] text-sm font-semibold rounded-full">
                      {testimonials[currentIndex].project}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  idx === currentIndex ? "bg-[var(--color-terracotta)]" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
