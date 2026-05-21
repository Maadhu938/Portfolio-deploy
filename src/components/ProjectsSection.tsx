import { projects } from "@/data/projects";

export default function ProjectsSection() {
    const featuredProjects = projects.filter((p) => p.featured);
    const otherProjects = projects.filter((p) => !p.featured);

    return (
        <section id="projects" className="py-24 sm:py-32 bg-[var(--bg-primary)]">
            <div className="max-w-5xl mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-3xl font-black tracking-tight text-[var(--text-primary)] mb-4">
                        Selected Works
                    </h2>
                    <p className="text-[var(--text-secondary)] text-lg max-w-xl">
                        A collection of tools and platforms built to solve real-world problems.
                    </p>
                </div>

                <div className="space-y-32">
                    {featuredProjects.map((project, index) => (
                        <div key={project.title} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
                            <div className="w-full md:w-1/2 aspect-video bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl flex items-center justify-center group overflow-hidden relative">
                                <div className="text-6xl font-black opacity-5 group-hover:scale-110 transition-transform duration-500">
                                    {project.title.charAt(0)}
                                </div>
                                <div className="absolute inset-0 bg-[var(--text-primary)] opacity-0 group-hover:opacity-[0.02] transition-opacity" />
                            </div>
                            <div className="w-full md:w-1/2">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] mb-4 block">
                                    {project.status || "Completed"}
                                </span>
                                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">{project.title}</h3>
                                <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.techStack.map(tech => (
                                        <span key={tech} className="text-xs font-mono text-[var(--text-muted)] px-3 py-1 bg-[var(--bg-tertiary)] rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    {project.githubUrl && (
                                        <a href={project.githubUrl} className="text-sm font-bold border-b-2 border-transparent hover:border-[var(--text-primary)] transition-all">GitHub</a>
                                    )}
                                    {project.playStoreUrl && (
                                        <a href={project.playStoreUrl} className="text-sm font-bold text-green-600 border-b-2 border-transparent hover:border-green-600 transition-all">Play Store</a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {otherProjects.length > 0 && (
                    <div className="mt-32 pt-32 border-t border-[var(--border-subtle)]">
                        <h3 className="text-xl font-bold mb-12 text-[var(--text-primary)]">Other Noteworthy Projects</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {otherProjects.map(project => (
                                <div key={project.title} className="p-8 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl hover:border-[var(--text-muted)] transition-all group">
                                    <h4 className="text-lg font-bold mb-2 group-hover:text-[var(--text-primary)] text-[var(--text-primary)]">{project.title}</h4>
                                    <p className="text-sm text-[var(--text-secondary)] mb-6 line-clamp-2">{project.description}</p>
                                    <div className="flex gap-4">
                                        {project.githubUrl && (
                                            <a href={project.githubUrl} className="text-xs font-bold opacity-60 hover:opacity-100 transition-opacity text-[var(--text-primary)]">Source Code</a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
