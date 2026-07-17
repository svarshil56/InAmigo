"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

const navLinks = [
  { name: "About Us", href: "#about" },
  { name: "Initiatives", href: "#initiatives" },
  { name: "Stories", href: "#stories" },
  { name: "Gallery", href: "#gallery" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 xl:px-8 flex items-center justify-between">
        <Link 
          href="/" 
          className="flex items-center gap-3 group"
          onClick={(e) => {
            if (window.location.pathname === "/") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <Image 
            src="/logo.webp" 
            alt="InAmigos Foundation" 
            width={48} 
            height={48} 
            className="rounded-full object-cover shadow-sm"
            unoptimized
          />
          <span className={`font-heading font-bold text-2xl tracking-tight transition-colors ${scrolled ? 'text-[var(--color-forest)]' : 'text-white drop-shadow-md'}`}>
            InAmigos
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-medium transition-colors text-sm uppercase tracking-wider ${
                scrolled
                  ? "text-[var(--color-slate)] hover:text-[var(--color-forest)]"
                  : "text-white/90 hover:text-white drop-shadow-sm"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button 
            href="https://rzp.io/l/kWQ87HP" 
            size="sm" 
            variant={scrolled ? "primary" : "outline"}
            className={!scrolled ? "border-white/50 text-[var(--color-forest)] hover:bg-white hover:text-[var(--color-forest)]" : ""}
          >
            Donate
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 -mr-2 transition-colors ${scrolled ? "text-[var(--color-forest)]" : "text-white drop-shadow-sm"}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-[var(--color-border)] py-4 px-6 shadow-lg flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[var(--color-slate)] hover:text-[var(--color-forest)] font-medium py-2 text-lg"
            >
              {link.name}
            </Link>
          ))}
          <Button
            href="https://rzp.io/l/kWQ87HP"
            className="w-full mt-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Donate Now
          </Button>
        </motion.div>
      )}
    </motion.header>
  );
}
