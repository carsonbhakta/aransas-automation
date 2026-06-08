import { Globe2, Phone, BarChart2 } from "lucide-react";

const services = [
  {
    icon: Globe2,
    title: "Booking Websites & Reservation Systems",
    description:
      "A clean, fast website with built-in booking or reservations, so customers can lock in dates without a phone call. Ideal for charters, rentals, salons, and restaurants.",
  },
  {
    icon: Phone,
    title: "AI Phone Answering",
    description:
      "An AI assistant that answers calls 24/7, books appointments, and answers common questions, so you never miss a customer because you were busy or closed.",
  },
  {
    icon: BarChart2,
    title: "Ad Creation & Optimization",
    description:
      "We draft and test multiple ad variations using AI audience modeling, then launch and refine them with real spend to see what actually works.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-14">
          <p className="text-teal text-sm font-medium uppercase tracking-widest mb-3">
            What we build
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground">
            Three ways we help local businesses grow
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="bg-card rounded-xl border border-border p-8 flex flex-col gap-5 hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 rounded-lg bg-teal/10 flex items-center justify-center">
                  <Icon size={22} className="text-teal" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
