"use client";
import { skills } from "@/data/projects";
import { 
    Layout, 
    Server, 
    Database, 
    Cpu, 
    Smartphone, 
    Code2,
    Layers,
    Globe
} from "lucide-react";

const iconMap: Record<string, any> = {
    Frontend: Layout,
    Backend: Server,
    Database: Database,
    "AI/ML": Cpu,
    Mobile: Smartphone,
    DevOps: Layers,
    Default: Globe
};

export default function SkillsSection() {
    const categories = [...new Set(skills.map((s) => s.category))];

    return (
        <section id="skills" className="py-24 px-6 md:px-12 bg-[var(--bg-primary)]">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Technical Expertise</h2>
                    <p className="text-[var(--text-secondary)] text-lg max-w-2xl">
                        A modern stack focused on scalability, performance, and user-centric design.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((category) => {
                        const Icon = iconMap[category] || iconMap.Default;
                        const categorySkills = skills.filter((s) => s.category === category);

                        return (
                            <div key={category} className="p-8 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] shadow-sm hover:shadow-md transition-all duration-300">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-[var(--bg-primary)] rounded-xl border border-[var(--border-subtle)]">
                                        <Icon size={24} className="text-[var(--text-primary)]" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-xl font-semibold">{category}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {categorySkills.map((skill) => (
                                        <span 
                                            key={skill.name}
                                            className="px-3 py-1.5 bg-[var(--bg-primary)] text-sm font-medium rounded-lg border border-[var(--border-subtle)]"
                                        >
                                            {skill.name}
                                        </span>
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
