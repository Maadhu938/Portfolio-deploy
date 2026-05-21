"use client";
import { Mail, ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[3rem] bg-foreground text-background p-12 md:p-24 flex flex-col items-center text-center space-y-12">
          {/* Decorative Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-background/10 rounded-full blur-3xl" />
          
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none">
            Ready to build <br /> 
            <span className="opacity-40 italic">the future?</span>
          </h2>
          
          <p className="text-xl text-background/60 max-w-xl mx-auto">
            Currently accepting new projects and collaborations. Let's turn your logic into a high-fidelity reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 w-full justify-center pt-8">
            <a 
              href="mailto:maadhuavati7@gmail.com" 
              className="flex items-center justify-center gap-3 bg-background text-foreground px-10 py-5 rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-xl"
            >
              <Mail size={20} />
              maadhuavati7@gmail.com
            </a>
            
            <a 
              href="https://linkedin.com/in/maadhu-avati-525435279" 
              target="_blank"
              className="flex items-center justify-center gap-2 border border-background/20 px-10 py-5 rounded-full font-bold text-lg hover:bg-background/10 transition-all"
            >
              LinkedIn
              <ArrowUpRight size={20} className="opacity-40" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
