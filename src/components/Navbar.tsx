"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X, Terminal } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:py-6 pointer-events-none">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between pointer-events-auto">
        
        {/* Logo / Terminal */}
        <Link href="/" className="bento-card !p-3 !rounded-2xl flex items-center gap-3 group bg-background/80 backdrop-blur-md">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground group-hover:rotate-12 transition-transform">
             <Terminal size={18} />
          </div>
          <span className="font-bold tracking-tighter text-lg uppercase hidden sm:block">M.AVATI</span>
        </Link>

        {/* Links Bento */}
        <div className="hidden md:flex bento-card !p-2 !rounded-2xl gap-1 bg-background/80 backdrop-blur-md">
          {['Projects', 'About', 'Contact'].map((item) => (
            <Link 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-6 py-2 rounded-xl text-sm font-medium hover:bg-muted transition-colors opacity-70 hover:opacity-100"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Actions Bento */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="bento-card !p-3 !rounded-2xl hover:bg-muted transition-colors bg-background/80 backdrop-blur-md shadow-sm"
            aria-label="Toggle Theme"
          >
            {mounted && (theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />)}
          </button>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden bento-card !p-3 !rounded-2xl bg-background/80 backdrop-blur-md shadow-sm"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <Link 
            href="#contact"
            className="hidden sm:flex bento-card bg-primary !p-3 !px-6 !rounded-2xl text-primary-foreground font-bold text-sm tracking-widest uppercase items-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-primary/20"
          >
            Connect
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-24 left-6 right-6 bento-card bg-background/95 backdrop-blur-2xl p-6 flex flex-col gap-4 pointer-events-auto md:hidden animate-in fade-in slide-in-from-top-4 shadow-2xl">
          {['Projects', 'About', 'Contact'].map((item) => (
            <Link 
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-bold tracking-tighter uppercase px-4 py-2 hover:bg-muted rounded-xl transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

