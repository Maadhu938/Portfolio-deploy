"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.section 
      id="about" 
      className="py-16 md:py-24 px-6 md:px-12 lg:px-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 gap-6">
          {/* Visual/Quote Bento - Now more prominent since philosophy/principles are removed */}
          <div className="bento-card border-border flex items-center justify-center p-8 py-20 md:p-12 md:py-32 overflow-hidden group bg-muted/30">
             <div className="relative text-center space-y-6">
                <div className="text-4xl md:text-8xl lg:text-9xl font-serif italic opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-1000 leading-none">
                  Maadhu <br /> Avati.
                </div>
                <div className="flex flex-col items-center justify-center gap-4">
                   <p className="text-xs md:text-sm font-mono uppercase tracking-[0.8em] opacity-60">Full-Stack Engineer — Bangalore, India</p>
                   <div className="w-12 h-[1px] bg-primary/20" />
                   <p className="max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed italic">
                     "Building high-performance AI systems and refined digital interfaces with a focus on first principles and architectural integrity."
                   </p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

