"use client";
import { skills } from "@/data/projects";

export default function SkillsSection() {
  const categories = [...new Set(skills.map((s) => s.category))];

  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 px-4">
          <div className="space-y-4">
            <h2 className="text-[10px] font-mono uppercase tracking-[0.4em] text-muted-foreground border-l-2 border-primary pl-4">Capabilities</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">THE <span className="opacity-30 italic font-serif">STACK.</span></h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <div key={cat} className={`bento-card bg-card border-border p-8 flex flex-col justify-between min-h-[400px] ${i === 0 ? 'lg:col-span-2 md:aspect-video lg:aspect-auto' : ''}`}>
              <div className="space-y-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground opacity-50">Layer / 0{i + 1}</span>
                <h3 className="text-2xl font-bold uppercase tracking-tight">{cat}</h3>
              </div>

              <div className={`grid gap-x-8 gap-y-4 mt-12 ${i === 0 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                {skills.filter(s => s.category === cat).map(skill => (
                  <div key={skill.name} className="flex items-center justify-between border-b border-border/50 pb-2 group cursor-default">
                    <div className="flex items-center gap-3">
                      <img 
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.name.toLowerCase().replace(/\./g, '').replace(/ /g, '')}/${skill.name.toLowerCase().replace(/\./g, '').replace(/ /g, '')}-original.svg`}
                        alt=""
                        className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                      <span className="text-lg font-medium tracking-tight group-hover:text-primary transition-colors">{skill.name}</span>
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-colors" />
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-border/50">
                 <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Status / Verified</p>
              </div>
            </div>
          ))}

          {/* Additional Tech Meta Card */}
          <div className="lg:col-span-4 bento-card bg-primary text-primary-foreground p-8 py-10 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden">
             <div className="absolute inset-0 opacity-10 pointer-events-none select-none overflow-hidden whitespace-nowrap text-[120px] font-bold font-mono tracking-tighter leading-none">
                REACT NEXTJS TYPESCRIPT TAILWIND NODEJS PYTHON AWS DOCKER GRAPHQL
             </div>
             <div className="relative z-10 space-y-2 text-center md:text-left">
                <h4 className="text-2xl font-bold tracking-tighter uppercase">Continuous Integration</h4>
                <p className="text-primary-foreground/60 text-sm max-w-md">I am constantly evolving my stack, exploring LLM orchestration and high-concurrency systems.</p>
             </div>
             <div className="relative z-10 flex gap-4">
                <div className="px-6 py-3 rounded-2xl bg-primary-foreground text-primary font-bold text-xs uppercase tracking-widest">Always Learning</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

