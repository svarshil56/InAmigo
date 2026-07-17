"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import Link from "next/link";
import { HTMLMotionProps } from "framer-motion";

const MotionComponent = motion.button;
const MotionLink = motion(Link);

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "size"> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-full";

  const variants = {
    primary:
      "bg-[var(--color-forest)] text-white hover:bg-[var(--color-forest-dark)] focus-visible:ring-[var(--color-forest)] shadow-[0_4px_14px_0_rgba(45,79,62,0.25)] hover:shadow-[0_6px_20px_rgba(45,79,62,0.35)] hover:-translate-y-0.5",
    secondary:
      "bg-[var(--color-terracotta)] text-white hover:bg-[var(--color-terracotta-dark)] focus-visible:ring-[var(--color-terracotta)] shadow-[0_4px_14px_0_rgba(208,114,85,0.25)] hover:shadow-[0_6px_20px_rgba(208,114,85,0.35)] hover:-translate-y-0.5",
    outline:
      "bg-white/100 backdrop-blur-sm border-2 border-[var(--color-border)] text-[var(--color-forest)] shadow-sm",
    ghost:
      "text-[var(--color-forest)] hover:bg-[var(--color-forest)] hover:text-white",
  };

  const sizes = {
    sm: "h-10 px-6 text-sm",
    md: "h-12 px-8 text-base",
    lg: "h-14 px-10 text-lg",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <MotionLink
        href={href}
        className={classes}
        whileHover={{ y: -2 }}
        whileTap={{ y: 0 }}
      >
        {children}
      </MotionLink>
    );
  }

  return (
    <MotionComponent
      className={classes}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}
