"use client";

import { useRef } from "react";
import ProjectCard from "./ProjectCard";

interface Project {
    title: string;
    description: string;
    techStack: string[];
    githubUrl: string;
    liveUrl: string;
    playStoreUrl?: string;
    status?: string;
    featured?: boolean;
}

interface ProjectRowProps {
    title: string;
    projects: Project[];
}

export default function ProjectRow({ title, projects }: ProjectRowProps) {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = 340;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="py-10">
            {/* Section header */}
            <div className="flex items-center justify-between px-6 sm:px-8 lg:px-12 mb-6">
                <h2 className="text-xl sm:text-2xl font-semibold text-[var(--color-text-primary)]">
                    {title}
                </h2>

                {/* Desktop scroll buttons */}
                <div className="hidden md:flex gap-2">
                    <button
                        onClick={() => scroll("left")}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--color-bg-tertiary)] hover:bg-[var(--color-accent)] border border-[var(--color-border-subtle)] transition-colors"
                        aria-label="Scroll left"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--color-bg-tertiary)] hover:bg-[var(--color-accent)] border border-[var(--color-border-subtle)] transition-colors"
                        aria-label="Scroll right"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Horizontal rail */}
            <div
                ref={scrollRef}
                className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth px-6 sm:px-8 lg:px-12 pb-4"
            >
                {projects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}

                {/* End spacer for proper scroll */}
                <div className="min-w-[1px] flex-shrink-0" />
            </div>
        </section>
    );
}
