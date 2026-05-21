"use client";

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

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div
            className="relative group min-w-[260px] sm:min-w-[300px] lg:min-w-[320px] h-[180px] sm:h-[200px] rounded-xl bg-[var(--color-bg-secondary)] overflow-hidden transition-all duration-300 ease-out
        hover:scale-[1.05] sm:hover:scale-[1.08] hover:-translate-y-1 sm:hover:-translate-y-2 hover:z-10 hover:shadow-2xl hover:shadow-[var(--color-accent)]/10
        active:scale-[0.98] focus-within:scale-[1.05] focus-within:-translate-y-1 focus-within:z-10
        touch-action-manipulation"
            tabIndex={0}
            role="article"
            aria-label={`Project: ${project.title}`}
        >
            {/* Card background with gradient header */}
            <div className="absolute inset-0">
                <div className="h-full bg-gradient-to-br from-[var(--color-bg-tertiary)] to-[var(--color-accent-muted)]/30" />
            </div>

            {/* Large initial */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl sm:text-7xl font-bold text-[var(--color-accent)] opacity-10 group-hover:opacity-20 group-focus-within:opacity-20 transition-opacity select-none">
                {project.title.charAt(0)}
            </div>

            {/* Dark overlay - always slightly visible on touch devices */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-70 sm:opacity-60 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300" />

            {/* Featured badge */}
            {project.featured && (
                <div className="absolute top-2 sm:top-3 right-2 sm:right-3 px-2 py-1 bg-[var(--color-accent)] rounded text-xs font-medium text-white z-10">
                    Featured
                </div>
            )}

            {/* Content */}
            <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-end">
                {/* Title - always visible */}
                <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-[var(--color-accent-hover)] group-focus-within:text-[var(--color-accent-hover)] transition-colors">
                    {project.title}
                </h3>

                {/* Description - always visible on mobile, revealed on hover for desktop */}
                <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] mt-1.5 sm:mt-2 line-clamp-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100 transform sm:translate-y-2 sm:group-hover:translate-y-0 sm:group-focus-within:translate-y-0 transition-all duration-300">
                    {project.description}
                </p>

                {/* Actions - always visible on mobile, revealed on hover for desktop */}
                <div className="mt-2 sm:mt-3 flex gap-2 sm:gap-3 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100 transform sm:translate-y-2 sm:group-hover:translate-y-0 sm:group-focus-within:translate-y-0 transition-all duration-300 delay-75">
                    {project.githubUrl ? (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-xs px-2.5 sm:px-3 py-1.5 border border-[var(--color-border-subtle)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] active:bg-[var(--color-accent)]/10 rounded transition-colors flex items-center gap-1.5 touch-target"
                        >
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            <span className="hidden sm:inline">GitHub</span>
                        </a>
                    ) : (
                        <span className="text-xs px-2.5 sm:px-3 py-1.5 border border-[var(--color-border-subtle)] rounded text-[var(--color-text-muted)] flex items-center gap-1.5">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            <span className="hidden sm:inline">Private</span>
                        </span>
                    )}
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-xs px-2.5 sm:px-3 py-1.5 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] active:bg-[var(--color-accent)] text-white rounded transition-colors touch-target"
                        >
                            Live Demo
                        </a>
                    )}
                    {project.playStoreUrl && (
                        <a
                            href={project.playStoreUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-xs px-2.5 sm:px-3 py-1.5 bg-green-600 hover:bg-green-700 active:bg-green-800 text-white rounded transition-colors touch-target flex items-center gap-1.5"
                        >
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M3.609 1.814L13.792 12 3.61 22.186c-.184.18-.459.215-.68.083l-.01-.007a.64.64 0 01-.1-.1v-20.32c0-.353.287-.64.64-.64.124 0 .245.036.349.102l.01.006c.222.132.497.098.68-.083zM14.502 12.71l3.056-3.056L22.69 11.23c.47.235.66.804.425 1.274a.925.925 0 01-.425.426l-5.132 2.576-3.056-3.057zm-1.42-1.42L3.81 2.053l10.4 5.2c.473.236.663.805.427 1.278-.073.146-.183.273-.32.368l-1.235.79zm0 2.84l1.235.79c.473.236.663.805.427 1.278-.073.146-.183.273-.32.368l-10.4 5.2 9.258-9.258z" />
                            </svg>
                            <span className="hidden sm:inline">Play Store</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

