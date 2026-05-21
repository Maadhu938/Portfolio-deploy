import { projects } from "@/data/projects";
import { Github, ExternalLink, Smartphone } from "lucide-react";

export default function ProjectsSection() {
    const featured = projects.filter(p => p.featured);
    const other = projects.filter(p => !p.featured);

    return (
        <section id="projects" className="py-24 px-6 md:px-12 bg-[var(--bg-primary)]">
            <div className="max-w-6xl mx-auto">
                <div className="mb-20">
                    <h2 className="text-4xl font-bold tracking-tight mb-4">Selected Projects</h2>
                    <p className="text-[var(--text-secondary)] text-xl max-w-2xl">
                        Showcasing high-impact applications ranging from AI-powered tools to published mobile apps.
                    </p>
                </div>

                <div className="space-y-32">
                    {featured.map((project, index) => (
                        <div key={project.title} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                            {/* Project Visual Placeholder */}
                            <div className="w-full lg:w-3/5 aspect-video bg-[var(--bg-secondary)] rounded-3xl border border-[var(--border-subtle)] overflow-hidden relative group">
                                <div className="absolute inset-0 flex items-center justify-center text-7xl font-bold opacity-10 group-hover:scale-110 transition-transform duration-700">
                                    {project.title.charAt(0)}
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>

                            {/* Project Info */}
                            <div className="w-full lg:w-2/5">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest rounded-full">
                                        {project.status || "Featured"}
                                    </span>
                                </div>
                                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                                <p className="text-[var(--text-secondary)] text-lg mb-8 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.techStack.map(tech => (
                                        <span key={tech} className="px-3 py-1 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-lg text-sm font-medium">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    {project.githubUrl && (
                                        <a href={project.githubUrl} className="flex items-center gap-2 px-5 py-2.5 bg-[var(--text-primary)] text-[var(--bg-primary)] rounded-xl font-semibold hover:opacity-90 transition-all">
                                            <Github size={18} /> Code
                                        </a>
                                    )}
                                    {project.playStoreUrl && (
                                        <a href={project.playStoreUrl} className="flex items-center gap-2 px-5 py-2.5 border border-[var(--border-subtle)] rounded-xl font-semibold hover:bg-[var(--bg-secondary)] transition-all">
                                            <Smartphone size={18} /> Play Store
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Archive section for smaller projects */}
                {other.length > 0 && (
                    <div className="mt-40">
                        <h3 className="text-2xl font-bold mb-10">More Projects</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {other.map(p => (
                                <div key={p.title} className="p-8 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] hover:translate-y-[-4px] transition-all duration-300">
                                    <h4 className="text-xl font-bold mb-3">{p.title}</h4>
                                    <p className="text-[var(--text-secondary)] text-sm mb-6 line-clamp-2">{p.description}</p>
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-2 text-[10px] font-mono text-[var(--text-secondary)] uppercase">
                                            {p.techStack.slice(0, 2).join(" / ")}
                                        </div>
                                        {p.githubUrl && (
                                            <a href={p.githubUrl} className="text-[var(--text-primary)] hover:opacity-50">
                                                <Github size={18} />
                                            </a>
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
