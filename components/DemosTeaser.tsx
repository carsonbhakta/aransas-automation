import Link from "next/link";
import { ArrowRight, CreditCard, Calendar, Mail } from "lucide-react";

const highlights = [
  { icon: CreditCard, text: "Online booking with Stripe payments" },
  { icon: Calendar,   text: "Google Calendar sync" },
  { icon: Mail,       text: "Automated email confirmations" },
];

export default function DemosTeaser() {
  return (
    <section className="bg-navy py-20">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <div>
            <p className="text-sm font-semibold tracking-widest text-teal uppercase mb-3">
              See it in action
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-5 leading-snug">
              A real booking system.
              <br />Not a mockup.
            </h2>
            <p className="text-white/65 leading-relaxed mb-8">
              Our fishing charter demo is a fully working site. You can browse trips,
              pick a time, pay a deposit, and watch a calendar event appear on the
              owner&apos;s Google Calendar in real time. This is what we build for your
              business.
            </p>
            <Link
              href="/demos"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-teal text-white font-medium text-sm hover:bg-teal-dark transition-colors"
            >
              Browse live demos
              <ArrowRight size={15} strokeWidth={2.5} />
            </Link>
          </div>

          {/* Right: feature chips */}
          <div className="flex flex-col gap-4">
            {highlights.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-5 py-4"
              >
                <div className="w-9 h-9 rounded-lg bg-teal/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={17} className="text-teal" strokeWidth={2} />
                </div>
                <span className="text-white/85 text-sm font-medium">{text}</span>
              </div>
            ))}
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-5 py-4">
              <div className="w-9 h-9 rounded-lg bg-teal/20 flex items-center justify-center flex-shrink-0">
                <span className="text-teal font-bold text-sm">0%</span>
              </div>
              <span className="text-white/85 text-sm font-medium">
                No platform fee — you keep what FareHarbor takes
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
