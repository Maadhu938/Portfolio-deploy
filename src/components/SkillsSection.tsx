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
            <div key={cat} className={`bento-card !bg-card border-border p-8 flex flex-col justify-between min-h-[400px] ${i === 0 ? 'lg:col-span-2 md:aspect-video lg:aspect-auto' : ''}`}>
              <div className="space-y-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground opacity-50">Layer / 0{i + 1}</span>
                <h3 className="text-2xl font-bold uppercase tracking-tight !text-foreground">{cat}</h3>
              </div>

              <div className={`grid gap-x-8 gap-y-4 mt-12 ${i === 0 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                {skills.filter(s => s.category === cat).map(skill => {
                  const iconMapping: Record<string, string> = {
                    "React": "react/react-original.svg",
                    "JavaScript": "javascript/javascript-original.svg",
                    "TypeScript": "typescript/typescript-original.svg",
                    "Tailwind CSS": "tailwindcss/tailwindcss-original.svg",
                    "Python": "python/python-original.svg",
                    "Flask": "flask/flask-original.svg",
                    "PostgreSQL": "postgresql/postgresql-original.svg",
                    "Supabase": "supabase/supabase-original.svg",
                    "Next.js": "nextjs/nextjs-original.svg",
                    "Node.js": "nodejs/nodejs-original.svg",
                    "Firebase": "firebase/firebase-plain.svg",
                    "Flutter": "flutter/flutter-original.svg",
                    "Dart": "dart/dart-original.svg",
                    "Algorithms": "codepen/codepen-plain.svg",
                    "REST APIs": "fastapi/fastapi-original.svg",
                    "Embeddings": "googlecloud/googlecloud-original.svg",
                    "RAG": "brainjs/brainjs-original.svg",
                    "Capacitor": "ionic/ionic-original.svg"
                  };
                  
                  const iconPath = iconMapping[skill.name] || `${skill.name.toLowerCase().replace(/\./g, '').replace(/ /g, '')}/${skill.name.toLowerCase().replace(/\./g, '').replace(/ /g, '')}-original.svg`;

                  return (
                    <div key={skill.name} className="flex items-center justify-between border-b border-border/50 pb-2 group cursor-default">
                      <div className="flex items-center gap-3">
                        <img 
                          src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconPath}`}
                          alt=""
                          className="w-5 h-5 opacity-90 group-hover:opacity-100 transition-opacity dark:brightness-200 dark:contrast-100"
                          style={{ filter: 'var(--icon-filter)' }}
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            // Fallback to plain if original fails
                            if (target.src.includes('-original.svg')) {
                              target.src = target.src.replace('-original.svg', '-plain.svg');
                            } else {
                              target.style.display = 'none';
                            }
                          }}
                        />
                        <span className="text-lg font-medium tracking-tight group-hover:text-primary transition-colors text-foreground">{skill.name}</span>
                      </div>
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-colors" />
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 pt-8 border-t border-border/50">
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

