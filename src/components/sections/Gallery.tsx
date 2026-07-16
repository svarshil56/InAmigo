import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import Image from "next/image";

const galleryImages = [
  {
    src: "https://inamigosfoundation.org.in/public/storage/gallery/1743051485.jpg",
    project: "BachpanShala",
    location: "Chhattisgarh",
    date: "2024",
    aspectRatio: "aspect-[4/5]",
  },
  {
    src: "https://inamigosfoundation.org.in/public/storage/gallery/1743051466.jpg",
    project: "Seva Drive",
    location: "Rural India",
    date: "2024",
    aspectRatio: "aspect-square",
  },
  {
    src: "https://inamigosfoundation.org.in/public/storage/events/1738238109.jpg",
    project: "World Water Day",
    location: "Community Event",
    date: "March 2025",
    aspectRatio: "aspect-video",
  },
  {
    src: "https://inamigosfoundation.org.in/public/storage/gallery/1743051449.jpg",
    project: "Udaan Workshop",
    location: "Chhattisgarh",
    date: "2023",
    aspectRatio: "aspect-square",
  },
  {
    src: "https://inamigosfoundation.org.in/public/storage/gallery/1743051438.jpg",
    project: "Prakriti Plantation",
    location: "Local Schools",
    date: "2023",
    aspectRatio: "aspect-[4/5]",
  },
  {
    src: "https://inamigosfoundation.org.in/public/storage/events/1738135259.jpeg",
    project: "Day of Happiness",
    location: "Community Center",
    date: "March 2025",
    aspectRatio: "aspect-video",
  },
];

export function Gallery() {
  return (
    <Section id="gallery" bg="warmBeige" className="py-24 md:py-32">
      <div className="text-center mb-16">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-forest)]">
            Moments of Impact
          </h2>
          <p className="text-lg text-[var(--color-slate)] max-w-2xl mx-auto">
            A glimpse into the lives we&apos;ve touched and the communities we&apos;ve built together.
          </p>
        </FadeIn>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {galleryImages.map((image, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <div className={`relative w-full ${image.aspectRatio} rounded-3xl overflow-hidden group shadow-lg break-inside-avoid`}>
              <Image
                src={image.src}
                alt={image.project}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                unoptimized
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-forest-dark)]/90 via-[var(--color-forest)]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <p className="text-[var(--color-terracotta)] font-bold tracking-wider text-sm uppercase mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {image.project}
                </p>
                <div className="flex items-center justify-between text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  <span className="font-medium">{image.location}</span>
                  <span className="text-sm text-white/80">{image.date}</span>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
