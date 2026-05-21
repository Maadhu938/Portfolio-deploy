import { projects } from "@/data/projects";

export default function Hero() {
    const featured = projects.find((p) => p.featured);

    if (!featured) return null;

    return (
        <section className="relative min-h-[100svh] w-full overflow-hidden">
            {/* Background - cinematic gradient */}
            <div className="absolute inset-0 bg-[var(--bg-primary)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,var(--color-accent),transparent_50%)] opacity-[0.03] dark:opacity-[0.05]" />

            {/* Subtle pattern overlay */}
            <div
                className="absolute inset-0 opacity-[0.03] dark:opacity-[0.01]"
                style={{
                    backgroundImage: `linear-gradient(var(--border-subtle) 1px, transparent 1px), linear-gradient(90deg, var(--border-subtle) 1px, transparent 1px)`,
                    backgroundSize: '80px 80px'
                }}
            />

            {/* Content - anchored bottom-left like Prime */}
            <div className="relative z-10 h-full min-h-[100svh] flex items-end px-4 sm:px-6 lg:px-12 pb-24 sm:pb-28 lg:pb-20 max-w-6xl mx-auto">
                <div className="max-w-2xl w-full">
                    {/* Badge */}
                    <span className="inline-flex items-center text-xs sm:text-sm uppercase tracking-widest text-[var(--color-accent)]">
                        <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full mr-2 animate-pulse" />
                        Featured Project
                    </span>

                    {/* Title - Fluid Typography */}
                    <h1 className="mt-3 sm:mt-4 text-fluid-hero font-bold tracking-tight text-[var(--color-text-primary)] leading-[1.1]">
                        {featured.title}
                    </h1>

                    {/* Description */}
                    <p className="mt-4 sm:mt-5 text-fluid-lg text-[var(--color-text-secondary)] leading-relaxed max-w-xl">
                        {featured.description}
                    </p>

                    {/* Tech stack pills */}
                    <div className="mt-5 sm:mt-6 flex flex-wrap gap-2">
                        {featured.techStack.slice(0, 5).map((tech) => (
                            <span
                                key={tech}
                                className="px-2.5 sm:px-3 py-1 text-xs sm:text-sm bg-white/5 border border-white/10 rounded-full text-[var(--color-text-secondary)] font-mono"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* CTA buttons */}
                    <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
                        <a
                            href="#projects"
                            className="px-5 sm:px-6 py-3 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] active:bg-[var(--color-accent)] text-white font-medium rounded-lg transition-colors min-h-[48px] flex items-center justify-center touch-target"
                        >
                            View Projects
                        </a>
                        <span className="px-4 sm:px-6 py-3 border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] rounded-lg flex items-center gap-2 min-h-[48px]">
                            <span className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0" />
                            <span className="text-sm sm:text-base">{featured.status || "In Development"}</span>
                        </span>
                    </div>
                </div>
            </div>

            {/* Scroll hint - hidden on very small screens */}
            <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 animate-bounce opacity-50 hidden sm:block">
                <svg className="w-6 h-6 text-[var(--color-text-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
}

