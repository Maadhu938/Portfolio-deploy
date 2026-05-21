import { skills } from "@/data/projects";

export default function SkillsSection() {
    const categories = [...new Set(skills.map((s) => s.category))];

    return (
        <section id="skills" className="py-32 px-6 md:px-12 border-t border-[var(--border-subtle)]">
            <div className="max-w-screen-xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-4">
                        <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-[var(--text-secondary)] mb-8">
                            03 / Toolkit
                        </h2>
                    </div>
                    <div className="lg:col-span-8">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8">
                            {categories.map((category) => (
                                <div key={category}>
                                    <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--text-secondary)] mb-6">
                                        {category}
                                    </h3>
                                    <ul className="space-y-4">
                                        {skills
                                            .filter((s) => s.category === category)
                                            .map((skill) => (
                                                <li key={skill.name} className="text-lg md:text-xl font-medium tracking-tight">
                                                    {skill.name}
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

