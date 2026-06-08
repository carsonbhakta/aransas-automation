import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aransas Automation | AI Tools for Rockport Businesses",
  description:
    "Booking websites, AI phone answering, and smarter ads for small businesses in Rockport, TX.",
  openGraph: {
    title: "Aransas Automation",
    description:
      "AI tools that actually move the needle for Rockport businesses.",
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
      className={`${inter.variable} ${fraunces.variable} scroll-smooth`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
