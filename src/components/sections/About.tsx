import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export function About() {
  return (
    <Section id="about" bg="lightBeige">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Founded on a simple belief: Collective action brings change.
            </h2>
            <div className="w-20 h-1 bg-[var(--color-terracotta)] mb-8 rounded-full"></div>
          </FadeIn>
        </div>
        
        <div className="lg:col-span-7 flex flex-col gap-6">
          <FadeIn delay={0.1}>
            <p className="text-xl md:text-2xl font-medium text-[var(--color-forest)] leading-relaxed">
              InAmigos Foundation was founded on September 23, 2020, by Mr. Govind Shukla with the vision of creating an inclusive, compassionate and empowered society.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.2} className="relative h-64 md:h-80 w-full rounded-3xl overflow-hidden shadow-lg my-4">
            <Image 
              src="https://inamigosfoundation.org.in/public/storage/settings/1738236437.jpg" 
              alt="About InAmigos Foundation"
              fill
              className="object-cover"
              unoptimized
            />
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <p className="text-lg text-[var(--color-slate)] leading-relaxed mb-4">
              We believe in the power of people. Every contribution, every volunteer hour, and every shared story is directed towards essential causes—food distribution, education, women empowerment, animal welfare, and environmental sustainability across India.
            </p>
            <p className="text-lg text-[var(--color-slate)] leading-relaxed mb-8">
              With a strong network of dedicated professionals, volunteers, and corporate partners, we work tirelessly to bring positive change where it is needed most. We aren&apos;t just delivering aid; we are building sustainable communities.
            </p>
            <Button variant="outline" href="#initiatives">
              Explore Our Work
            </Button>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}
