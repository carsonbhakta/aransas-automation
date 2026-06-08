export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center bg-navy"
      style={{
        backgroundImage: "url('/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      aria-label="Hero"
    >
      {/* Dark overlay — tints photo to navy palette. Also acts as background when no photo is present. */}
      <div className="absolute inset-0 bg-navy/80" />

      <div className="relative z-10 max-w-3xl mx-auto px-5 text-center text-white">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight mb-6">
          AI tools that actually move the needle for local businesses.
        </h1>

        <p className="text-white/75 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
          Booking websites, AI phone answering, and smarter ads, built for
          business owners in Rockport who don&apos;t have time to figure out the tech.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="px-7 py-3.5 rounded-md bg-teal text-white font-medium text-base hover:bg-teal-dark transition-colors"
          >
            Book a free 30-minute consult
          </a>
          <a
            href="#services"
            className="px-7 py-3.5 rounded-md border border-white/40 text-white font-medium text-base hover:bg-white/10 transition-colors"
          >
            See what we do
          </a>
        </div>
      </div>
    </section>
  );
}
