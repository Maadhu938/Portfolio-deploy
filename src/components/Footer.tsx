"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-5 pb-10 md:px-10 lg:px-16">
      <div className="section-inner border-t-2 border-border pt-8">
        <div className="pixel-card bg-card p-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-black uppercase tracking-tight">Maadhu Avati</p>
              <p className="pt-1 text-xs font-bold text-muted-foreground">Full-stack engineer in Bangalore, India.</p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://github.com/Maadhu938"
                target="_blank"
                rel="noopener noreferrer"
                className="pixel-button-sm bg-background px-4 py-2 text-xs font-black uppercase text-foreground"
              >
                Source code
              </a>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="pixel-button-sm bg-primary px-4 py-2 text-xs font-black uppercase text-primary-foreground"
              >
                Back to top <ArrowUp size={15} />
              </button>
            </div>
          </div>

          <p className="mt-6 border-t-2 border-border pt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            Copyright {currentYear} Maadhu Avati. Built with Next.js.
          </p>
        </div>
      </div>
    </footer>
  );
}
