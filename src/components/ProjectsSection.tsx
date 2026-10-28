"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { projects } from "@/data/projects";
import { GithubIcon as Github, PlayStoreIcon } from "./Icons";

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
        <div className="mb-8 sm:mb-10 grid gap-4 sm:gap-5 md:grid-cols-[0.9fr_0.55fr] md:items-end">
          <div>
            <p className="eyebrow">Projects</p>
            <h2 className="font-display mt-3 sm:mt-4 text-3xl sm:text-5xl md:text-6xl font-bold leading-none tracking-tight">
              Featured Work
            </h2>
          </div>
          <p className="clay-card-sm text-xs sm:text-sm font-medium leading-6 sm:leading-7 text-muted-foreground">
            Full-stack, mobile, and AI applications built with focused logic, clear workflows, and production-ready architectures.
          </p>
        </div>

        {/* Project grid: 2 columns, collapsing to 1 column under 760px. Cards rotate mint, sky, butter, coral */}
        <div className="project-grid">
          {featured.map((project, index) => (
            <article
              key={project.title}
              className="project-card flex min-h-0 sm:min-h-[400px] flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-start justify-between gap-2.5 sm:gap-3">
                  <span className="card-pill tag text-[11px] font-bold uppercase tracking-[0.12em] px-3.5 py-1.5 rounded-full">
                    Project 0{index + 1}
                  </span>
                  {project.status && (
                    <span className="card-pill tag text-[11px] font-bold uppercase px-3.5 py-1.5 rounded-full">
                      {project.status}
                    </span>
                  )}
                </div>

                <h3 className="font-display mt-6 sm:mt-8 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight text-ink">
                  {project.title}
                </h3>
                <p className="mt-4 sm:mt-5 text-sm font-medium leading-7 md:text-base">
                  {project.description}
                </p>
              </div>

              <div className="mt-8">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="card-pill tag text-[10px] font-bold uppercase px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3 pt-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-button clay-btn px-5 py-3 text-xs font-bold uppercase"
                  >
                    <Github size={16} className="text-current" />
                    Code
                  </a>
                  {project.playStoreUrl && (
                    <a
                      href={project.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-button clay-round"
                      aria-label="Open Play Store listing"
                    >
                      <PlayStoreIcon size={18} className="text-current" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-button clay-round"
                      aria-label="Open live demo"
                    >
                      <Play size={18} className="text-current" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 clay-card">
          <div
            className="mb-5 flex items-center justify-between pb-4"
            style={{ borderBottom: "1px solid color-mix(in srgb, var(--muted) 20%, transparent)" }}
          >
            <h3 className="font-display text-xl font-bold">More Projects</h3>
            <span className="text-xs font-semibold uppercase text-muted-foreground">
              {archive.length} repositories
            </span>
          </div>
          <div className="grid gap-4 grid-cols-1 min-[760px]:grid-cols-2">
            {archive.map((project) => (
              <a
                key={project.title}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="clay-card-sm group flex items-start justify-between gap-4 transition-transform hover:-translate-y-1"
              >
                <div>
                  <h4 className="font-display text-lg font-bold">{project.title}</h4>
                  <p className="mt-2 line-clamp-2 text-xs font-medium leading-5 text-muted-foreground">
                    {project.description}
                  </p>
                </div>
                <ArrowUpRight
                  size={20}
                  className="shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
