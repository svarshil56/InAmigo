import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  bg?: "warmBeige" | "lightBeige" | "white" | "forest";
  className?: string;
  id?: string;
}

export function Section({
  children,
  bg = "white",
  className,
  id,
}: SectionProps) {
  const backgrounds = {
    warmBeige: "bg-[var(--color-beige-warm)]",
    lightBeige: "bg-[var(--color-beige-light)]",
    white: "bg-white",
    forest: "bg-[var(--color-forest)] text-white",
  };

  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-32 w-full flex justify-center",
        backgrounds[bg],
        className
      )}
    >
      <div className="w-full max-w-[1280px] px-6 md:px-12 xl:px-8">
        {children}
      </div>
    </section>
  );
}
