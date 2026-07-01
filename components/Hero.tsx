import Image from "next/image";
import { SMS_HREF } from "@/lib/site";
import TextMeButton from "@/components/TextMeButton";
import DemoLink from "@/components/DemoLink";

// Fallback shown only if the water photo fails to load.
const heroGradient =
  "radial-gradient(130% 85% at 28% 0%, #84c8d3 0%, rgba(132,200,211,0) 55%), linear-gradient(180deg, #2f8aa0 0%, #14627a 50%, #0b4859 100%)";

const HEADLINE = "Your own booking site, run from your phone.";
const SUBHEAD =
  "Take bookings day or night, keep every dollar you earn, and never lose a trip to phone tag again.";

function DashboardPhone({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/images/owner-dashboard.png"
      alt="The owner dashboard on a phone, showing the next trip, trips booked this week, and the week's revenue."
      width={908}
      height={1638}
      priority
      sizes="(min-width: 1024px) 320px, 248px"
      className={className}
    />
  );
}

function Badge({ className = "" }: { className?: string }) {
  return (
    <div
      className={`inline-block rounded-full bg-sand px-[11px] py-1 text-[11px] font-bold tracking-[0.02em] text-white shadow-[0_1px_8px_rgba(6,30,38,0.25)] lg:px-3 lg:py-1.5 lg:text-[13px] ${className}`}
    >
      For Texas Coastal Bend captains
    </div>
  );
}

export default function Hero() {
  return (
    <section className="bg-hero-bg text-hero-ink">
      {/* top bar */}
      <div className="mx-auto flex w-full max-w-[480px] items-center justify-between px-5 pb-2 pt-4 lg:max-w-6xl lg:px-8 lg:pt-6">
        <div className="flex items-center gap-[10px]">
          <div className="flex h-[38px] w-[38px] flex-none items-center justify-center rounded-[10px] bg-deep lg:h-[44px] lg:w-[44px] lg:rounded-[12px]">
            <Image
              src="/images/logo.png"
              alt=""
              width={322}
              height={154}
              priority
              className="h-auto w-[27px] lg:w-[31px]"
            />
          </div>
          <div className="flex flex-col leading-[1.05]">
            <span className="font-display text-[17px] font-medium tracking-[0.005em] lg:text-[20px]">
              Aransas Automation
            </span>
            <span className="mt-0.5 text-[10px] tracking-[0.02em] text-hero-sub lg:text-[11px]">
              Rockport, Texas
            </span>
          </div>
        </div>
        <a
          href={SMS_HREF}
          className="rounded-full border-[1.5px] border-hero-line px-[13px] py-[7px] text-[13px] font-bold text-hero-ink no-underline transition-colors hover:bg-white/50 lg:px-4 lg:py-2 lg:text-[14px]"
        >
          Text me
        </a>
      </div>

      {/* ---------- MOBILE / TABLET hero ---------- */}
      <div className="lg:hidden">
        <div
          className="relative mt-2 h-[332px] overflow-hidden"
          style={{ background: heroGradient }}
        >
          <Image
            src="/images/hero-water.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(8,40,50,.15) 0%, rgba(8,40,50,0) 30%, rgba(8,40,50,.35) 62%, rgba(8,40,50,.82) 100%)",
            }}
          />
          <div className="relative mx-auto h-full w-full max-w-[480px] px-5">
            <div className="absolute inset-x-5 bottom-[22px] z-[2]">
              <Badge className="mb-3" />
              <h1 className="mb-[11px] font-display text-[33px] font-medium leading-[1.08] tracking-[-0.015em] text-white [text-shadow:0_1px_16px_rgba(6,30,38,0.45)]">
                {HEADLINE}
              </h1>
              <p className="text-[16px] leading-[1.5] text-white/90 [text-shadow:0_1px_10px_rgba(6,30,38,0.4)]">
                {SUBHEAD}
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[480px] px-5 pb-[30px] pt-5">
          <DashboardPhone className="mx-auto mb-2 h-auto w-[248px] drop-shadow-[0_16px_30px_rgba(16,40,45,0.28)]" />
          <div className="my-[14px] mb-5 text-center text-[12px] text-hero-sub">
            Your bookings and your money, all on your phone.
          </div>
          <div data-hide-sticky>
            <TextMeButton variant="primary" placement="hero" />
            <div className="mt-[11px]">
              <DemoLink className="w-full" placement="hero" />
            </div>
          </div>
          <div className="mt-[13px] text-center text-[12px] text-hero-sub">
            Free preview of your own site. No charge, no commitment.
          </div>
        </div>
      </div>

      {/* ---------- DESKTOP hero (full-bleed photo, two columns) ---------- */}
      <div
        className="relative mt-4 hidden overflow-hidden lg:block"
        style={{ background: heroGradient }}
      >
        <Image
          src="/images/hero-water.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(8,40,50,.82) 0%, rgba(8,40,50,.55) 42%, rgba(8,40,50,.2) 100%), linear-gradient(180deg, rgba(8,40,50,0) 55%, rgba(8,40,50,.45) 100%)",
          }}
        />

        <div className="relative mx-auto grid min-h-[600px] max-w-6xl grid-cols-[1.05fr_0.95fr] items-center gap-12 px-8 py-20">
          <div className="max-w-xl">
            <Badge className="mb-5" />
            <h1 className="mb-5 font-display text-[54px] font-medium leading-[1.04] tracking-[-0.02em] text-white [text-shadow:0_2px_24px_rgba(6,30,38,0.5)]">
              {HEADLINE}
            </h1>
            <p className="max-w-lg text-[20px] leading-[1.5] text-white/90 [text-shadow:0_1px_12px_rgba(6,30,38,0.45)]">
              {SUBHEAD}
            </p>
            <div className="mt-9 flex items-center gap-4" data-hide-sticky>
              <TextMeButton variant="primary" placement="hero" className="w-auto px-9" />
              <DemoLink onPhoto placement="hero" />
            </div>
            <div className="mt-5 text-[13px] text-white/80">
              Free preview of your own site. No charge, no commitment.
            </div>
          </div>

          <div className="flex justify-center">
            <DashboardPhone className="h-auto w-[320px] drop-shadow-[0_28px_50px_rgba(6,25,30,0.5)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
