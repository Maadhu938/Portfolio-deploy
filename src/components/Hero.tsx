"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin, InstagramIcon as Instagram } from "./Icons";
import Link from "next/link";
import { projects, skills } from "@/data/projects";

export default function Hero() {
  const featured = projects.filter(p => p.featured).slice(0, 3);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Calculate rotations for Bangalore time
  const getBangaloreTime = () => {
    return new Date(new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"}));
  };

  const bentoTime = getBangaloreTime();
  const seconds = bentoTime.getSeconds();
  const minutes = bentoTime.getMinutes();
  const hours = bentoTime.getHours();

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          {/* Main Hero Card */}
          <div className="md:col-span-3 bento-card flex flex-col justify-between min-h-[400px] md:min-h-[450px] !bg-primary !text-primary-foreground group">
            <div className="space-y-6">
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

          {/* Time Bento */}
          <div className="md:col-span-1">
            <div className="bento-card bg-card border-border flex flex-col items-center justify-center p-8 h-full min-h-[450px]">
              <div className="relative w-40 h-40 rounded-full border-2 border-primary/10 flex items-center justify-center bg-muted/20">
                {/* Hour markings */}
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-0.5 h-2 bg-muted-foreground/20"
                    style={{
                      transform: `rotate(${i * 30}deg) translateY(-68px)`,
                    }}
                  />
                ))}
                
                {/* Hour Hand */}
                <motion.div
                  className="absolute w-1.5 h-12 bg-foreground/80 rounded-full origin-bottom"
                  animate={{ rotate: (hours % 12) * 30 + minutes * 0.5 }}
                  transition={{ type: "spring", stiffness: 50 }}
                  style={{ y: -24 }}
                />
                
                {/* Minute Hand */}
                <motion.div
                  className="absolute w-1 h-16 bg-foreground/40 rounded-full origin-bottom"
                  animate={{ rotate: minutes * 6 }}
                  transition={{ type: "spring", stiffness: 50 }}
                  style={{ y: -32 }}
                />
                
                {/* Second Hand */}
                <motion.div
                  className="absolute w-0.5 h-18 bg-primary rounded-full origin-bottom"
                  animate={{ rotate: seconds * 6 }}
                  transition={{ type: "tween", ease: "linear", duration: 0.1 }}
                  style={{ y: -36 }}
                />
                
                {/* Center Point */}
                <div className="w-2.5 h-2.5 rounded-full bg-primary z-10 shadow-sm" />
              </div>

              <div className="mt-8 text-center">
                <div className="text-4xl font-bold tracking-tighter tabular-nums">
                  {hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}
                </div>
                <div className="text-[10px] font-mono opacity-30 uppercase tracking-[0.2em] mt-2">Bangalore, IN</div>
              </div>
            </div>
          </div>

          {/* Stack & Skills Bento */}
          <div className="md:col-span-2 bento-card bg-card border-border p-8 flex flex-col justify-between min-h-[400px]">
            <div className="space-y-4">
               <h3 className="text-3xl font-bold tracking-tight">Core <br /> <span className="text-muted-foreground">Expertise.</span></h3>
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
