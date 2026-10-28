"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, Moon, Sun, Terminal, X } from "lucide-react";
import SnakeGame from "./SnakeGame";

const navItems = ["Projects", "About", "Skills", "Contact"];

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showGame, setShowGame] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    if (resolvedTheme) {
      document.documentElement.setAttribute("data-theme", resolvedTheme);
    }
  }, [resolvedTheme]);

  const toggleTheme = () => {
    const next = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
  };

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 px-3 py-3 pointer-events-none sm:px-4 sm:py-4 md:px-8">
        <div className="section-inner pointer-events-auto">
          <div className="clay-nav-bar flex items-center justify-between gap-2 sm:gap-3">
            {/* Logo/brand pill: neutral surface, one line text "Maadhu Avati" */}
            <button
              onClick={() => setShowGame(true)}
              className="clay-btn px-3 py-1.5 sm:px-4 sm:py-2 text-left shrink-0"
              aria-label="Open mini game"
            >
              <Terminal size={17} className="text-current shrink-0" />
              <span className="text-xs sm:text-sm font-bold tracking-tight whitespace-nowrap">
                Maadhu Avati
              </span>
            </button>

            <div className="nav-links-desktop clay-nav items-center">
              {navItems.map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="clay-nav-link"
                >
                  {item}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* Theme toggle: round clay button */}
              <button
                onClick={toggleTheme}
                className="clay-round text-current"
                aria-label="Toggle theme"
              >
                {mounted ? (
                  resolvedTheme === "dark" ? (
                    <Sun size={19} className="text-current" />
                  ) : (
                    <Moon size={19} className="text-current" />
                  )
                ) : (
                  <span className="w-5 h-5" />
                )}
              </button>

              {/* Hamburger button: strictly mobile only */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="clay-round text-current nav-mobile-toggle"
                aria-label="Open navigation menu"
              >
                {isOpen ? <X size={20} className="text-current" /> : <Menu size={20} className="text-current" />}
              </button>

              {/* Primary button: coral, "Contact me" (strictly tablet/desktop only, hidden on mobile) */}
              <Link
                href="#contact"
                className="clay-btn clay-coral clay-btn-colored nav-contact-desktop px-6 py-3 text-xs font-bold uppercase"
              >
                Contact me
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile navigation drawer with backdrop */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs md:!hidden pointer-events-auto"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div className="fixed left-3 right-3 top-20 z-50 clay-card p-4 md:!hidden pointer-events-auto shadow-2xl sm:left-4 sm:right-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="clay-btn px-4 py-3 text-sm font-semibold justify-start text-fg"
                >
                  {item}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="clay-btn clay-coral clay-btn-colored px-4 py-3 text-sm font-bold uppercase justify-center mt-2"
              >
                Contact me
              </Link>
            </div>
          </div>
        </>
      )}

      {showGame && (
        <div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center p-6"
          style={{
            background: "color-mix(in srgb, var(--bg) 92%, transparent)",
            backdropFilter: "blur(12px)",
          }}
        >
          <button
            onClick={() => setShowGame(false)}
            className="clay-round absolute right-6 top-6 text-current"
            aria-label="Close game"
          >
            <X size={24} className="text-current" />
          </button>

          <div className="relative aspect-square w-full max-w-md clay-card p-4">
            <SnakeGame />
          </div>

          <div className="mt-8 space-y-2 text-center">
            <h2 className="font-display text-3xl font-bold">Snake</h2>
            <p className="eyebrow">Mini game</p>
            <div className="pt-4 md:hidden">
              <p className="text-xs font-semibold text-muted-foreground">
                Swipe to steer
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
