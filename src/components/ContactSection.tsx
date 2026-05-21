"use client";
import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin, InstagramIcon as Instagram } from "./Icons";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <motion.section 
      id="contact" 
      className="py-16 md:py-24 px-6 md:px-12 lg:px-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          {/* Main CTA */}
          <div className="md:col-span-3 bento-card !bg-primary !text-primary-foreground p-8 md:p-24 flex flex-col justify-between min-h-[400px] md:min-h-[500px] group overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(0,0,0,0.2),transparent)] pointer-events-none" />
            <div className="space-y-6">
              <span className="text-[10px] font-mono uppercase tracking-[0.4em] opacity-80 !text-primary-foreground/70">Transmission / Contact</span>
              <h2 className="text-4xl md:text-8xl font-bold tracking-tighter leading-[0.85] uppercase !text-primary-foreground">
                READY <br />
                TO <br />
                <span className="opacity-40 font-serif italic lowercase tracking-tight">execute.</span>
              </h2>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pt-12">
               <a 
                 href="mailto:maadhuavati7@gmail.com" 
                 className="text-xl md:text-4xl font-bold tracking-tighter hover:opacity-70 transition-opacity underline underline-offset-8 decoration-primary-foreground/30 !text-primary-foreground break-all"
               >
                 maadhuavati7@gmail.com
               </a>
               <a 
                 href="mailto:maadhuavati7@gmail.com" 
                 className="w-16 h-16 rounded-full bg-primary-foreground !text-primary flex items-center justify-center hover:scale-110 active:scale-95 transition-transform animate-pulse"
                 aria-label="Send Email"
               >
                  <ArrowUpRight size={32} />
               </a>
            </div>
          </div>

          {/* Social Links Bento */}
          <div className="md:col-span-1 grid grid-cols-1 gap-6">
            <a 
              href="https://linkedin.com/in/maadhu-avati-525435279" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bento-card bg-card border-border p-8 flex flex-col justify-between hover:bg-muted transition-colors group"
            >
               <Linkedin className="text-muted-foreground group-hover:text-primary transition-colors" size={24} />
               <div className="space-y-1">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Professional</p>
                  <p className="text-xl font-bold tracking-tight">LinkedIn</p>
               </div>
            </a>
            <a 
              href="https://github.com/Maadhu938" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bento-card bg-card border-border p-8 flex flex-col justify-between hover:bg-muted transition-colors group"
            >
               <Github className="text-muted-foreground group-hover:text-primary transition-colors" size={24} />
               <div className="space-y-1">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Source</p>
                  <p className="text-xl font-bold tracking-tight">GitHub</p>
               </div>
            </a>
            <a 
              href="https://instagram.com/maadhu_839" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bento-card bg-card border-border p-8 flex flex-col justify-between hover:bg-muted transition-colors group"
            >
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

