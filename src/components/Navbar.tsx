"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference py-8 px-6 md:px-12">
            <div className="max-w-[1400px] mx-auto flex justify-between items-center text-white">
                <Link href="/" className="text-xl font-bold tracking-tighter hover:opacity-50 transition-opacity">
                    MA.
                </Link>
                
                <div className="flex items-center gap-12">
                    <div className="hidden md:flex gap-8 text-xs font-mono uppercase tracking-widest">
                        <Link href="#projects" className="hover:opacity-50 transition-opacity">Works</Link>
                        <Link href="#about" className="hover:opacity-50 transition-opacity">Profile</Link>
                        <Link href="#contact" className="hover:opacity-50 transition-opacity">Contact</Link>
                    </div>

                    {mounted && (
                        <button 
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="w-10 h-10 flex items-center justify-end group overflow-hidden relative"
                            aria-label="Toggle theme"
                        >
                            <span className="text-[10px] font-mono uppercase tracking-tighter group-hover:opacity-0 transition-opacity">
                                Mode
                            </span>
                            <div className="absolute inset-0 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform">
                                <span className="w-1 h-1 bg-white rounded-full" />
                            </div>
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
}
