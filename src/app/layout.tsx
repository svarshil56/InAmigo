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
  title: "InAmigos Foundation - Empowering Lives, Spreading Compassion",
  description: "InAmigos Foundation is a Section 8 non-profit working across India on education, women empowerment, animal welfare, environment and community development.",
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
