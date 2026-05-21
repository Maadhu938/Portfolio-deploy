"use client";
import { MoveRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90svh] flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-32">
      <div className="max-w-screen-2xl mx-auto w-full">
        <div className="flex flex-col gap-12">
          {/* Top Label */}
          <div className="overflow-hidden">
            <span className="inline-block text-[10px] font-mono uppercase tracking-[0.4em] text-muted reveal">
              Engineering Digital Systems / {new Date().getFullYear()}
            </span>
          </div>

          {/* Large Name/Title */}
          <div className="space-y-4">
            <h1 className="text-[clamp(3rem,12vw,10rem)] font-bold tracking-tighter leading-[0.85] reveal [animation-delay:100ms]">
              <span className="block">MAADHU</span>
              <span className="block italic font-serif ml-[0.2em] lg:ml-[0.5em]">AVATI.</span>
            </h1>
          </div>

          {/* Description & Footer-like Hero Bottom */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-end">
            <div className="lg:col-span-12 xl:col-span-5">
              <p className="text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight reveal [animation-delay:200ms]">
                A developer focused on <span className="text-muted">modular architecture</span> and <span className="text-muted">clean machine interfaces</span>. Building software as a craft.
              </p>
            </div>
            
            <div className="lg:col-span-12 xl:col-start-9 xl:col-span-4 flex flex-col items-start xl:items-end gap-8 reveal [animation-delay:300ms]">
              <a href="#projects" className="group flex items-center gap-4 text-sm font-mono uppercase tracking-widest border-b border-fg pb-2 overflow-hidden">
                <span className="relative group-hover:-translate-y-full transition-transform duration-500">View Selected Works</span>
                <span className="absolute translate-y-full group-hover:translate-y-0 transition-transform duration-500">View Selected Works</span>
                <MoveRight size={16} className="group-hover:translate-x-2 transition-transform duration-500" />
              </a>
              
              <div className="text-[10px] font-mono text-muted uppercase tracking-widest">
                Based in India — Available Worldwide
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
