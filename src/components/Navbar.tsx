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
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const id = window.setTimeout(() => setMounted(true), 0);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 px-4 py-4 pointer-events-none md:px-8">
        <div className="section-inner flex items-center justify-between gap-3 pointer-events-auto">
          <button
            onClick={() => setShowGame(true)}
            className="pixel-button pixel-button-alt px-3 py-2 text-left"
            aria-label="Open snake mini game"
          >
            <Terminal size={18} />
            <span className="hidden text-xs font-black uppercase leading-tight sm:block">
              M.AVATI
              <span className="block text-[9px] font-bold opacity-75">press start</span>
            </span>
          </button>

          <div className="hidden border-[3px] border-border bg-card p-1 shadow-[5px_5px_0_hsl(var(--border))] md:flex">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-4 py-2 text-xs font-black uppercase tracking-[0.14em] transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="pixel-button bg-card p-3 text-foreground"
              aria-label="Toggle theme"
            >
              {mounted && (theme === "dark" ? <Sun size={18} /> : <Moon size={18} />)}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="pixel-button bg-card p-3 text-foreground md:hidden"
              aria-label="Open navigation menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            <Link href="#contact" className="pixel-button hidden px-4 py-3 text-xs font-black uppercase sm:inline-flex">
              Hire / Collab
            </Link>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed left-4 right-4 top-24 z-50 pixel-card bg-card p-3 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="block border-b-2 border-border px-4 py-4 text-lg font-black uppercase last:border-b-0 hover:bg-primary hover:text-primary-foreground"
            >
              {item}
            </Link>
          ))}
        </div>
      )}

      {showGame && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background p-6">
          <button
            onClick={() => setShowGame(false)}
            className="pixel-button absolute right-6 top-6 p-4"
            aria-label="Close game"
          >
            <X size={24} />
          </button>

          <div className="relative aspect-square w-full max-w-md overflow-hidden pixel-card bg-card p-4">
            <SnakeGame />
          </div>

          <div className="mt-8 space-y-2 text-center">
            <h2 className="pixel-title text-3xl font-black uppercase">Snake.exe</h2>
            <p className="eyebrow">hidden mini game</p>
            <div className="pt-6 md:hidden">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground">
                Swipe to steer - avoid walls
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
