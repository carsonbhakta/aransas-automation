const steps = [
  {
    number: "01",
    title: "Free consult",
    description:
      "We look at your business together and find the highest-impact opportunities. That includes off-the-shelf AI tools you can start using yourself, no contract required.",
  },
  {
    number: "02",
    title: "Simple proposal",
    description:
      "Clear scope, clear price. No jargon, no surprise fees. If it doesn't make sense for your business right now, we'll tell you.",
  },
  {
    number: "03",
    title: "Build, launch, and keep it running",
    description:
      "We handle the setup and stay available after launch. You get a tool that works, not a handoff and a good luck.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-navy text-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-14">
          <p className="text-teal text-sm font-medium uppercase tracking-widest mb-3">
            The process
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold">
            How it works
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col gap-4">
              <span className="font-heading text-5xl font-semibold text-teal/40 leading-none">
                {step.number}
              </span>
              <h3 className="font-heading text-xl font-semibold">{step.title}</h3>
              <p className="text-white/65 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
