"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Play, Store } from "lucide-react";
import { projects } from "@/data/projects";
import { GithubIcon as Github } from "./Icons";

const cartridgeColors = [
  "bg-[hsl(var(--surface-warm))]",
  "bg-[hsl(var(--surface-cool))]",
  "bg-secondary",
];

export default function ProjectsSection() {
  const featured = projects.filter((project) => project.featured);
  const archive = projects.filter((project) => !project.featured);

  return (
    <motion.section
      id="projects"
      className="section-shell"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.45 }}
    >
      <div className="section-inner">
        <div className="mb-12 grid gap-5 md:grid-cols-[0.9fr_0.55fr] md:items-end">
          <div>
            <p className="eyebrow">World 01 / Projects</p>
            <h2 className="pixel-title mt-4 text-4xl font-black uppercase leading-none tracking-tight md:text-6xl">
              Quest cartridges
            </h2>
          </div>
          <p className="pixel-card-sm bg-card p-4 text-sm font-semibold leading-7 text-muted-foreground">
            Each build has a real gameplay loop: learn, organize, retrieve, ship, or practice.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {featured.map((project, index) => (
            <article
              key={project.title}
              className={`pixel-card flex min-h-[390px] flex-col justify-between p-5 ${cartridgeColors[index % cartridgeColors.length]} ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <span className="pixel-badge px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em]">
                    Cart 0{index + 1}
                  </span>
                  {project.status && (
                    <span className="border-2 border-border bg-card px-3 py-1 text-[10px] font-black uppercase">
                      {project.status}
                    </span>
                  )}
                </div>

                <h3 className="mt-8 text-3xl font-black uppercase leading-tight tracking-tight md:text-4xl">
                  {project.title}
                </h3>
                <p className="mt-5 max-w-2xl text-sm font-semibold leading-7 text-foreground/75 md:text-base">
                  {project.description}
                </p>
              </div>

              <div className="mt-8">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="border-2 border-border bg-card px-2.5 py-1 text-[10px] font-black uppercase">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3 border-t-2 border-border pt-5">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pixel-button pixel-button-alt px-4 py-2 text-xs font-black uppercase"
                  >
                    <Github size={16} />
                    Repo
                  </a>
                  {project.playStoreUrl && (
                    <a
                      href={project.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pixel-button bg-card px-3 py-2 text-foreground"
                      aria-label="Open Play Store listing"
                    >
                      <Store size={16} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pixel-button bg-card px-3 py-2 text-foreground"
                      aria-label="Open live demo"
                    >
                      <Play size={16} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 pixel-card bg-card p-5">
          <div className="mb-5 flex items-center justify-between border-b-2 border-border pb-4">
            <h3 className="text-lg font-black uppercase">Bonus stages</h3>
            <span className="text-xs font-black uppercase text-muted-foreground">{archive.length} repos</span>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {archive.map((project) => (
              <a
                key={project.title}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-between gap-4 border-2 border-border bg-background p-4 transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <div>
                  <h4 className="font-black uppercase">{project.title}</h4>
                  <p className="mt-2 line-clamp-2 text-xs font-semibold leading-5 opacity-75">{project.description}</p>
                </div>
                <ArrowUpRight size={18} className="shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
