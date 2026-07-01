"use client";

import { track } from "@vercel/analytics";
import { DEMO_URL } from "@/lib/site";

/** Secondary action: open the live charter demo in a new tab. */
export default function DemoLink({
  onPhoto = false,
  className = "",
  placement = "hero",
}: {
  onPhoto?: boolean;
  className?: string;
  placement?: string;
}) {
  return (
    <a
      href={DEMO_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("demo_tap", { placement })}
      className={`inline-flex h-[50px] items-center justify-center gap-2 rounded-full border-[1.5px] px-6 text-[15px] font-semibold no-underline transition-colors ${
        onPhoto
          ? "border-white/50 text-white hover:bg-white/10"
          : "border-hero-line text-hero-ink hover:bg-white/50"
      } ${className}`}
    >
      See the live demo
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M7 17 17 7M9 7h8v8" />
      </svg>
    </a>
  );
}
