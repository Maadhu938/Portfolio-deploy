"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? "bg-[var(--bg-primary)]/80 backdrop-blur-md border-b border-[var(--border-subtle)] py-2"
                    : "bg-transparent py-4"
                    }`}
            >
                <div className="max-w-5xl mx-auto px-6">
                    <div className="flex items-center justify-between h-12">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="text-base font-bold tracking-tighter text-[var(--text-primary)] hover:opacity-70 transition-opacity"
                        >
                            MA
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)] px-4 py-2 rounded-full transition-all text-sm font-medium"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pl-2 ml-2 border-l border-[var(--border-subtle)]">
                                <ThemeToggle />
                            </div>
                        </div>

                        {/* Mobile Menu Button Wrapper */}
                        <div className="md:hidden flex items-center space-x-2">
                            <ThemeToggle />
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] touch-target flex items-center justify-center"
                                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                                aria-expanded={isMobileMenuOpen}
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    {isMobileMenuOpen ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Backdrop */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
                    onClick={closeMobileMenu}
                    aria-hidden="true"
                />
            )}

            {/* Mobile Menu Panel */}
            <div
                className={`fixed top-16 left-0 right-0 z-50 md:hidden bg-[var(--color-bg-primary)] border-b border-[var(--color-border-subtle)] transform transition-all duration-300 ease-out ${isMobileMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-full opacity-0 pointer-events-none"
                    }`}
            >
                <div className="px-4 py-4 space-y-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={closeMobileMenu}
                            className="block py-3 px-4 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)] rounded-lg transition-colors text-base font-medium touch-target"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}

