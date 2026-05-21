import { projects } from "@/data/projects";
import { MoveUpRight } from "lucide-react";

export default function ProjectsSection() {
  const featured = projects.filter(p => p.featured);

  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col gap-32">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 pb-12 border-b border-border">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">WORKS</h2>
            <div className="text-sm font-mono text-muted uppercase tracking-widest max-w-[200px]">
              A curated collection of digital products.
            </div>
          </div>

          {/* Project List - Editorial Style */}
          <div className="space-y-48">
            {featured.map((project, i) => (
              <div key={project.title} className="group grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                {/* Number & Side Info */}
                <div className="lg:col-span-2 hidden lg:block">
                  <div className="sticky top-32 space-y-8">
                    <div className="text-3xl font-serif italic opacity-20">0{i + 1}</div>
                    <div className="flex flex-col gap-2">
                       <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted">Tech Stack</span>
                       {project.techStack.map(ts => (
                         <span key={ts} className="text-[10px] font-mono uppercase tracking-widest">{ts}</span>
                       ))}
                    </div>
                  </div>
                </div>

                {/* Main Content */}
                <div className="lg:col-span-10">
                  <div className="space-y-12">
                     <div className="aspect-[16/10] bg-[#f9f9f9] dark:bg-[#0a0a0a] border border-border overflow-hidden relative group-hover:border-fg transition-colors duration-500">
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <span className="text-8xl font-bold tracking-tighter opacity-5 group-hover:scale-110 transition-transform duration-1000">
                                {project.title.charAt(0)}
                            </span>
                        </div>
                        <div className="absolute inset-0 bg-fg opacity-0 group-hover:opacity-[0.02] transition-opacity duration-700" />
                     </div>

                     <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-24">
                        <div className="flex-1 space-y-6">
                            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">{project.title}</h3>
                            <p className="text-xl text-muted leading-relaxed max-w-2xl">{project.description}</p>
                        </div>
                        
                        <div className="flex shrink-0 pt-2 font-mono text-sm">
                            <a 
                              href={project.playStoreUrl || project.githubUrl} 
                              target="_blank"
                              className="group/link flex items-center gap-2 hover:opacity-50 transition-opacity"
                            >
                                {project.playStoreUrl ? "PLAY STORE" : "SOURCE CODE"}
                                <div className="p-2 border border-border rounded-full group-hover/link:bg-fg group-hover/link:text-bg transition-colors">
                                  <MoveUpRight size={14} />
                                </div>
                            </a>
                        </div>
                     </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Simple Button for Archive */}
          <div className="flex justify-center pt-24">
             <div className="text-sm font-mono text-muted uppercase tracking-widest text-center">
                Check [ <a href="https://github.com/Maadhu938" className="text-fg underline underline-offset-4">GITHUB</a> ] for more repositories.
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
