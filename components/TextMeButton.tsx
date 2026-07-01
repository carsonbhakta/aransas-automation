import { SMS_HREF } from "@/lib/site";

type Variant = "primary" | "sticky";

const styles: Record<
  Variant,
  { box: string; icon: number; text: string }
> = {
  primary: {
    box: "h-[55px] text-[17px] shadow-[0_8px_20px_rgba(0,0,0,0.22)]",
    icon: 19,
    text: "Text me for a free preview",
  },
  sticky: {
    box: "h-[50px] text-[16px] shadow-[0_6px_16px_rgba(0,0,0,0.2)]",
    icon: 18,
    text: "Text me for a free preview",
  },
};

export default function TextMeButton({
  variant = "primary",
  className = "",
  label,
}: {
  variant?: Variant;
  className?: string;
  label?: string;
}) {
  const s = styles[variant];
  return (
    <a
      href={SMS_HREF}
      className={`inline-flex w-full items-center justify-center gap-[9px] rounded-full bg-brand px-6 font-bold text-brand-ink no-underline transition-opacity hover:opacity-90 ${s.box} ${className}`}
    >
      <svg
        width={s.icon}
        height={s.icon}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 11.5a8.4 8.4 0 0 1-12 7.6L3 21l1.9-5.9A8.5 8.5 0 1 1 21 11.5z" />
      </svg>
      {label ?? s.text}
    </a>
  );
}
