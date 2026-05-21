"use client";
import { skills } from "@/data/projects";

export default function SkillsSection() {
  const categories = [...new Set(skills.map((s) => s.category))];

  return (
    <section id="skills" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-2 mb-16">
          <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-muted-foreground">Technical Matrix</h2>
          <h3 className="text-4xl font-bold tracking-tight">The Stack</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat) => (
            <div key={cat} className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-[1px] flex-1 bg-border" />
                <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground whitespace-nowrap">{cat}</h4>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skills.filter(s => s.category === cat).map(skill => (
                  <div key={skill.name} className="flex flex-col p-4 rounded-xl border border-border bg-muted/30 hover:bg-muted transition-colors w-full group">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-[10px] text-muted-foreground font-mono mt-1 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-tighter">Level: Expert</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
