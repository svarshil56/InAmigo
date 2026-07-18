import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { Counter } from "@/components/ui/Counter";

const stats = [
  {
    title: "LIVES IMPACTED",
    value: 50000,
    suffix: "+",
    desc: "We have reached over 50,000 beneficiaries across India through our various grassroots programs.",
  },
  {
    title: "VOLUNTEERS",
    value: 200,
    suffix: "+",
    desc: "A strong network of dedicated professionals and youth driving ground-level change.",
  },
  {
    title: "STATES REACHED",
    value: 28,
    suffix: "+",
    desc: "Expanding our footprint across the nation to build sustainable communities everywhere.",
  },
];

export function Impact() {
  return (
    <Section bg="warmBeige" className="py-24 md:py-32">
      <div className="text-center mb-16 md:mb-24">
        <FadeIn>
          <h2 className="text-4xl md:text-6xl font-black font-heading text-[var(--color-forest)] tracking-tight uppercase">
            Our <span className="text-[var(--color-terracotta)]">Impact</span> in Action
          </h2>
          <p className="mt-6 text-lg text-[var(--color-slate)] max-w-2xl mx-auto font-medium">
            InAmigos Foundation supports grassroots leaders, volunteers, and communities who fight for equity, education, and sustainability.
          </p>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
        {stats.map((stat, index) => (
          <FadeIn key={stat.title} delay={index * 0.15} className="bg-white rounded-[2rem] p-6 md:p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-[var(--color-border)]/20 flex flex-col justify-between hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] transition-shadow duration-500 min-h-[280px] md:min-h-[320px]">
            <div>
              <p className="text-[var(--color-forest)] font-bold tracking-widest text-xs md:text-sm uppercase mb-12">
                {stat.title}
              </p>
            </div>
            
            <div>
              <h3 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl text-black mb-6 tracking-tighter">
                <Counter value={stat.value} />
                <span className="text-[var(--color-terracotta)]">{stat.suffix}</span>
              </h3>
              <p className="text-[var(--color-slate)] text-sm md:text-base leading-relaxed font-medium">
                {stat.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
