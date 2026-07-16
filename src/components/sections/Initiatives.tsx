import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import Image from "next/image";

const initiatives = [
  {
    title: "BachpanShala",
    subtitle: "Nurturing Young Minds, Building Bright Futures",
    description: "Ensuring quality education for underprivileged children. We believe education changes generations, breaking the cycle of poverty and opening doors to a brighter future.",
    image: "https://inamigosfoundation.org.in/public/storage/slideshow/1738235951.jpg",
  },
  {
    title: "Udaan",
    subtitle: "Soaring Towards a Brighter Future",
    description: "Women empowerment through skill development and financial independence. When we empower women, we empower entire communities.",
    image: "https://inamigosfoundation.org.in/public/storage/slideshow/1738235638.jpg",
  },
  {
    title: "Prakriti",
    subtitle: "Plant for a Better Tomorrow",
    description: "Environmental conservation and sustainability efforts. Because the planet we leave behind is just as important as the one we live in today.",
    image: "https://inamigosfoundation.org.in/public/storage/slideshow/1738236201.jpg",
  },
  {
    title: "Jeev",
    subtitle: "Empowering Lives, Spreading Compassion",
    description: "Animal welfare, including rescue, protection and feeding. Every life deserves compassion and care in our shared ecosystem.",
    image: "https://inamigosfoundation.org.in/public/storage/slideshow/1738235697.jpg",
  },
  {
    title: "Seva",
    subtitle: "Serving Humanity with Compassion",
    description: "Providing food and clothing to the underprivileged. Communities grow stronger together when we look out for our most vulnerable neighbors.",
    image: "https://inamigosfoundation.org.in/public/storage/slideshow/1738236132.jpg",
  }
];

export function Initiatives() {
  return (
    <div id="initiatives" className="flex flex-col w-full">
      {initiatives.map((item, index) => (
        <Section 
          key={item.title} 
          bg={index % 2 === 0 ? "white" : "lightBeige"}
          className="py-24 md:py-32"
        >
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center ${
            index % 2 !== 0 ? "lg:[&>div:first-child]:order-last" : ""
          }`}>
            
            <div className="flex flex-col justify-center">
              <FadeIn>
                <h2 className="text-5xl md:text-6xl font-bold mb-4 text-[var(--color-forest)] tracking-tight">
                  {item.title}
                </h2>
                <h3 className="text-2xl md:text-3xl text-[var(--color-terracotta)] font-medium mb-6 leading-tight">
                  {item.subtitle}
                </h3>
                <p className="text-lg md:text-xl text-[var(--color-slate)] leading-relaxed">
                  {item.description}
                </p>
              </FadeIn>
            </div>

            <FadeIn delay={0.2} direction={index % 2 === 0 ? "left" : "right"} className="relative h-[400px] md:h-[600px] w-full rounded-4xl overflow-hidden shadow-xl">
              <Image 
                src={item.image} 
                alt={item.title} 
                fill
                className="object-cover transition-transform duration-[10s] hover:scale-105"
                unoptimized
              />
            </FadeIn>

          </div>
        </Section>
      ))}
    </div>
  );
}
