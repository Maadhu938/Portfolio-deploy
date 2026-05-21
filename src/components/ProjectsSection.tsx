import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

export default function ProjectsSection() {
  const featured = projects.filter(p => p.featured);

  return (
    <section id="projects" className="bg-background">
      <div className="border-b border-border py-12 px-6 md:px-12 lg:px-20 flex justify-between items-end">
         <h2 className="text-sm font-mono uppercase tracking-[0.4em] font-bold">Selected Index</h2>
         <span className="font-mono text-[10px] uppercase opacity-40">Scroll to Explore / {featured.length} Units</span>
      </div>

      <div className="divide-y divide-border">
        {featured.map((project, i) => (
          <div key={project.title} className="group grid grid-cols-1 lg:grid-cols-12 hover:bg-muted/50 transition-colors duration-500">
            {/* Index Unit */}
            <div className="p-8 lg:p-12 lg:col-span-1 border-r border-border font-mono text-xs opacity-40 group-hover:opacity-100 transition-opacity">
              0{i + 1}
            </div>

            {/* Title & Description */}
            <div className="p-8 lg:p-12 lg:col-span-5 border-r border-border space-y-6">
               <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter uppercase leading-none">
                 {project.title}
               </h3>
               <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                 {project.description}
               </p>
               <div className="flex flex-wrap gap-2 pt-4">
                  {project.techStack.map(ts => (
                    <span key={ts} className="font-mono text-[9px] uppercase tracking-widest px-2 py-1 border border-border rounded-full hover:bg-foreground hover:text-background transition-colors">
                      {ts}
                    </span>
                  ))}
               </div>
            </div>

            {/* Visualization / Hover Image */}
            <div className="hidden lg:block lg:col-span-4 border-r border-border relative overflow-hidden group">
               <div className="absolute inset-0 flex items-center justify-center bg-muted/20">
                  <span className="font-mono text-[10px] uppercase tracking-widest opacity-20">Media_Preview_0{i+1}</span>
               </div>
               {/* This would be an Actual Image in a real world - using a styled div to simulate high-end feel */}
               <div className="absolute inset-0 bg-foreground scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)]" />
               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300">
                  <span className="text-background font-mono text-xs uppercase tracking-[0.5em]">{project.title.split('').join(' ')}</span>
               </div>
            </div>

            {/* Action */}
            <div className="p-8 lg:p-12 lg:col-span-2 flex flex-col justify-between items-end group/link">
               <a 
                 href={project.playStoreUrl || project.githubUrl} 
                 target="_blank"
                 className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover/link:bg-foreground group-hover/link:text-background group-hover/link:border-foreground transition-all duration-500"
               >
                 <ArrowUpRight size={20} />
               </a>
               <span className="font-mono text-[10px] uppercase tracking-widest opacity-40">View Unit</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
