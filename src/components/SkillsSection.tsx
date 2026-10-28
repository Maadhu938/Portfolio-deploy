"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/projects";

// Skill chips grouped by type: frontend sky, mobile coral, backend/tools butter, other mint
const getSkillChipClass = (category: string) => {
  switch (category) {
    case "Frontend":
      return "clay-chip-sky";
    case "Mobile":
      return "clay-chip-coral";
    case "Backend":
    case "Database":
      return "clay-chip-butter";
    case "AI/ML":
    default:
      return "clay-chip-mint";
  }
};

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
        <div className="mb-10 grid gap-5 md:grid-cols-[0.7fr_0.45fr] md:items-end">
          <div>
            <p className="eyebrow">Skills</p>
            <h2 className="font-display mt-4 text-4xl font-bold leading-none tracking-tight md:text-6xl">
              Technical Stack
            </h2>
          </div>
          <p className="clay-card-sm text-sm font-medium leading-7 text-muted-foreground">
            Core technologies and tools I use to build scalable web apps, mobile solutions, and AI workflows.
          </p>
        </div>

        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((category, index) => {
            const categorySkills = skills.filter((skill) => skill.category === category);
            const chipClass = getSkillChipClass(category);

            return (
              <article key={category} className="clay-card-sm flex flex-col justify-between">
                <div>
                  <div
                    className="flex items-center justify-between pb-3"
                    style={{
                      borderBottom: "1px solid color-mix(in srgb, var(--muted) 20%, transparent)",
                    }}
                  >
                    <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                      0{index + 1}
                    </span>
                    <span className="text-xs font-bold text-muted-foreground">
                      {categorySkills.length} skills
                    </span>
                  </div>
                  <h3 className="font-display mt-4 text-xl font-bold tracking-tight">
                    {category}
                  </h3>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {categorySkills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`${chipClass} text-xs font-bold uppercase`}
                    >
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
