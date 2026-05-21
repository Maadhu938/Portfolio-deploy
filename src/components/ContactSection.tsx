"use client";
import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin, InstagramIcon as Instagram } from "./Icons";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          {/* Main CTA */}
          <div className="md:col-span-3 bento-card bg-primary text-primary-foreground p-12 md:p-24 flex flex-col justify-between min-h-[500px] group overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(0,0,0,0.2),transparent)] pointer-events-none" />
            <div className="space-y-6">
              <span className="text-[10px] font-mono uppercase tracking-[0.4em] opacity-80">Transmission / Contact</span>
              <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.85] uppercase">
                READY <br />
                TO <br />
                <span className="opacity-60 font-serif italic lowercase tracking-tight">execute.</span>
              </h2>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pt-12">
               <a 
                 href="mailto:maadhuavati7@gmail.com" 
                 className="text-2xl md:text-4xl font-bold tracking-tighter hover:opacity-70 transition-opacity underline underline-offset-8 decoration-primary-foreground/30"
               >
                 maadhuavati7@gmail.com
               </a>
               <div className="w-16 h-16 rounded-full bg-primary-foreground text-primary flex items-center justify-center animate-pulse">
                  <ArrowUpRight size={32} />
               </div>
            </div>
          </div>

          {/* Social Links Bento */}
          <div className="md:col-span-1 grid grid-cols-1 gap-6">
            <a href="https://linkedin.com/in/maadhu-avati-525435279" target="_blank" className="bento-card bg-card border-border p-8 flex flex-col justify-between hover:bg-muted transition-colors group">
               <Linkedin className="text-muted-foreground group-hover:text-primary transition-colors" size={24} />
               <div className="space-y-1">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Professional</p>
                  <p className="text-xl font-bold tracking-tight">LinkedIn</p>
               </div>
            </a>
            <a href="https://github.com/Maadhu938" target="_blank" className="bento-card bg-card border-border p-8 flex flex-col justify-between hover:bg-muted transition-colors group">
               <Github className="text-muted-foreground group-hover:text-primary transition-colors" size={24} />
               <div className="space-y-1">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Source</p>
                  <p className="text-xl font-bold tracking-tight">GitHub</p>
               </div>
            </a>
            <a href="https://instagram.com/maadhu_839" target="_blank" className="bento-card bg-card border-border p-8 flex flex-col justify-between hover:bg-muted transition-colors group">
               <Instagram className="text-muted-foreground group-hover:text-primary transition-colors" size={24} />
               <div className="space-y-1">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Social</p>
                  <p className="text-xl font-bold tracking-tight">Instagram</p>
               </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

