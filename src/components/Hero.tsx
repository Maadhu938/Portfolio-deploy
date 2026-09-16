"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Mail, MapPin } from "lucide-react";
import { projects, skills } from "@/data/projects";
import { GithubIcon as Github } from "./Icons";

const stats = [
  ["LVL", "08", "projects shipped"],
  ["INT", "13", "core tools"],
  ["EXP", "AI", "rag + mobile"],
];

export default function Hero() {
  const [time, setTime] = useState("");
  const featuredProject = projects.find((project) => project.featured) ?? projects[0];
  const featuredSkills = skills.slice(0, 7);

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Intl.DateTimeFormat("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(new Date()),
      );
    };

    updateTime();
    const timer = window.setInterval(updateTime, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="section-shell relative min-h-screen overflow-hidden pt-24 md:pt-28 pb-16">
      <div className="absolute inset-x-0 top-0 h-[620px] opacity-40 soft-grid" />

      <div className="section-inner relative grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="pixel-card relative flex flex-col justify-between bg-card p-5 md:p-8"
        >
          {/* Top-right decorative pixels matching reference mockup */}
          <div className="absolute top-4 right-4 opacity-30 pointer-events-none hidden sm:flex flex-col items-end gap-1">
            <div className="w-3 h-3 bg-border" />
            <div className="flex gap-1">
              <div className="w-3 h-3 bg-border" />
              <div className="w-3 h-3 bg-border" />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="pixel-badge px-3 py-1.5 text-xs font-black uppercase">Save Slot 01</span>
            <span className="flex items-center gap-2 border-2 border-border bg-background px-3 py-1.5 text-xs font-bold">
              <MapPin size={14} />
              Bangalore, IN
            </span>
          </div>

          <div className="py-6 md:py-8">
            <p className="eyebrow">Full-stack engineer / AI builder</p>
            <h1 className="pixel-title mt-5 max-w-4xl text-5xl font-black uppercase leading-[0.9] tracking-tight md:text-7xl lg:text-8xl">
              Maadhu Avati
            </h1>
            <p className="mt-7 max-w-2xl text-base font-semibold leading-8 text-muted-foreground md:text-lg">
              I build web, mobile, and AI systems like playable tools: clear states, fast feedback,
              sturdy logic, and interfaces that feel made by a person.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="#projects" className="pixel-button px-5 py-3 text-sm font-black uppercase">
                Start quest <ArrowDown size={17} />
              </Link>
              <a href="mailto:maadhuavati7@gmail.com" className="pixel-button pixel-button-alt px-5 py-3 text-sm font-black uppercase">
                <Mail size={17} />
                Send mail
              </a>
              <a
                href="https://github.com/Maadhu938"
                target="_blank"
                rel="noopener noreferrer"
                className="pixel-button bg-card px-4 py-3 text-foreground"
                aria-label="Open GitHub profile"
              >
                <Github size={18} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="grid gap-5"
        >
          <div className="pixel-card overflow-hidden" style={{ padding: 0 }}>
            <div className="flex items-center justify-between border-b-2 border-border px-5 pt-5 pb-3" style={{ position: "relative", zIndex: 2, background: "hsl(var(--card))" }}>
              <p className="text-xs font-black uppercase tracking-[0.2em]">Player Sprite</p>
              <p className="text-xs font-black">{time || "--:--"} IST</p>
            </div>
            <Image
              src="/pixel-night-scene.jpg"
              alt="Pixel art character standing in a night scene"
              width={800}
              height={450}
              className="w-full h-auto"
              style={{ imageRendering: "pixelated" }}
              priority
            />
            <div className="grid grid-cols-3 gap-2 border-t-2 border-border px-5 pt-3 pb-4 text-center text-[10px] font-black uppercase tracking-[0.14em]" style={{ position: "relative", zIndex: 2, background: "hsl(var(--card))" }}>
              <span>React</span>
              <span>Flutter</span>
              <span>RAG</span>
            </div>
          </div>

          <div className="pixel-card-sm bg-[hsl(var(--surface-warm))] p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow text-foreground/70">Current mission</p>
                <h2 className="mt-3 text-2xl font-black uppercase tracking-tight">{featuredProject.title}</h2>
              </div>
              <a
                href={featuredProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pixel-button pixel-button-alt h-11 w-11 shrink-0"
                aria-label={`Open ${featuredProject.title} repository`}
              >
                <ArrowUpRight size={18} />
              </a>
            </div>
            <p className="mt-4 text-sm font-semibold leading-7 text-foreground/75">{featuredProject.description}</p>
            {featuredProject.techStack && (
              <div className="mt-4 flex flex-wrap gap-2">
                {featuredProject.techStack.map((tech, i) => {
                  const tagColors = [
                    "bg-[#b9d5fd] text-[#1e3a8a]",
                    "bg-[#fde68a] text-[#78350f]",
                    "bg-[#bbf7d0] text-[#14532d]",
                    "bg-[#fecaca] text-[#7f1d1d]",
                  ];
                  return (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-[11px] font-black uppercase tracking-wider rounded-sm border border-black/20 ${tagColors[i % tagColors.length]}`}
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
