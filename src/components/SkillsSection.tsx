"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/projects";

export default function SkillsSection() {
  const categories = [...new Set(skills.map((skill) => skill.category))];

  return (
    <motion.section
      id="skills"
      className="section-shell"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.45 }}
    >
      <div className="section-inner">
        <div className="mb-12 grid gap-5 md:grid-cols-[0.7fr_0.45fr] md:items-end">
          <div>
            <p className="eyebrow">World 03 / Inventory</p>
            <h2 className="pixel-title mt-4 text-4xl font-black uppercase leading-none tracking-tight md:text-6xl">
              Tool slots
            </h2>
          </div>
          <p className="pixel-card-sm bg-card p-4 text-sm font-semibold leading-7 text-muted-foreground">
            A practical loadout for shipping apps, APIs, mobile experiences, and AI-assisted workflows.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {categories.map((category, index) => {
            const categorySkills = skills.filter((skill) => skill.category === category);

            return (
              <article key={category} className="pixel-card-sm bg-card text-foreground p-5">
                <div className="flex items-center justify-between border-b-2 border-border pb-3">
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-foreground">Slot {index + 1}</span>
                  <span className="text-xs font-black text-foreground">{categorySkills.length}</span>
                </div>
                <h3 className="mt-5 text-xl font-black uppercase text-foreground">{category}</h3>
                <div className="mt-5 grid gap-2">
                  {categorySkills.map((skill) => (
                    <span key={skill.name} className="border-2 border-border bg-background/70 px-3 py-2 text-xs font-black uppercase text-foreground">
                      {skill.name}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
