"use client";
import { skills } from "@/data/projects";

export default function SkillsSection() {
  const categories = [...new Set(skills.map((s) => s.category))];

  return (
    <section id="skills" className="bg-background">
      <div className="border-b border-border py-12 px-6 md:px-12 lg:px-20">
         <h2 className="text-sm font-mono uppercase tracking-[0.4em] font-bold">Tech Deck / Capability</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border border-b border-border">
         {categories.map((cat) => (
           <div key={cat} className="p-8 lg:p-12 space-y-12 last:border-r-0">
             <div className="space-y-2">
                <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground italic">Layer_0{categories.indexOf(cat)+1}</span>
                <h3 className="text-2xl font-bold uppercase tracking-tighter">{cat}</h3>
             </div>

             <div className="space-y-3">
                {skills.filter(s => s.category === cat).map(skill => (
                  <div key={skill.name} className="flex justify-between items-end border-b border-border pb-2 group cursor-crosshair">
                     <span className="text-lg font-medium group-hover:translate-x-1 transition-transform">{skill.name}</span>
                     <span className="font-mono text-[9px] uppercase tracking-tighter opacity-0 group-hover:opacity-40 transition-opacity whitespace-nowrap">Confirmed_Exp</span>
                  </div>
                ))}
             </div>
           </div>
         ))}
      </div>
    </section>
  );
}
