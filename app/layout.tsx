import type { Metadata } from "next";
import { Hanken_Grotesk, Newsreader } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
    "A booking site built for Texas Coastal Bend fishing guides. Take bookings day or night, keep every dollar you earn, and run it all from your phone. Text Carson in Rockport for a free preview.",
  openGraph: {
    title: "Your own booking site, run from your phone",
    description:
      "A booking site built for charter captains. Take bookings day or night, keep every dollar, and run it all from your phone.",
    url: "https://aransasautomation.com",
    siteName: "Aransas Automation",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your own booking site, run from your phone",
    description:
      "A booking site built for charter captains. Take bookings day or night, keep every dollar, and run it all from your phone.",
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
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
