"use client";


import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { MapPin } from "lucide-react";

export function ImpactMap() {
  return (
    <Section bg="white" className="py-24 md:py-32 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--color-forest)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--color-terracotta)]/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--color-forest)]/10 text-[var(--color-forest)] rounded-full text-sm font-semibold mb-6">
                <MapPin className="w-4 h-4" />
                <span>National Reach</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading text-black tracking-tight mb-6">
                From <span className="text-[var(--color-terracotta)]">Bilaspur</span> to<br />
                28 States of India.
              </h2>
              <p className="text-lg text-[var(--color-slate)] leading-relaxed mb-8">
                What started on September 23, 2020, as a local mission in Chhattisgarh has now expanded into a nationwide movement. Through our dedicated network of youth and professionals, InAmigos Foundation&apos;s impact now ripples across the entire country.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-8">
                <div className="border-l-4 border-[var(--color-forest)] pl-4">
                  <p className="text-4xl font-bold text-[var(--color-forest)] mb-1">HQ</p>
                  <p className="text-[var(--color-slate)] font-medium">Bilaspur, Chhattisgarh</p>
                </div>
                <div className="border-l-4 border-[var(--color-terracotta)] pl-4">
                  <p className="text-4xl font-bold text-[var(--color-terracotta)] mb-1">28</p>
                  <p className="text-[var(--color-slate)] font-medium">States Reached</p>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden bg-slate-50 shadow-2xl">
            <iframe 
              src="https://maps.google.com/maps?q=InAmigos%20Foundation,%20Bilaspur,%20Chhattisgarh,%20India&t=&z=14&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>
        </div>
      </div>
    </Section>
  );
}
