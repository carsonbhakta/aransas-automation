const items: { label: string; path: React.ReactNode }[] = [
  {
    label: "Customers book and pay online",
    path: (
      <>
        <rect x="3" y="4" width="18" height="17" rx="2" />
        <path d="M3 9h18M8 2v4M16 2v4" />
        <path d="m9 15 2 2 4-4" />
      </>
    ),
  },
  {
    label: "Your dashboard, on your phone",
    path: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </>
    ),
  },
  {
    label: "Send invoices and extra charges",
    path: (
      <>
        <path d="M6 3h12a1 1 0 0 1 1 1v17l-3-2-2 2-2-2-2 2-2-2-3 2V4a1 1 0 0 1 1-1z" />
        <path d="M9 8h6M9 12h6" />
      </>
    ),
  },
  {
    label: "Reminder texts in your name",
    path: <path d="M21 11.5a8.4 8.4 0 0 1-12 7.6L3 21l1.9-5.9A8.5 8.5 0 1 1 21 11.5z" />,
  },
  {
    label: "Google Calendar stays in sync",
    path: (
      <>
        <path d="M3 7l3-3 3 3M6 4v9" />
        <path d="M21 17l-3 3-3-3M18 20v-9" />
      </>
    ),
  },
  {
    label: "Missed calls answered for you",
    path: (
      <>
        <rect x="9" y="3" width="6" height="11" rx="3" />
        <path d="M6 11a6 6 0 0 0 12 0M12 17v4" />
      </>
    ),
  },
  {
    label: "Rough weather flagged early",
    path: <path d="M17.5 19a4.5 4.5 0 0 0 0-9 6.5 6.5 0 0 0-12.4 1.7A4 4 0 0 0 6 19z" />,
  },
];

export default function IncludedList() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto w-full max-w-[480px] px-5 pb-[24px] pt-[28px] lg:max-w-6xl lg:px-8 lg:py-20">
        <div className="lg:text-center">
          <div className="mb-[9px] text-[11px] font-bold tracking-[0.02em] text-brand">
            Add-ons
          </div>
          <h3 className="mb-[9px] font-display text-[23px] font-medium leading-[1.12] tracking-[-0.01em] lg:mb-3 lg:text-[34px]">
            Add what you need, skip what you don&apos;t
          </h3>
          <p className="mb-[15px] text-[14px] leading-[1.5] text-ink-soft lg:mx-auto lg:mb-12 lg:max-w-xl lg:text-[16px]">
            Every one of these is optional. Each adds a flat amount to the
            monthly, and you can drop one whenever.
          </p>
        </div>

        {/* mobile: connected list. desktop: grid of cards. */}
        <div className="flex flex-col gap-px overflow-hidden rounded-card border border-line bg-line md:grid md:grid-cols-2 md:gap-3 md:border-0 md:bg-transparent lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 bg-surface px-[14px] py-[13px] md:rounded-card md:border md:border-line md:px-4 md:py-4 md:shadow-[0_1px_2px_rgba(0,0,0,0.04)] lg:px-5 lg:py-5"
            >
              <div className="flex h-[30px] w-[30px] flex-none items-center justify-center rounded-[8px] bg-[#f7e8d8] lg:h-[38px] lg:w-[38px]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#a55d20"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="lg:h-[19px] lg:w-[19px]"
                >
                  {item.path}
                </svg>
              </div>
              <span className="text-[14.5px] font-semibold text-ink lg:text-[16px]">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
