"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Command } from "lucide-react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] grid grid-cols-1 lg:grid-cols-12 border-b border-border bg-background/80 backdrop-blur-md">
      {/* Brand Unit */}
      <div className="lg:col-span-1 p-6 border-r border-border flex items-center justify-center">
         <Link href="/" className="font-bold text-xl tracking-tighter">MA.</Link>
      </div>

      {/* Navigation Space */}
      <div className="lg:col-span-10 px-12 hidden lg:flex items-center justify-center gap-16">
         {['Works', 'About', 'Skills', 'Contact'].map((item) => (
           <Link 
             key={item}
             href={`#${item.toLowerCase()}`}
             className="font-mono text-[10px] uppercase tracking-[0.3em] hover:opacity-50 transition-opacity relative group"
           >
             {item}
             <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all group-hover:w-full" />
           </Link>
         ))}
      </div>

      {/* Control Unit */}
      <div className="lg:col-span-1 p-6 border-l border-border flex items-center justify-center gap-6">
         {mounted && (
           <button 
             onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
             className="font-mono text-[10px] uppercase tracking-widest hover:invert transition-all bg-foreground text-background px-3 py-1"
           >
             {theme === 'dark' ? 'LIT' : 'DRK'}
           </button>
         )}
      </div>
    </nav>
  );
}
