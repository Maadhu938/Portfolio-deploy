import { projects } from "@/data/projects";

export default function Hero() {
    return (
        <section className="relative min-h-[90svh] w-full flex flex-col justify-center px-6 md:px-12 pt-16">
            <div className="max-w-screen-xl mx-auto w-full">
                <div className="overflow-hidden mb-6">
                    <span className="block text-sm font-medium tracking-tight animate-reveal whitespace-nowrap uppercase tracking-widest">
                        Independent Full-Stack Developer
                    </span>
                </div>
                
                <h1 className="text-[clamp(3.5rem,14vw,11rem)] font-bold tracking-tight leading-[0.85] mb-12">
                    <span className="block italic font-serif">Maadhu</span>
                    <span className="block ml-[0.1em]">Avati.</span>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
                    <div className="md:col-span-12 lg:col-span-6">
                        <p className="text-xl md:text-3xl leading-tight tracking-tight text-[var(--text-secondary)] mb-8 max-w-2xl">
                            Crafting modular systems and high-fidelity interfaces at the intersection of human experience and logic.
                        </p>
                    </div>
                    <div className="md:col-span-12 lg:col-start-9 lg:col-span-4 flex flex-col items-start lg:items-end">
                        <div className="text-sm font-mono text-[var(--text-secondary)] mb-2 uppercase tracking-widest">Status</div>
                        <div className="text-sm border border-[var(--border-subtle)] px-6 py-2 rounded-full mb-12 hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-colors cursor-default">
                            Open for Opportunities
                        </div>
                        <a href="#projects" className="group flex items-center gap-4 text-xl font-medium hover:opacity-50 transition-opacity">
                            View Selected Works 
                            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
