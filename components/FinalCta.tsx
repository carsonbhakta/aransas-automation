import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";
import TextMeButton from "@/components/TextMeButton";

// End on the same easy, no-risk action the page opened with.
export default function FinalCta() {
  return (
    <section className="bg-hero-bg text-hero-ink">
      <div className="mx-auto w-full max-w-[480px] px-[22px] pb-[30px] pt-8 text-center lg:max-w-3xl lg:py-24">
        <h2 className="mb-[10px] font-display text-[27px] font-medium leading-[1.12] tracking-[-0.015em] lg:mb-4 lg:text-[42px]">
          Want to see your own site, free?
        </h2>
        <p className="mb-5 text-[15px] leading-[1.5] text-hero-sub lg:mb-8 lg:text-[19px]">
          Text Carson and tell him your boat&apos;s name. He&apos;ll build you a
          free preview, no charge.
        </p>

        <div className="mx-auto max-w-md">
          <TextMeButton variant="primary" className="shadow-[0_8px_22px_rgba(0,0,0,0.28)]" />
        </div>

        <a
          href={PHONE_HREF}
          className="mt-[15px] inline-block text-[18px] font-bold tracking-[0.01em] text-hero-ink no-underline lg:mt-6 lg:text-[22px]"
        >
          {PHONE_DISPLAY}
        </a>
        <div className="mt-[3px] text-[12px] text-hero-sub lg:text-[14px]">
          Carson &middot; Rockport, Texas
        </div>
      </div>
    </section>
  );
}
