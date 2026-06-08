import Link from "next/link";
import { ExternalLink, Calendar, CreditCard, Mail, LayoutDashboard, Clock } from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// When you deploy a demo to Vercel, update the `url` field here.
// Everything else on the page updates automatically.
// ─────────────────────────────────────────────────────────────────────────────
const demos = [
  {
    status: "live" as const,
    category: "Fishing Charter",
    name: "Rockport Bay Charters",
    tagline: "Custom booking system for an inshore fishing guide",
    description:
      "A full-service booking platform built for a one-person charter operation. Customers browse trips, pick an open time slot, and pay a deposit online in a couple of minutes. No phone tag, no third-party platform taking 6%.",
    url: "https://rockport-bay-charters-demov1.vercel.app",
    features: [
      { icon: CreditCard,      label: "Stripe deposit payments" },
      { icon: Mail,            label: "Automated booking emails" },
      { icon: LayoutDashboard, label: "Owner admin dashboard" },
    ],
  },
  {
    status: "coming-soon" as const,
    category: "RV Park",
    name: "RV & Campground",
    tagline: "Online reservations for campgrounds and RV parks",
    description:
      "Site-map based reservations, seasonal pricing, length-of-stay rules, and a guest portal for check-in details. Replaces reservation platforms that charge 5-10% per booking.",
    url: null,
    features: [
      { icon: Calendar,        label: "Site-map reservation calendar" },
      { icon: CreditCard,      label: "Nightly rate + deposit payments" },
      { icon: Mail,            label: "Check-in detail emails" },
      { icon: LayoutDashboard, label: "Occupancy dashboard" },
    ],
  },
  {
    status: "coming-soon" as const,
    category: "Trades",
    name: "Plumbing / HVAC",
    tagline: "Service call booking for local tradespeople",
    description:
      "Customers book service calls or request quotes online. Jobs route to your calendar, automated reminders go out to customers, and you see your full schedule in one place.",
    url: null,
    features: [
      { icon: Clock,           label: "Service window scheduling" },
      { icon: CreditCard,      label: "Deposit or full payment upfront" },
      { icon: Mail,            label: "Automated reminders" },
      { icon: LayoutDashboard, label: "Job management dashboard" },
    ],
  },
];

export default function DemosPage() {
  return (
    <div className="min-h-screen bg-offwhite">
      {/* Simple back link — no full nav since this page is linked from the homepage */}
      <div className="max-w-6xl mx-auto px-5 pt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back to Aransas Automation
        </Link>
      </div>

      {/* Header */}
      <header className="max-w-6xl mx-auto px-5 pt-14 pb-16 text-center">
        <p className="text-sm font-semibold tracking-widest text-teal uppercase mb-3">
          Live demos
        </p>
        <h1 className="font-heading text-4xl md:text-5xl font-semibold text-navy mb-5">
          See what we build
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Every demo is a real, working system — not a mockup. Click through,
          make a booking, see what the owner dashboard looks like. This is
          exactly what we build for your business.
        </p>
      </header>

      {/* Demo cards */}
      <main className="max-w-6xl mx-auto px-5 pb-24">
        <div className="grid md:grid-cols-3 gap-6">
          {demos.map((demo) => (
            <div
              key={demo.name}
              className="bg-white rounded-2xl border border-border shadow-sm flex flex-col overflow-hidden"
            >
              {/* Card header band */}
              <div className="bg-navy px-6 py-5">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold tracking-widest text-teal uppercase">
                    {demo.category}
                  </span>
                  {demo.status === "live" ? (
                    <span className="flex items-center gap-1.5 text-xs font-medium text-green-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                      Live
                    </span>
                  ) : (
                    <span className="text-xs font-medium text-white/40">
                      Coming soon
                    </span>
                  )}
                </div>
                <h2 className="font-heading text-xl font-semibold text-white">
                  {demo.name}
                </h2>
                <p className="text-white/60 text-sm mt-1">{demo.tagline}</p>
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 px-6 py-5 gap-5">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {demo.description}
                </p>

                {/* Feature list */}
                <ul className="flex flex-col gap-2.5">
                  {demo.features.map(({ icon: Icon, label }) => (
                    <li key={label} className="flex items-center gap-2.5 text-sm text-foreground">
                      <Icon size={15} className="text-teal flex-shrink-0" strokeWidth={2} />
                      {label}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-auto pt-2">
                  {demo.status === "live" && demo.url ? (
                    <a
                      href={demo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg bg-teal text-white text-sm font-medium hover:bg-teal-dark transition-colors"
                    >
                      View live demo
                      <ExternalLink size={14} strokeWidth={2} />
                    </a>
                  ) : (
                    <div className="flex items-center justify-center w-full px-4 py-2.5 rounded-lg bg-muted text-muted-foreground text-sm font-medium cursor-default">
                      In development
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-sm text-muted-foreground mt-12">
          Want a custom system for your business?{" "}
          <Link href="/#contact" className="text-teal hover:underline font-medium">
            Get in touch
          </Link>
        </p>
      </main>
    </div>
  );
}
