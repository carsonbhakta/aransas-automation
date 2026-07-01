const stripe =
  "repeating-linear-gradient(45deg,#eef4f0 0 11px,#e6efe9 11px 22px)";

const SECTION = "mx-auto w-full max-w-[480px] px-5 lg:max-w-6xl lg:px-8";
const GRID = "grid gap-4 lg:grid-cols-2 lg:items-center lg:gap-16";

function Eyebrow({ children }: { children: string }) {
  return (
    <div className="mb-[9px] text-[11px] font-bold tracking-[0.02em] text-brand">
      {children}
    </div>
  );
}

function Heading({ children }: { children: string }) {
  return (
    <h3 className="mb-[9px] font-display text-[23px] font-medium leading-[1.12] tracking-[-0.01em] lg:mb-3 lg:text-[32px]">
      {children}
    </h3>
  );
}

function Body({ children }: { children: string }) {
  return (
    <p className="text-[15px] leading-[1.5] text-ink-soft lg:text-[17px]">
      {children}
    </p>
  );
}

function PhotoPlaceholder({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div
      className="relative flex h-[172px] w-full flex-col items-center justify-center gap-[9px] overflow-hidden rounded-card border border-dashed border-[#b6cabf] lg:h-[300px]"
      style={{ background: stripe }}
    >
      <div className="flex h-[42px] w-[42px] items-center justify-center rounded-[11px] bg-white shadow-[0_2px_6px_rgba(0,0,0,0.08)]">
        {icon}
      </div>
      <div className="text-[12px] font-bold text-[#4f6862]">{label}</div>
      <div className="text-[10px] tracking-[0.03em] text-[#8aa39a]">
        Placeholder, swap in real photo
      </div>
    </div>
  );
}

export default function Pillars() {
  return (
    <>
      {/* Pillar 1 — the website */}
      <section className="border-b border-line">
        <div className={`${SECTION} pb-[22px] pt-[26px] lg:py-20`}>
          <div className={GRID}>
            <div>
              <Eyebrow>Bookings</Eyebrow>
              <Heading>A custom booking site, built just for you</Heading>
              <Body>
                We design and build your own site, branded to your charter. It
                takes bookings day or night and collects a deposit up front, so no
                more no-shows and no more chasing people for money.
              </Body>
            </div>

            <div className="flex flex-col gap-[13px]">
              <PhotoPlaceholder
                label="Your website on a laptop"
                icon={
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="12" rx="2" />
                    <path d="M2 20h20" />
                  </svg>
                }
              />
              <div className="flex items-center gap-[11px] rounded-card border border-line bg-surface p-[13px] shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                <div className="flex h-[34px] w-[34px] flex-none items-center justify-center rounded-full bg-[#dcf2e6]">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#13794f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12.5l4.5 4.5L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-[13.5px] font-bold">New booking, deposit paid</div>
                  <div className="text-[12px] text-ink-soft">
                    Bay Fishing &middot; Sat 6:00 AM &middot; while you slept
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 2 — the money (visual on the left at desktop) */}
      <section className="border-b border-line">
        <div className={`${SECTION} pb-[22px] pt-[26px] lg:py-20`}>
          <div className={GRID}>
            <div className="lg:order-2">
              <Eyebrow>Your money</Eyebrow>
              <Heading>Keep every dollar you earn</Heading>
              <Body>
                No fee on a single booking. Unlike FishingBooker and the big sites,
                nobody skims a cut off your trips. You see every order and payment
                right on your phone.
              </Body>
            </div>

            <div className="flex flex-col gap-[13px] lg:order-1">
              <PhotoPlaceholder
                label="Orders page on your dashboard"
                icon={
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M7 4h10a2 2 0 0 1 2 2v14l-3-2-2 2-2-2-2 2-2-2-3 2V6a2 2 0 0 1 2-2z" />
                    <path d="M9 8h6M9 12h6" />
                  </svg>
                }
              />
              <div className="flex gap-[9px]">
                <div className="flex-1 rounded-card border border-line bg-surface px-[13px] py-3 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                  <div className="font-display text-[21px] font-extrabold text-brand">$0</div>
                  <div className="mt-0.5 text-[11.5px] leading-[1.35] text-ink-soft">
                    Booking fee with us. You keep 100%.
                  </div>
                </div>
                <div className="flex-1 rounded-card border border-line bg-surface px-[13px] py-3 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                  <div className="font-display text-[21px] font-extrabold text-[#9aa9aa] line-through">
                    ~20%
                  </div>
                  <div className="mt-0.5 text-[11.5px] leading-[1.35] text-ink-soft">
                    What FishingBooker can take per trip.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 3 — SMS + reviews */}
      <section className="border-b border-line">
        <div className={`${SECTION} pb-[22px] pt-[26px] lg:py-20`}>
          <div className={GRID}>
            <div>
              <Eyebrow>SMS and email alerts</Eyebrow>
              <Heading>Reminders, weather, and reviews, all handled</Heading>
              <Body>
                Your customers get a reminder before the trip, a heads-up if the
                weather turns, and a thank-you after that asks for a Google review.
                All automatic, all in your name.
              </Body>
            </div>

            <div className="flex flex-col gap-[13px]">
              <div>
                <div className="mb-1 ml-0.5 text-[9.5px] font-bold uppercase tracking-[0.08em] text-ink-soft">
                  Pre-trip reminder
                </div>
                <div className="max-w-[84%] rounded-[14px_14px_14px_4px] border border-line bg-surface px-3 py-[10px] text-[12.5px] text-ink shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                  Reminder: your Bay Fishing Trip is Saturday at 6:00 AM. Reply C to
                  confirm.
                </div>
              </div>

              <div>
                <div className="mb-1 ml-0.5 text-[9.5px] font-bold uppercase tracking-[0.08em] text-ink-soft">
                  Weather update
                </div>
                <div className="max-w-[88%] rounded-[14px_14px_14px_4px] border border-[#f0dcb6] bg-[#fbeede] px-3 py-[10px] text-[12.5px] text-[#6b4d18] shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                  Heads up, winds 22 mph Sunday morning. Want to move your trip? Just
                  reply and we&apos;ll sort it out.
                </div>
              </div>

              <div>
                <div className="mb-1 ml-0.5 text-[9.5px] font-bold uppercase tracking-[0.08em] text-ink-soft">
                  Review request
                </div>
                <div className="rounded-card border border-line bg-surface px-3 py-[11px] shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                  <div className="mb-[7px] text-[12.5px] text-ink">
                    Thanks for fishing with us, John! Mind leaving a quick Google
                    review?
                  </div>
                  <div className="flex items-center gap-[7px] border-t border-line pt-[7px]">
                    <span className="text-[13px] tracking-[2px] text-[#E6A400]">
                      &#9733;&#9733;&#9733;&#9733;&#9733;
                    </span>
                    <span className="text-[11px] text-ink-soft">Posts straight to Google</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
