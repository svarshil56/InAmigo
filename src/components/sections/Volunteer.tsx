import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

const journeySteps = [
  { step: "01", title: "Register", desc: "Sign up to become a volunteer." },
  { step: "02", title: "Orientation", desc: "Learn about our vision and values." },
  { step: "03", title: "Choose Project", desc: "Select an initiative you care about." },
  { step: "04", title: "Volunteer", desc: "Engage in ground-level activities." },
  { step: "05", title: "Create Impact", desc: "Transform lives and communities." },
];

const volunteers = [
  { name: "Faiz Khan", role: "Volunteer Supervisor, Uttar Pradesh", image: "https://inamigosfoundation.org.in/public/storage/volunteers/1738081237.jpg" },
  { name: "Manavi Jaiswal", role: "Junior Volunteer Associate", image: "https://inamigosfoundation.org.in/public/storage/volunteers/1738127845.jpg" },
  { name: "Akash", role: "Volunteer Associate", image: "https://inamigosfoundation.org.in/public/storage/volunteers/1738080678.jpg" },
];

export function Volunteer() {
  return (
    <Section id="volunteer" bg="lightBeige" className="py-24 md:py-32">
      <div className="text-center mb-20">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-forest)]">
            Become a Volunteer
          </h2>
          <p className="text-lg text-[var(--color-slate)] max-w-2xl mx-auto">
            Join Us and Be the Change You Wish to See. Step in, stand out, and create impact.
          </p>
        </FadeIn>
      </div>

      <div className="mb-24 relative">
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-[var(--color-border)] -translate-y-1/2 z-0"></div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
          {journeySteps.map((item, index) => (
            <FadeIn key={item.step} delay={index * 0.1} className="flex flex-col items-center text-center bg-[var(--color-beige-light)] md:bg-transparent">
              <div className="w-16 h-16 rounded-full bg-[var(--color-forest)] text-white flex items-center justify-center font-heading font-bold text-xl mb-6 shadow-lg border-4 border-[var(--color-beige-light)]">
                {item.step}
              </div>
              <h4 className="font-heading font-semibold text-[var(--color-forest)] text-xl mb-3">
                {item.title}
              </h4>
              <p className="text-sm text-[var(--color-slate)]">
                {item.desc}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>

      <div className="text-center mb-20">
        <FadeIn>
          <Button href="https://forms.gle/AB4c1hLaDDmtrKGU7" size="lg">
            Join the Movement
          </Button>
        </FadeIn>
      </div>

      <div>
        <FadeIn>
          <h3 className="text-2xl font-bold text-center mb-12 text-[var(--color-forest)]">Meet Some of Our Volunteers</h3>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {volunteers.map((vol, index) => (
            <FadeIn key={vol.name} delay={index * 0.1}>
              <div className="flex items-center gap-6 p-6 rounded-3xl bg-white shadow-sm border border-[var(--color-border)]/30">
                <Image src={vol.image} alt={vol.name} width={80} height={80} className="w-20 h-20 rounded-full object-cover shadow-sm" unoptimized />
                <div>
                  <h4 className="font-heading font-semibold text-lg text-[var(--color-forest)]">{vol.name}</h4>
                  <p className="text-sm text-[var(--color-terracotta)] font-medium">{vol.role}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

    </Section>
  );
}
