"use client";

import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <Section bg="forest" className="pb-6 pt-12 md:pt-16">
      <FadeIn>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
          <div className="max-w-md">
            <Link 
              href="/" 
              className="flex items-center gap-3 mb-6"
              onClick={() => {
                if (window.location.pathname === "/") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
            >
              <Image
                src="/logo.webp"
                alt="InAmigos Foundation"
                width={60}
                height={60}
                className="rounded-full object-cover shadow-sm"
                unoptimized
              />
              <span className="font-heading font-bold text-3xl text-white tracking-tight">
                InAmigos
              </span>
            </Link>
            <p className="text-white/80 max-w-sm mb-6 leading-relaxed">
              A Section 8 registered non-profit organization creating sustainable impact across education,
              women empowerment, environment, healthcare and community development.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/inamigos/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://www.linkedin.com/company/inamigos-foundation/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://www.facebook.com/InAmigos/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://x.com/InamigosF" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-white">Quick Links</h4>
            <nav className="flex flex-col space-y-3">
              <Link href="#about" className="text-white/70 hover:text-white transition-colors">About Us</Link>
              <Link href="#initiatives" className="text-white/70 hover:text-white transition-colors">Our Initiatives</Link>
              <Link href="#gallery" className="text-white/70 hover:text-white transition-colors">Gallery</Link>
              <a href="https://rzp.io/l/kWQ87HP" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors font-medium">Donate</a>
            </nav>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-white">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/70">
                <Mail size={16} />
                <a href="mailto:support@inamigosfoundation.org.in" className="hover:text-white transition-colors">
                  support@inamigosfoundation.org.in
                </a>
              </li>
              <li className="text-white/70 mt-4 text-sm leading-relaxed">
                Ward No. 5, Gram Post, Sipat Ujwal Nagar, Bilaspur, Chhattisgarh 495555<br />
                Registered under Section 8 of the Companies Act, 2013.<br />
                80G & 12A Certified. CSR-1 & NITI Aayog Registered.
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>© {new Date().getFullYear()} InAmigos Foundation. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
