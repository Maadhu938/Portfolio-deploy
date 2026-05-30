"use client";
import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin, InstagramIcon as Instagram } from "./Icons";
import Link from "next/link";
import { projects, skills } from "@/data/projects";

export default function Hero() {
  const featured = projects.filter(p => p.featured).slice(0, 3);

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          {/* Main Hero Card */}
          <div className="md:col-span-3 bento-card flex flex-col justify-between min-h-[400px] md:min-h-[450px] !bg-primary !text-primary-foreground group">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-foreground/10 text-[10px] font-mono uppercase tracking-widest border border-primary-foreground/10 !text-primary-foreground/80">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Available for hire
              </div>
              <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] !text-primary-foreground">
                MAADHU <br />
                <span className="opacity-40 italic font-serif">AVATI.</span>
              </h1>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pt-12">
              <p className="text-xl md:text-2xl opacity-80 max-w-lg leading-tight !text-primary-foreground">
                Full-stack engineer building high-performance <span className="font-medium underline decoration-primary-foreground/30 underline-offset-4">AI systems</span> and refined digital interfaces.
              </p>
              <Link 
                href="#projects" 
                className="w-16 h-16 rounded-full bg-primary-foreground !text-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-xl"
              >
                <ArrowUpRight size={28} />
              </Link>
            </div>
          </div>

          {/* Social & Contact Bento */}
          <div className="md:col-span-1 space-y-6">
            <div className="bento-card bg-muted/50 p-6 flex flex-col justify-between aspect-square group">
                <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Follow / Network</span>
                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href="https://github.com/Maadhu938" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center aspect-square rounded-2xl bg-card border border-border hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="https://linkedin.com/in/maadhu-avati-525435279" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center aspect-square rounded-2xl bg-card border border-border hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="https://instagram.com/maadhu_839" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center aspect-square rounded-2xl bg-card border border-border hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Instagram size={20} />
                  </a>
                  <a 
                    href="mailto:maadhuavati7@gmail.com" 
                    className="flex items-center justify-center aspect-square rounded-2xl bg-card border border-border hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Mail size={20} />
                  </a>
                </div>
            </div>
            <div className="bento-card bg-card border-border flex flex-col justify-between p-6 h-[210px]">
              <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Location</span>
              <div className="space-y-1">
                <div className="text-xl font-bold tracking-tight">Bangalore</div>
                <div className="text-sm text-muted-foreground">India — GMT+5:30</div>
              </div>
            </div>
          </div>

          {/* Stack & Skills Bento */}
          <div className="md:col-span-2 bento-card bg-card border-border p-8 flex flex-col justify-between min-h-[400px]">
            <div className="space-y-4">
               <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Technical Stack</span>
               <h3 className="text-3xl font-bold tracking-tight">Engineered for <br /> <span className="text-muted-foreground">performance.</span></h3>
            </div>
            <div className="flex flex-wrap gap-2 pt-8">
              {skills.slice(0, 12).map(skill => (
                <span key={skill.name} className="px-3 py-1.5 rounded-xl bg-muted/50 text-sm font-medium border border-border/50">
                  {skill.name}
                </span>
              ))}
              <span className="px-3 py-1.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium">and more...</span>
            </div>
          </div>

          {/* Featured Works Index */}
          <div className="md:col-span-2 bento-card bg-card border-border p-8 flex flex-col justify-between min-h-[400px]">
            <div className="space-y-4">
               <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Featured Unit</span>
               <div className="space-y-2">
                 <h3 className="text-3xl font-bold tracking-tight">{featured[0].title}</h3>
                 <p className="text-muted-foreground leading-snug line-clamp-2">{featured[0].description}</p>
               </div>
            </div>
            <div className="flex items-center justify-between border-t border-border pt-6 mt-6">
               <div className="flex -space-x-2">
                  {featured[0].techStack.map(ts => (
                    <div key={ts} className="w-8 h-8 rounded-full bg-muted border-2 border-card flex items-center justify-center text-[8px] font-bold overflow-hidden uppercase">
                       {ts.charAt(0)}
                    </div>
                  ))}
               </div>
               <a href={featured[0].githubUrl} target="_blank" className="text-sm font-bold uppercase tracking-widest flex items-center gap-2 hover:opacity-50 transition-opacity">
                  View Repository <ArrowUpRight size={16} />
               </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
