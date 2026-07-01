import DemoLink from "@/components/DemoLink";

// The most reassuring message on the page for this audience. Give it real estate.
export default function OwnershipBand() {
  return (
    <section className="bg-hero-bg text-hero-ink">
      <div className="mx-auto w-full max-w-[480px] px-[22px] py-[34px] lg:max-w-6xl lg:px-8 lg:py-24">
        <div className="mb-[14px] text-[11px] font-bold tracking-[0.02em] text-brand lg:mb-6 lg:text-[13px]">
          It&apos;s yours, start to finish
        </div>
        <div className="lg:grid lg:grid-cols-[1.35fr_1fr] lg:items-end lg:gap-16">
          <p className="mb-4 font-display text-[25px] font-medium leading-[1.22] tracking-[-0.01em] lg:mb-0 lg:text-[38px]">
            I build the whole thing and set it all up for you. You don&apos;t touch
            anything technical. It&apos;s your site, your name, your customers, your
            money.
          </p>
          <div>
            <p className="text-[15px] leading-[1.5] text-hero-sub lg:text-[17px]">
              Built right here in Rockport by someone who knows the bay. No call
              center, no big company. The live demo is a real working site, not a
              slideshow, so you can see exactly what you&apos;d get.
            </p>
            <div className="mt-5">
              <DemoLink placement="ownership" className="w-full lg:w-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
