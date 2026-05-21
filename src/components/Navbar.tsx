"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Architecture", href: "#architecture" },
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
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-[var(--color-bg-primary)]/95 backdrop-blur-sm border-b border-[var(--color-border-subtle)]"
                    : "bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="text-lg sm:text-xl font-bold text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
                        >
                            Maadhu Avati
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors text-sm font-medium py-2"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <ThemeToggle />
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

