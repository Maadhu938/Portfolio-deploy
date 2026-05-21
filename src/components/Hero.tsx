"use client";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Background Aesthetic */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-[120px] dark:bg-white/2" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-primary/5 rounded-full blur-[100px] dark:bg-white/2" />
      </div>

      <div className="relative z-10 max-w-5xl w-full text-center space-y-8 page-reveal">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50 border border-border text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Available for new opportunities
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.9]">
          MAADHU <br /> 
          <span className="text-muted-foreground/40">AVATI</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          A full-stack engineer building digital products that balance <span className="text-foreground font-medium">high-performance logic</span> with <span className="text-foreground font-medium">immaculate design</span>.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <Link 
            href="#projects" 
            className="group flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-medium transition-all hover:scale-105 active:scale-95"
          >
            Selected Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <div className="flex items-center gap-2 h-14 px-6 rounded-full border border-border bg-background/50 backdrop-blur-sm">
            <a href="https://github.com/Maadhu938" target="_blank" className="hover:text-muted-foreground transition-colors p-2">
              <Github size={20} />
            </a>
            <div className="w-[1px] h-4 bg-border" />
            <a href="https://linkedin.com/in/maadhu-avati-525435279" target="_blank" className="hover:text-muted-foreground transition-colors p-2">
              <Linkedin size={20} />
            </a>
            <div className="w-[1px] h-4 bg-border" />
            <a href="mailto:maadhuavati7@gmail.com" className="hover:text-muted-foreground transition-colors p-2">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Hero Bottom - Stats/Stack */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-7xl px-6 hidden md:flex justify-between items-end border-t border-border/50 pt-8 opacity-50 text-[10px] font-mono uppercase tracking-[0.2em]">
        <div className="flex flex-col gap-1">
          <span>Andhra Pradesh, India</span>
          <span>16.59° N, 77.94° E</span>
        </div>
        <div className="text-right">
          <span>React / Next.js / Flask</span>
          <br />
          <span>PostgreSQL / AI Logic</span>
        </div>
      </div>
    </section>
  );
}
