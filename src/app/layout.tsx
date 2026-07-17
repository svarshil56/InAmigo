import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InAmigos Foundation | Empowering Lives, Spreading Compassion",
  description: "InAmigos Foundation is a Section 8 non-profit working across India on education (BachpanShala), women empowerment (Udaan), animal welfare, environment and community development.",
  keywords: ["NGO in Bilaspur", "InAmigos Foundation", "NGO in India", "Donate to NGO", "Project BachpanShala", "Women Empowerment", "Animal Welfare NGO"],
  authors: [{ name: "Govind Shukla" }],
  openGraph: {
    title: "InAmigos Foundation | Empowering Lives, Spreading Compassion",
    description: "Join the movement to build an inclusive and empowered society. Working across 28 states in India.",
    url: "https://inamigosfoundation.org.in",
    siteName: "InAmigos Foundation",
    images: [
      {
        url: "https://inamigosfoundation.org.in/public/storage/settings/174421468011.jpg",
        width: 1200,
        height: 630,
        alt: "InAmigos Foundation Impact",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "InAmigos Foundation",
    description: "Working across India on education, women empowerment, animal welfare, and environment.",
    images: ["https://inamigosfoundation.org.in/public/storage/settings/174421468011.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jakarta.variable} antialiased bg-[var(--color-bg)] text-[var(--color-text-main)] min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
