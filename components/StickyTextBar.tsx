import TextMeButton from "@/components/TextMeButton";

// Persistent tap-to-text action, always one thumb-tap away as he scrolls.
export default function StickyTextBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-bg px-[14px] pt-[10px] shadow-[0_-6px_20px_rgba(20,30,35,0.1)]"
      style={{ paddingBottom: "calc(10px + env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto w-full max-w-[480px]">
        <TextMeButton variant="sticky" />
      </div>
    </div>
  );
}
