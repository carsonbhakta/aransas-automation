import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

// ─────────────────────────────────────────────────────────────────────────────
// Drop demo photos into public/demos/ using the filenames below.
// Recommended size: roughly 4:3, at least 900px wide.
//   - charter.jpg  → Rockport Bay Charters
//   - rv.jpg       → Redfish Bay RV Resort
//   - custom.jpg   → generic "your business" photo (workshop, storefront, etc.)
// ─────────────────────────────────────────────────────────────────────────────
const demos = [
  {
    badge: "Fishing Charter",
    live: true,
    name: "Rockport Bay Charters",
    description:
      "Customers browse trips, pick an open time slot, and pay a deposit online in a couple of minutes. Built for a one-person charter operation, no phone tag and no platform taking a cut of every booking.",
    cta: "View live demo",
    url: "https://rockport-bay-charters-demov1.vercel.app",
    external: true,
    image: "/demos/charter.jpg",
    bg: "bg-navy",
    imageSide: "left" as const,
  },
  {
    badge: "RV Park",
    live: true,
    name: "Redfish Bay RV Resort",
    description:
      "Guests pick check-in and check-out dates, choose a site type, and pay a deposit online. The owner gets a private dashboard showing every reservation and upcoming arrival. Replaces reservation platforms that take 5 to 10 percent of every booking.",
    cta: "View live demo",
    url: "https://redfish-bay-rv-resort.vercel.app",
    external: true,
    image: "/demos/rv.jpg",
    bg: "bg-teal-dark",
    imageSide: "right" as const,
  },
  {
    badge: "Your business here",
    live: false,
    name: "Get a custom demo built for free",
    description:
      "Tell us how your business takes bookings today and we'll put together a working demo like these, built around how you actually operate. No cost and no commitment to see it.",
    cta: "Get your free demo",
    url: "/#contact",
    external: false,
    image: "/demos/custom.jpg",
    bg: "bg-amber-600",
    imageSide: "left" as const,
  },
];

export default function DemosPage() {
  return (
    <div className="min-h-screen bg-offwhite">
      <Nav />

      {/* Header */}
      <header className="max-w-6xl mx-auto px-5 pt-28 pb-16 text-center">
        <p className="text-sm font-semibold tracking-widest text-teal uppercase mb-3">
          Live demos
        </p>
        <h1 className="font-heading text-4xl md:text-5xl font-semibold text-navy mb-5">
          See what we build
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Every demo below is a real, working system, not a mockup. Click through
          and try it yourself, or tell us about your business and we&apos;ll build
          one for you.
        </p>
      </header>

      {/* Demo cards */}
      <main className="max-w-5xl mx-auto px-5 pb-24 flex flex-col gap-8">
        {demos.map((demo) => (
          <div
            key={demo.name}
            className={`${demo.bg} rounded-2xl p-6 md:p-10 flex flex-col gap-8 md:gap-12 items-center ${
              demo.imageSide === "right" ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            {/* Photo */}
            <div className="relative w-full md:w-2/5 aspect-[4/3] rounded-xl overflow-hidden flex-shrink-0 bg-black/10">
              <Image
                src={demo.image}
                alt={demo.name}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>

            {/* Copy */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                {demo.live && (
                  <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
                )}
                <span className="text-xs font-semibold tracking-widest uppercase text-white/70">
                  {demo.badge}
                </span>
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-white mb-4">
                {demo.name}
              </h2>
              <p className="text-white/75 leading-relaxed mb-6">
                {demo.description}
              </p>

              {demo.external ? (
                <a
                  href={demo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all"
                >
                  {demo.cta}
                  <ArrowRight size={18} strokeWidth={2.5} />
                </a>
              ) : (
                <Link
                  href={demo.url}
                  className="inline-flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all"
                >
                  {demo.cta}
                  <ArrowRight size={18} strokeWidth={2.5} />
                </Link>
              )}
            </div>
          </div>
        ))}
      </main>

      <Footer />
    </div>
  );
}
