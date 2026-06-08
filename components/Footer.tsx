export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white/60 py-10">
      <div className="max-w-6xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3 text-center sm:text-left">
          <span className="font-heading text-white text-base font-medium">
            Aransas Automation
          </span>
          <span className="hidden sm:inline text-white/30">·</span>
          <span>Serving Rockport, TX</span>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="mailto:hello@aransasautomation.com"
            className="hover:text-white transition-colors"
          >
            carsonbhakta@icloud.com
          </a>
          <a
            href="#contact"
            className="hover:text-white transition-colors"
          >
            Book a consult
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 mt-6 text-center text-xs text-white/30">
        &copy; {year} Aransas Automation. All rights reserved.
      </div>
    </footer>
  );
}
