"use client";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-12 border-b border-border">
      {/* Left Column: Vertical Branding */}
      <div className="hidden lg:flex lg:col-span-1 border-r border-border flex-col justify-between py-12 items-center">
         <span className="font-mono text-[10px] uppercase tracking-[0.5em] rotate-180 [writing-mode:vertical-lr]">Established 2026</span>
         <div className="w-px h-24 bg-border" />
         <span className="font-mono text-[10px] uppercase tracking-[0.5em] [writing-mode:vertical-lr]">Based in India</span>
      </div>

      {/* Main Column */}
      <div className="lg:col-span-11 flex flex-col justify-between">
        <div className="pt-40 px-6 md:px-12 lg:px-20 space-y-12">
           <div className="inline-flex items-center gap-4 reveal">
              <div className="h-px w-12 bg-foreground" />
              <span className="font-mono text-xs uppercase tracking-widest italic">Full-Stack Engineer</span>
           </div>

           <h1 className="text-[clamp(4rem,18vw,16rem)] font-bold tracking-tighter leading-[0.75] reveal [animation-delay:200ms]">
              MAADHU<br />
              <span className="font-serif italic font-light opacity-80 opacity-40">AVATI.</span>
           </h1>
        </div>

        {/* Hero Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-border">
           <div className="p-8 lg:p-12 border-b md:border-b-0 md:border-r border-border space-y-6 reveal [animation-delay:400ms]">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Philosophy / 01</span>
              <p className="text-xl leading-snug tracking-tight">
                Building digital systems with <span className="font-serif italic">architectural rigor</span> and human-centric nuance.
              </p>
           </div>
           
           <div className="p-8 lg:p-12 border-b md:border-b-0 lg:border-r border-border space-y-6 reveal [animation-delay:500ms]">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Status / 02</span>
              <div className="flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                 <span className="text-xl">Available for 2026 Q3 Projects.</span>
              </div>
           </div>

           <div className="p-8 lg:p-12 flex items-center justify-between group cursor-pointer hover:bg-foreground hover:text-background transition-colors duration-700 reveal [animation-delay:600ms]">
              <div className="space-y-2">
                <span className="font-mono text-[10px] uppercase tracking-widest opacity-60">Action / 03</span>
                <span className="block text-2xl font-bold uppercase tracking-tighter">Explore Works</span>
              </div>
              <ArrowRight size={32} className="group-hover:translate-x-4 transition-transform duration-700" />
           </div>
        </div>
      </div>
    </section>
  );
}
