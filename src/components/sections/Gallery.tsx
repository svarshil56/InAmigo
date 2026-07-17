"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import Image from "next/image";
import styles from "./Gallery.module.css";

const TILE_DEFS = [
  { x: 40,  y: 62,  w: 57,  h: 95  },
  { x: 100, y: 62,  w: 110, h: 95  },
  { x: 213, y: 62,  w: 95,  h: 75  },
  { x: 311, y: 84,  w: 72,  h: 60  },
  { x: 386, y: 84,  w: 72,  h: 60  },
  { x: 461, y: 62,  w: 110, h: 95  },
  { x: 574, y: 62,  w: 40,  h: 75  },

  { x: 40,  y: 160, w: 115, h: 105 },
  { x: 158, y: 140, w: 100, h: 90  },
  { x: 261, y: 147, w: 150, h: 90  },
  { x: 414, y: 160, w: 115, h: 105 },
  { x: 532, y: 140, w: 82,  h: 90  },

  { x: 40,  y: 268, w: 115, h: 105 },
  { x: 158, y: 233, w: 100, h: 105 },
  { x: 261, y: 240, w: 150, h: 105 },
  { x: 414, y: 268, w: 115, h: 105 },
  { x: 532, y: 233, w: 82,  h: 100 },

  { x: 68,  y: 376, w: 105, h: 92  },
  { x: 176, y: 341, w: 100, h: 95  },
  { x: 279, y: 348, w: 150, h: 88  },
  { x: 432, y: 376, w: 90,  h: 92  },
  { x: 525, y: 336, w: 72,  h: 90  },

  { x: 105, y: 471, w: 90,  h: 60  },
  { x: 198, y: 439, w: 95,  h: 90  },
  { x: 296, y: 439, w: 100, h: 86  },
  { x: 399, y: 449, w: 90,  h: 75  },
  { x: 492, y: 429, w: 75,  h: 80  },
];

const originalImages = [
  // Using only verified local images to avoid any Next.js remote URL blocking issues
  { src: "/images/initiative_animal.png", project: "Animal Welfare" },
  { src: "/images/initiative_edu.png", project: "Education Access" },
  { src: "/images/initiative_env.png", project: "Environmental Care" },
  { src: "/images/initiative_food.png", project: "Food Distribution" },
  { src: "/images/initiative_skills.png", project: "Skill Development" },
  { src: "/images/initiative_women.png", project: "Women Empowerment" },
  { src: "/images/about_impact.png", project: "Community Impact" },
  { src: "/new_hero_bg.jpeg", project: "Happy Children" },
];

// Repeat working images to fill the 27 tiles completely
const galleryImages = [
  ...Array(4).fill(originalImages).flat()
].slice(0, TILE_DEFS.length);

const HEART_PATH =
  "M 320 530 C 255 485,65 375,40 235 C 20 145,75 68,158 60 C 210 54,262 82,292 122 C 303 107,312 94,320 84 C 328 94,337 107,348 122 C 378 82,430 54,482 60 C 565 68,620 145,600 235 C 575 375,385 485,320 530 Z";

const MASK_PATH =
  "M 0 0 L 640 0 L 640 600 L 0 600 Z M 320 530 C 255 485,65 375,40 235 C 20 145,75 68,158 60 C 210 54,262 82,292 122 C 303 107,312 94,320 84 C 328 94,337 107,348 122 C 378 82,430 54,482 60 C 565 68,620 145,600 235 C 575 375,385 485,320 530 Z";

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <Section id="gallery" bg="warmBeige" className="py-12 md:py-16 overflow-hidden">
      <div className="text-center mb-8 relative z-10">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--color-forest)]">
            Moments of Impact
          </h2>
          <p className="text-lg text-[var(--color-slate)] max-w-2xl mx-auto">
            A glimpse into the lives we&apos;ve touched and the communities we&apos;ve built together.
          </p>
        </FadeIn>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className={styles.portfolioHeartContainer}>
          {TILE_DEFS.map((tile, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.02, duration: 0.5 }}
              className={styles.portfolioPiece}
              onClick={() => setSelectedImage(galleryImages[i].src)}
              style={{
                left: `${(tile.x / 640) * 100}%`,
                top: `${(tile.y / 600) * 100}%`,
                width: `${(tile.w / 640) * 100}%`,
                height: `${(tile.h / 600) * 100}%`,
              }}
            >
              <Image
                src={galleryImages[i].src}
                alt={galleryImages[i].project}
                fill
                className={styles.pieceImage}
                unoptimized
              />
            </motion.div>
          ))}

          <svg
            className={styles.heartOverlay}
            viewBox="0 0 640 600"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* The fill color matches the background color var(--color-beige-warm) -> #E6E2DA */}
            <path d={MASK_PATH} fill="#E6E2DA" fillRule="evenodd" />
            <path
              d={HEART_PATH}
              fill="none"
              stroke="rgba(21, 66, 48, 0.2)"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-12 ${styles.lightboxOverlay}`}
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[110]"
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            >
              <X size={32} strokeWidth={1} />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Selected work"
                fill
                className="object-contain drop-shadow-2xl"
                unoptimized
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
