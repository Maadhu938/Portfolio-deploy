"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 pointer-events-none">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center py-8 px-6 md:px-12 lg:px-24">
        <Link href="/" className="pointer-events-auto text-xl font-bold tracking-tighter mix-blend-difference text-white">
          MA.
        </Link>
        
        <div className="flex items-center gap-12 pointer-events-auto">
          <div className="hidden md:flex gap-8 text-[10px] font-mono uppercase tracking-[0.3em] mix-blend-difference text-white">
            <Link href="#projects" className="hover:opacity-50 transition-opacity">Works</Link>
            <Link href="#about" className="hover:opacity-50 transition-opacity">About</Link>
            <Link href="#contact" className="hover:opacity-50 transition-opacity">Contact</Link>
          </div>

          {mounted && (
            <button 
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-12 h-6 flex items-center bg-fg/10 rounded-full px-1 hover:bg-fg/20 transition-colors"
              aria-label="Toggle theme"
            >
              <div className={`w-4 h-4 rounded-full bg-fg transition-transform duration-500 ${theme === 'dark' ? 'translate-x-6' : 'translate-x-0'}`} />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
