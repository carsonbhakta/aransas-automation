// Weather framed as a trust-builder, not a hard seller. Proof this was built by
// someone who knows charters.
export default function WeatherNote() {
  return (
    <section>
      <div className="mx-auto w-full max-w-[480px] px-5 py-6 lg:max-w-4xl lg:px-8 lg:py-16">
        <div className="flex items-start gap-[13px] rounded-card border border-line bg-surface p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)] lg:items-center lg:gap-6 lg:p-8">
          <div className="flex h-[40px] w-[40px] flex-none items-center justify-center rounded-full bg-hero-bg lg:h-[64px] lg:w-[64px]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--hero-ink)"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="h-[22px] w-[22px] lg:h-[32px] lg:w-[32px]"
            >
              <path d="M4 14a5 5 0 0 1 1-9.9 6.5 6.5 0 0 1 12.3 1.6A4.2 4.2 0 0 1 18 14z" />
              <path d="M8 19l-1 2M12 19l-1 2M16 19l-1 2" />
            </svg>
          </div>
          <div>
            <div className="mb-[5px] text-[11px] font-bold tracking-[0.02em] text-brand lg:text-[13px]">
              Built by someone who knows charters
            </div>
            <p className="text-[14.5px] leading-[1.45] text-ink lg:text-[18px]">
              When the weather looks rough, those trips get flagged so nobody gets
              surprised on the dock.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
