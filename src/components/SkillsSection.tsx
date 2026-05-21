"use client";
import { skills } from "@/data/projects";

export default function SkillsSection() {
  const categories = [...new Set(skills.map((s) => s.category))];

  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 bg-bg">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-border pt-12">
          {/* Label */}
          <div className="lg:col-span-3">
             <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-fg" />
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] font-semibold">Stack / Logic</span>
             </div>
          </div>

          <div className="lg:col-span-9">
            <div className="divide-y divide-border">
              {categories.map((cat) => (
                <div key={cat} className="grid grid-cols-1 md:grid-cols-12 py-8 group transition-colors hover:bg-fg/5 px-2">
                  <div className="md:col-span-4 self-center">
                    <h3 className="text-2xl font-bold tracking-tight uppercase">{cat}</h3>
                  </div>
                  <div className="md:col-span-8">
                     <div className="flex flex-wrap gap-x-6 gap-y-2">
                        {skills.filter(s => s.category === cat).map(skill => (
                          <div key={skill.name} className="flex items-center gap-2 group/skill">
                            <span className="text-xs font-mono text-muted opacity-40 group-hover/skill:opacity-100 transition-opacity">/</span>
                            <span className="text-lg font-mono tracking-tight">{skill.name}</span>
                          </div>
                        ))}
                     </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
