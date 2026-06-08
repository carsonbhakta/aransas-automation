import CalendlyEmbed from "@/components/CalendlyEmbed";
import ContactForm from "@/components/ContactForm";

const calendlyUrl =
  process.env.NEXT_PUBLIC_CALENDLY_URL ??
  "https://calendly.com/your-link-here";

export default function BookingContact() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-14">
          <p className="text-teal text-sm font-medium uppercase tracking-widest mb-3">
            Get started
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground">
            Let&apos;s talk about your business
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Block A: Calendly */}
          <div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
              Book a free 30-minute consult
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Pick a time that works for you. We&apos;ll get on a Zoom call,
              look at your business, and give you honest recommendations.
            </p>
            <div className="rounded-xl border border-border overflow-hidden">
              <CalendlyEmbed url={calendlyUrl} />
            </div>
          </div>

          {/* Block B: Contact form */}
          <div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
              Not ready to book? Send a message.
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Tell us what&apos;s going on. We read every message and reply
              within one business day.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
