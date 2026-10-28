"use client";

import { motion } from "framer-motion";

const values = [
  ["01", "AI with a purpose", "RAG and embeddings are for retrieval, context, and workflow speed, not novelty."],
  ["02", "Mobile-first instincts", "Flutter and Capacitor help ideas reach real devices and actual users quickly."],
  ["03", "Clean systems", "I care about user isolation, well-defined API boundaries, and maintainable codebases."],
  ["04", "Continuous polish", "Ship, test, identify friction, and refine the details until interactions feel effortless."],
];

const cardColors = ["tint sky", "tint butter", "tint mint", "tint coral"];

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className="section-shell"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.45 }}
    >
      <div className="section-inner">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div className="clay-card">
            <p className="eyebrow">About</p>
            <h2 className="font-display mt-4 sm:mt-5 text-3xl sm:text-5xl md:text-6xl font-bold leading-none tracking-tight">
              Background & Approach
            </h2>
            <p className="mt-5 sm:mt-7 text-xs sm:text-sm md:text-base font-medium leading-6 sm:leading-8 text-muted-foreground">
              I am Maadhu, a full-stack engineer from Bangalore. I build practical, high-impact products:
              language learning apps, academic platforms, AI notebooks, and software where the frontend
              and backend work in harmony.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
            {values.map(([number, title, text], index) => (
              <article
                key={number}
                className={`clay p-5 sm:p-6 ${cardColors[index % cardColors.length]}`}
              >
                <div
                  className="flex items-center justify-between pb-3"
                  style={{
                    borderBottom: "1px solid color-mix(in srgb, #26324a 14%, transparent)",
                  }}
                >
                  <span className="font-display text-2xl font-bold text-ink">{number}</span>
                  <span className="card-pill tag text-[11px] font-bold uppercase px-3 py-1 rounded-full">
                    Principle
                  </span>
                </div>
                <h3 className="font-display mt-5 text-xl font-bold text-ink">{title}</h3>
                <p className="mt-3 text-sm font-medium leading-7 text-ink opacity-90">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
