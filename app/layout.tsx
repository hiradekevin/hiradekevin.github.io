import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const Playfair = Playfair_Display({
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Kevin Hirade's Portfolio",
    template: "%s | Kevin Hirade's Portfolio",
  },
  description: "Enthusiast person passionate about the world.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={Playfair.className}>
      <body className="antialiased flex justify-center min-h-screen">
        <main className="flex flex-col justify-start items-center p-8 sm:p-24 lg:w-3/4 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
