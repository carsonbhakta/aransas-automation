// One honest, plain pricing line. Flat fee, no cut of his bookings.
export default function Pricing() {
  return (
    <section>
      <div className="mx-auto w-full max-w-[480px] px-5 py-6 text-center lg:max-w-3xl lg:py-20">
        <div className="mb-2 text-[11px] font-bold tracking-[0.02em] text-brand lg:mb-4 lg:text-[13px]">
          Plain pricing
        </div>
        <p className="text-[17px] font-semibold leading-[1.45] text-ink lg:text-[24px] lg:leading-[1.4]">
          One setup fee to build it. Then a flat monthly that runs less than
          what one trip brings in. Add-ons are flat too. Nobody takes a cut of
          your bookings, so the busier your season, the more you keep.
        </p>
      </div>
    </section>
  );
}
