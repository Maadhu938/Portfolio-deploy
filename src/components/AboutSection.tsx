export default function AboutSection() {
    const capabilities = [
        { title: "Architectural Design", description: "Modular systems, scalable database schemas, and API design." },
        { title: "Frontend Engineering", description: "High-fidelity interfaces, fluid animations, and performance optimization." },
        { title: "Applied AI", description: "Integrating LLMs, prompt engineering, and RAG architectures." },
        { title: "Full-Stack Deployment", description: "End-to-end delivery from serverless logic to mobile wrappers." }
    ];

    return (
        <section id="about" className="py-32 px-6 md:px-12 border-t border-[var(--border-subtle)]">
            <div className="max-w-screen-xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
                    <div className="lg:col-span-4">
                        <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-[var(--text-secondary)] mb-8">
                            01 / Profile
                        </h2>
                    </div>
                    <div className="lg:col-span-8">
                        <div className="space-y-12">
                            <p className="text-3xl md:text-5xl tracking-tight leading-[1.1] text-[var(--text-primary)]">
                                Maadhu Avati is a developer obsessed with the intersection of architecture and precision. 
                                I build interfaces that feel like tools and systems that endure.
                            </p>
                            <p className="text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl">
                                Currently focusing on projects like <span className="text-[var(--text-primary)] font-medium underline decoration-[var(--border-subtle)] underline-offset-4">MyNotebook</span>, 
                                where I explore the boundaries of AI-assisted knowledge management and data isolation.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-24 border-t border-[var(--border-subtle)]">
                    <div className="lg:col-span-4">
                        <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-[var(--text-secondary)] mb-8">
                            02 / Capabilities
                        </h2>
                    </div>
                    <div className="lg:col-span-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                            {capabilities.map((cap, i) => (
                                <div key={i} className="group">
                                    <div className="text-xs font-mono text-[var(--text-secondary)] mb-4">0{i + 1}</div>
                                    <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{cap.title}</h3>
                                    <p className="text-[var(--text-secondary)] leading-relaxed underline decoration-transparent group-hover:decoration-[var(--border-subtle)] transition-all">
                                        {cap.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
