import Image from "next/image";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";
import TextMeButton from "@/components/TextMeButton";

// End on the same easy, no-risk action the page opened with.
// Dark band so the close lands with some weight, and the logo gets a home.
export default function FinalCta() {
  return (
    <section className="bg-deep text-white">
      <div className="mx-auto w-full max-w-[480px] px-[22px] pb-[34px] pt-9 text-center lg:max-w-3xl lg:py-24">
        <Image
          src="/images/logo.png"
          alt="Aransas Automation logo"
          width={322}
          height={154}
          className="mx-auto mb-5 h-auto w-[72px] lg:mb-7 lg:w-[92px]"
        />
        <h2 className="mb-[10px] font-display text-[27px] font-medium leading-[1.12] tracking-[-0.015em] lg:mb-4 lg:text-[42px]">
          Want to see your own site, free?
        </h2>
        <p className="mb-5 text-[15px] leading-[1.5] text-white/75 lg:mb-8 lg:text-[19px]">
          Text Carson and tell him your boat&apos;s name. He&apos;ll build you a
          free preview, no charge.
        </p>

        <div className="mx-auto max-w-md" data-hide-sticky>
          <TextMeButton
            variant="primary"
            placement="final"
            className="shadow-[0_8px_22px_rgba(0,0,0,0.35)]"
          />
        </div>

        <a
          href={PHONE_HREF}
          className="mt-[15px] inline-block text-[18px] font-bold tracking-[0.01em] text-[#efe9d0] no-underline lg:mt-6 lg:text-[22px]"
        >
          {PHONE_DISPLAY}
        </a>
        <div className="mt-[3px] text-[12px] text-white/60 lg:text-[14px]">
          Carson &middot; Rockport, Texas
        </div>
      </div>
    </section>
  );
}
