import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrustMarquee } from "@/components/sections/TrustMarquee";
import { Impact } from "@/components/sections/Impact";
import { ImpactMap } from "@/components/sections/ImpactMap";
import { About } from "@/components/sections/About";
import { Initiatives } from "@/components/sections/Initiatives";
import { Testimonials } from "@/components/sections/Testimonials";
import { Gallery } from "@/components/sections/Gallery";
import { Volunteer } from "@/components/sections/Volunteer";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full overflow-hidden">
      <Navbar />
      <Hero />
      <TrustMarquee />
      <Impact />
      <ImpactMap />
      <About />
      <Initiatives />
      <Testimonials />
      <Gallery />
      <Volunteer />
      
      {/* Final CTA */}
      <Section bg="white" className="py-32">
        <div className="text-center">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-bold mb-10 text-[var(--color-forest)] tracking-tight">
              Be the reason<br />someone smiles today.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button href="https://rzp.io/l/kWQ87HP" size="lg">
                Donate Now
              </Button>
              <Button href="https://forms.gle/AB4c1hLaDDmtrKGU7" variant="outline" size="lg">
                Join the Movement
              </Button>
            </div>
          </FadeIn>
        </div>
      </Section>
      
      <Footer />
    </main>
  );
}
