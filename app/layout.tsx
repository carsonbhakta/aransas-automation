import type { Metadata } from "next";
import { Hanken_Grotesk, Newsreader } from "next/font/google";
import "./globals.css";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Your own booking site, run from your phone | Aransas Automation",
  description:
    "We build Texas Coastal Bend fishing guides their own booking site. Take bookings day or night, keep every dollar you earn, and run it all from your phone. Text Carson in Rockport for a free preview.",
  openGraph: {
    title: "Your own booking site, run from your phone",
    description:
      "A booking site built for charter captains. Take bookings day or night, keep every dollar, and run it all from your phone.",
    url: "https://aransasautomation.com",
    siteName: "Aransas Automation",
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://aransasautomation.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${hanken.variable} ${newsreader.variable} scroll-smooth`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
