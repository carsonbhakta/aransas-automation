"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const links = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Demos", href: "/demos" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy text-white">
      <nav className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <a
          href="#"
          className="font-heading text-xl font-semibold tracking-tight hover:opacity-90 transition-opacity"
        >
          Aransas Automation
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) =>
            l.href.startsWith("/") ? (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            )
          )}
          <a
            href="#contact"
            className="ml-2 px-4 py-2 rounded-md bg-teal text-white text-sm font-medium hover:bg-teal-dark transition-colors"
          >
            Book a free consult
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-navy px-5 py-4 flex flex-col gap-4">
          {links.map((l) =>
            l.href.startsWith("/") ? (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-white/80 hover:text-white transition-colors"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-white/80 hover:text-white transition-colors"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            )
          )}
          <a
            href="#contact"
            className="mt-1 px-4 py-2 rounded-md bg-teal text-white text-sm font-medium text-center hover:bg-teal-dark transition-colors"
            onClick={() => setOpen(false)}
          >
            Book a free consult
          </a>
        </div>
      )}
    </header>
  );
}
