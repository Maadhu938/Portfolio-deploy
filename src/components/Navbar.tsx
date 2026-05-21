"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun, Monitor } from "lucide-react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div className="fixed top-6 left-0 w-full z-50 flex justify-center px-6">
      <nav className="flex items-center gap-2 p-1.5 rounded-full glass border border-foreground/10 shadow-2xl">
        <div className="flex items-center gap-1 px-3 py-2 mr-4">
          <Link href="/" className="text-sm font-bold tracking-tighter hover:opacity-50 transition-opacity">
            MA.
          </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-1">
          {['Works', 'About', 'Contact'].map((item) => (
            <Link 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-4 py-2 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-foreground/5 rounded-full transition-all"
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="w-[1px] h-4 bg-foreground/10 mx-2" />

        {mounted && (
          <div className="flex items-center gap-1">
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-foreground/5 transition-all"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
            </button>
          </div>
        )}
      </nav>
    </div>
  );
}
