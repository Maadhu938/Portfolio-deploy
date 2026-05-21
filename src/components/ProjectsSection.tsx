import { projects } from "@/data/projects";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GithubIcon as Github } from "./Icons";

export default function ProjectsSection() {
  const featured = projects.filter(p => p.featured);

  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 px-4">
          <div className="space-y-4">
            <h2 className="text-[10px] font-mono uppercase tracking-[0.4em] text-muted-foreground border-l-2 border-primary pl-4">Selected Index</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter">ENGINEERED <span className="opacity-30">UNITS.</span></h3>
          </div>
          <p className="text-muted-foreground max-w-sm text-lg leading-relaxed italic">
            Products focused on data isolation, AI logic, and modular architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 auto-rows-[300px]">
          {featured.map((project, i) => {
            const isWide = i === 0 || i === 3;
            return (
              <div 
                key={project.title} 
                className={`bento-card bg-muted/30 group border-border/50 flex flex-col justify-between ${isWide ? 'lg:col-span-4' : 'lg:col-span-2'}`}
              >
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-muted-foreground opacity-50 uppercase tracking-widest leading-none">UNIT / 00{i+1}</span>
                    <h4 className="text-2xl font-bold tracking-tight uppercase leading-none">{project.title}</h4>
                  </div>
                  <div className="flex gap-2">
                    <a href={project.githubUrl} target="_blank" className="p-2 rounded-full bg-background border border-border hover:bg-primary hover:text-primary-foreground transition-all">
                      <Github size={16} />
                    </a>
                  </div>
                </div>

                <div className="space-y-6">
                  <p className={`text-muted-foreground leading-snug line-clamp-3 ${isWide ? 'max-w-xl text-xl' : 'text-sm'}`}>
                    {project.description}
                  </p>
                  
                  <div className="flex items-end justify-between">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map(ts => (
                        <span key={ts} className="text-[9px] font-mono uppercase tracking-tighter px-2 py-0.5 rounded-md bg-background border border-border">
                          {ts}
                        </span>
                      ))}
                    </div>
                    {project.playStoreUrl && (
                      <a href={project.playStoreUrl} target="_blank" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:opacity-50 transition-opacity">
                        Launch <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
          
          {/* More Projects CTA Card */}
          <div className="lg:col-span-2 bento-card bg-primary text-primary-foreground flex flex-col items-center justify-center text-center space-y-6 group cursor-pointer overflow-hidden">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent scale-150 group-hover:scale-100 transition-transform duration-1000" />
             <span className="text-[10px] font-mono uppercase tracking-[0.4em] opacity-60">Open Source</span>
             <h4 className="text-2xl font-bold tracking-tighter uppercase relative z-10">Archive & <br /> Repositories</h4>
             <a href="https://github.com/Maadhu938" target="_blank" className="p-4 rounded-full bg-primary-foreground text-primary relative z-10 hover:scale-110 transition-transform duration-500">
               <ArrowUpRight size={24} />
             </a>
          </div>
        </div>
      </div>
    </section>
  );
}
