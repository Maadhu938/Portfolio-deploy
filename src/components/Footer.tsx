"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-3 pb-8 sm:px-4 sm:pb-12 md:px-8">
      <div className="section-inner">
        <div className="clay-card">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-lg font-bold tracking-tight">Maadhu Avati</p>
              <p className="pt-1 text-sm font-medium text-muted-foreground">
                Full-stack engineer in Bangalore, India.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://github.com/Maadhu938"
                target="_blank"
                rel="noopener noreferrer"
                className="clay-btn px-5 py-3 text-xs font-semibold uppercase"
              >
                Source code
              </a>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="clay-btn clay-coral clay-btn-colored px-5 py-3 text-xs font-bold uppercase"
              >
                Back to top <ArrowUp size={16} className="text-current" />
              </button>
            </div>
          </div>

          <p
            className="mt-6 pt-4 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground"
            style={{
              borderTop: "1px solid color-mix(in srgb, var(--muted) 20%, transparent)",
            }}
          >
            © {currentYear} Maadhu Avati. Built with Next.js.
          </p>
        </div>
      </div>
    </footer>
  );
}
