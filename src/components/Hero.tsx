"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Mail, MapPin } from "lucide-react";
import { projects, skills } from "@/data/projects";
import { GithubIcon as Github } from "./Icons";

const sprite = [
  "000111111000",
  "001222222100",
  "012222222210",
  "012331133210",
  "012333333210",
  "001222222100",
  "004444444400",
  "044555555440",
  "045555555540",
  "005506605500",
  "007700007700",
  "077000000770",
];

const spriteColors: Record<string, string> = {
  "0": "transparent",
  "1": "hsl(var(--border))",
  "2": "hsl(var(--surface-warm))",
  "3": "hsl(var(--foreground))",
  "4": "hsl(var(--primary))",
  "5": "hsl(var(--secondary))",
  "6": "hsl(var(--accent))",
  "7": "hsl(var(--muted-foreground))",
};

const stats = [
  ["LVL", "08", "projects shipped"],
  ["INT", "13", "core tools"],
  ["EXP", "AI", "rag + mobile"],
];

function PixelAvatar() {
  return (
    <div className="mx-auto grid w-full max-w-[288px] grid-cols-12 gap-1 p-4 pixel-tile" aria-label="Pixel avatar">
      {sprite.flatMap((row, rowIndex) =>
        row.split("").map((cell, columnIndex) => (
          <span
            key={`${rowIndex}-${columnIndex}`}
            className="aspect-square"
            style={{ backgroundColor: spriteColors[cell] }}
          />
        )),
      )}
    </div>
  );
}

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
    <section className="section-shell relative min-h-screen overflow-hidden pt-28 md:pt-36">
      <div className="absolute inset-x-0 top-0 h-[620px] opacity-40 soft-grid" />

      <div className="section-inner relative grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="pixel-card flex min-h-[650px] flex-col justify-between bg-card p-5 md:p-8"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="pixel-badge px-3 py-1.5 text-xs font-black uppercase">Save Slot 01</span>
            <span className="flex items-center gap-2 border-2 border-border bg-background px-3 py-1.5 text-xs font-bold">
              <MapPin size={14} />
              Bangalore, IN
            </span>
          </div>

          <div className="py-12 md:py-16">
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

          <div className="grid gap-3 border-t-2 border-border pt-5 sm:grid-cols-3">
            {stats.map(([label, value, hint]) => (
              <div key={label} className="border-2 border-border bg-background p-4">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
                <p className="mt-2 text-4xl font-black leading-none">{value}</p>
                <p className="mt-2 text-xs font-bold text-muted-foreground">{hint}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="grid gap-5"
        >
          <div className="pixel-card pixel-screen p-5">
            <div className="flex items-center justify-between border-b-2 border-border pb-3">
              <p className="text-xs font-black uppercase tracking-[0.2em]">Player Sprite</p>
              <p className="text-xs font-black">{time || "--:--"} IST</p>
            </div>
            <PixelAvatar />
            <div className="grid grid-cols-3 gap-2 border-t-2 border-border pt-3 text-center text-[10px] font-black uppercase tracking-[0.14em]">
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
          </div>

          <div className="pixel-card-sm bg-card p-5">
            <p className="eyebrow">Inventory</p>
            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {featuredSkills.map((skill) => (
                <span key={skill.name} className="border-2 border-border bg-muted px-3 py-2 text-xs font-black uppercase">
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
