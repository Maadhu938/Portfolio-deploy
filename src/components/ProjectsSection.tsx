"use client";
import { projects } from "@/data/projects";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="space-y-4">
            <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-muted-foreground p-1 px-3 border border-border inline-block rounded-full">
              Works / 001
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">
              Selected <span className="text-muted-foreground">Projects</span>
            </h3>
          </div>
          <p className="text-muted-foreground max-w-sm text-lg leading-relaxed">
            A collection of digital products focused on utility, performance, and architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.filter(p => p.featured).map((project) => (
            <div 
              key={project.title} 
              className="group relative flex flex-col space-y-6 p-1 rounded-3xl bg-muted/50 border border-border transition-all hover:bg-muted/80"
            >
              {/* Image / Card */}
              <div className="aspect-[16/10] bg-background rounded-2xl overflow-hidden relative border border-border">
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent flex items-center justify-center p-12">
                   <div className="text-9xl font-bold tracking-tighter opacity-[0.03] group-hover:scale-110 transition-transform duration-1000">
                     {project.title.charAt(0)}
                   </div>
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all duration-500 flex items-center justify-center gap-4">
                  {project.playStoreUrl && (
                    <a href={project.playStoreUrl} target="_blank" className="p-4 bg-foreground text-background rounded-full hover:scale-110 transition-transform shadow-xl">
                      <ExternalLink size={24} />
                    </a>
                  )}
                  <a href={project.githubUrl} target="_blank" className="p-4 bg-background text-foreground rounded-full hover:scale-110 transition-transform shadow-xl border border-border">
                    <Github size={24} />
                  </a>
                </div>
              </div>

              {/* Text Info */}
              <div className="px-6 pb-8 space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map(ts => (
                    <span key={ts} className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border border-border bg-background">
                      {ts}
                    </span>
                  ))}
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
