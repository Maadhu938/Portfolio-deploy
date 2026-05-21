import { skills } from "@/data/projects";
import { 
    Layout, 
    Server, 
    Database, 
    Cpu, 
    Smartphone, 
    Code2,
    Layers,
    Terminal
} from "lucide-react";

const categoryIconMap: Record<string, any> = {
    Frontend: Layout,
    Backend: Server,
    Database: Database,
    "AI/ML": Cpu,
    Mobile: Smartphone,
    DevOps: Layers,
    Default: Code2
};

export default function SkillsSection() {
    const categories = [...new Set(skills.map((s) => s.category))];

    return (
        <section id="skills" className="py-32 px-6 md:px-12 border-t border-[var(--border-subtle)] bg-[var(--bg-primary)]">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
                    <div className="lg:col-span-4">
                        <h2 className="text-sm font-mono uppercase tracking-[0.2em] opacity-40">
                            03 / Toolkit
                        </h2>
                    </div>
                    <div className="lg:col-span-8">
                        <p className="text-2xl md:text-3xl tracking-tight text-[var(--text-secondary)] max-w-2xl">
                            A focused stack of industrial-grade technologies for building high-performance systems and polished interfaces.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {categories.map((category) => {
                        const Icon = categoryIconMap[category] || categoryIconMap.Default;
                        const categorySkills = skills.filter((s) => s.category === category);

                        return (
                            <div key={category} className="group p-8 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] hover:border-[var(--text-primary)]/20 transition-all duration-500">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-3 bg-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-xl group-hover:scale-110 transition-transform duration-500">
                                        <Icon size={20} strokeWidth={1.5} className="text-[var(--text-primary)]" />
                                    </div>
                                    <h3 className="text-sm font-mono uppercase tracking-widest text-[var(--text-secondary)]">
                                        {category}
                                    </h3>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    {categorySkills.map((skill) => (
                                        <div 
                                            key={skill.name} 
                                            className="px-4 py-2 bg-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-full text-xs font-medium tracking-tight hover:shadow-sm transition-shadow"
                                        >
                                            {skill.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
