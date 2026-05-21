import { projects } from "@/data/projects";

export default function ProjectsSection() {
    const featured = projects.filter(p => p.featured);

    return (
        <section id="projects" className="py-32 px-6 md:px-12 border-t border-[var(--border-subtle)]">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32 gap-8">
                    <h2 className="text-sm font-mono uppercase tracking-[0.2em] opacity-40">01 / Selected Works</h2>
                    <p className="max-w-md text-xl text-[var(--text-secondary)] leading-relaxed">
                        A curated selection of systems and interfaces built for performance, scale, and clarity.
                    </p>
                </div>

                <div className="space-y-64">
                    {featured.map((project, index) => (
                        <div key={project.title} className="group relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                            <div className="lg:col-span-8 overflow-hidden aspect-[16/10] bg-[var(--bg-secondary)] border border-[var(--border-subtle)] relative">
                                <div className="absolute inset-0 flex items-center justify-center text-9xl font-serif italic opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-700">
                                    {project.title.charAt(0)}
                                </div>
                                <div className="absolute inset-0 bg-[var(--text-primary)] opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500" />
                            </div>

                            <div className="lg:col-span-4 pt-4">
                                <div className="text-[10px] font-mono uppercase tracking-[0.2em] mb-8 opacity-40">
                                    {project.status || "Phase 01"}
                                </div>
                                <h3 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 leading-none">
                                    {project.title}
                                </h3>
                                <p className="text-lg text-[var(--text-secondary)] mb-12 leading-relaxed">
                                    {project.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-x-6 gap-y-4 mb-12">
                                    {project.techStack.map(tech => (
                                        <span key={tech} className="text-[10px] font-mono tracking-widest uppercase opacity-40">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="pt-12 border-t border-[var(--border-subtle)]">
                                    {project.playStoreUrl ? (
                                        <a href={project.playStoreUrl} className="group flex items-center gap-4 text-sm font-bold uppercase tracking-widest">
                                            Install App
                                            <span className="group-hover:translate-x-2 transition-transform duration-500">→</span>
                                        </a>
                                    ) : (
                                        <a href={project.githubUrl} className="group flex items-center gap-4 text-sm font-bold uppercase tracking-widest">
                                            View Source
                                            <span className="group-hover:translate-x-2 transition-transform duration-500">→</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
