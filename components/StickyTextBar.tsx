"use client";

import { useEffect, useState } from "react";
import TextMeButton from "@/components/TextMeButton";

// Persistent tap-to-text action, always one thumb-tap away as he scrolls.
// Slides out of the way whenever a primary CTA is already on screen
// (elements marked with data-hide-sticky), so the page never shows the
// same button twice in a row.
export default function StickyTextBar() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll("[data-hide-sticky]"));
    if (targets.length === 0) return;

    const visible = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target);
          else visible.delete(entry.target);
        }
        setHidden(visible.size > 0);
      },
      { threshold: 0.35 }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`pointer-events-none fixed inset-x-0 bottom-0 z-50 border-t border-line bg-bg px-[14px] pt-[10px] shadow-[0_-6px_20px_rgba(20,30,35,0.1)] transition-transform duration-300 lg:border-0 lg:bg-transparent lg:shadow-none ${
        hidden ? "translate-y-[120%]" : "translate-y-0"
      }`}
      style={{ paddingBottom: "calc(10px + env(safe-area-inset-bottom))" }}
    >
      <div className="pointer-events-auto mx-auto w-full max-w-[480px] lg:max-w-[360px]">
        <TextMeButton
          variant="sticky"
          placement="sticky"
          className="lg:shadow-[0_10px_28px_rgba(10,35,42,0.4)]"
        />
      </div>
    </div>
  );
}
