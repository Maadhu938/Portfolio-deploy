import { projects } from "@/data/projects";

export default function ProjectsSection() {
    const featuredProjects = projects.filter((p) => p.featured);
    const otherProjects = projects.filter((p) => !p.featured);

    return (
        <section id="projects" className="py-32 px-6 md:px-12 border-t border-[var(--border-subtle)]">
            <div className="max-w-screen-xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
                    <div className="lg:col-span-4">
                        <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                            04 / Selected Works
                        </h2>
                    </div>
                </div>

                <div className="space-y-48">
                    {featuredProjects.map((project, index) => (
                        <div key={project.title} className="group grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                            <div className="lg:col-span-7">
                                <div className="aspect-[16/9] bg-[var(--bg-secondary)] border border-[var(--border-subtle)] overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
                                    <div className="absolute inset-0 flex items-center justify-center text-8xl font-serif italic text-[var(--text-primary)] opacity-10 group-hover:scale-110 transition-transform duration-1000">
                                        {project.title.charAt(0)}
                                    </div>
                                    <div className="absolute inset-0 bg-[var(--text-primary)] opacity-0 group-hover:opacity-[0.03] transition-opacity" />
                                </div>
                            </div>
                            <div className="lg:col-span-5 pt-4">
                                <div className="text-xs font-mono uppercase tracking-widest text-[var(--text-secondary)] mb-6">
                                    {project.status || "Completed"}
                                </div>
                                <h3 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">{project.title}</h3>
                                <p className="text-lg text-[var(--text-secondary)] mb-8 leading-relaxed max-w-md">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-x-4 gap-y-2 mb-10">
                                    {project.techStack.map(tech => (
                                        <span key={tech} className="text-xs font-mono text-[var(--text-secondary)] uppercase tracking-tighter opacity-60">
                                            #{tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-8 border-t border-[var(--border-subtle)] pt-8">
                                    {project.githubUrl && (
                                        <a href={project.githubUrl} className="group flex items-center gap-2 text-sm font-bold tracking-widest uppercase overflow-hidden">
                                            <span className="relative inline-block transition-transform duration-300 group-hover:-translate-y-full">GitHub</span>
                                            <span className="absolute inline-block translate-y-full transition-transform duration-300 group-hover:translate-y-0">GitHub</span>
                                            <span className="text-xs">↗</span>
                                        </a>
                                    )}
                                    {project.playStoreUrl && (
                                        <a href={project.playStoreUrl} className="group flex items-center gap-2 text-sm font-bold tracking-widest uppercase overflow-hidden">
                                            <span className="relative inline-block transition-transform duration-300 group-hover:-translate-y-full">Play Store</span>
                                            <span className="absolute inline-block translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-green-500">Play Store</span>
                                            <span className="text-xs">↗</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {otherProjects.length > 0 && (
                    <div className="mt-48">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
                            <div className="lg:col-span-4">
                                <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-[var(--text-secondary)]">Archive</h3>
                            </div>
                        </div>
                        <div className="divide-y divide-[var(--border-subtle)] border-t border-b border-[var(--border-subtle)]">
                            {otherProjects.map(project => (
                                <a 
                                    key={project.title} 
                                    href={project.githubUrl || "#"}
                                    className="group grid grid-cols-1 md:grid-cols-12 gap-6 py-12 px-2 hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-all duration-300"
                                >
                                    <div className="md:col-span-4 text-2xl font-bold tracking-tight">{project.title}</div>
                                    <div className="md:col-span-6 text-[var(--text-secondary)] group-hover:text-[var(--bg-primary)] opacity-80 line-clamp-1 flex items-center">{project.description}</div>
                                    <div className="md:col-span-2 text-right flex items-center justify-end font-mono text-xs uppercase tracking-widest opacity-40 group-hover:opacity-100">
                                        View Code ↗
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
