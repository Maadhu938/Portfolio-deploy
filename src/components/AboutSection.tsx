"use client";

import { motion } from "framer-motion";

const logs = [
  ["01", "AI with a job", "RAG and embeddings are for retrieval, context, and workflow speed, not novelty."],
  ["02", "Mobile-first instincts", "Flutter and Capacitor help ideas reach real devices quickly."],
  ["03", "Clean systems", "I care about user isolation, API boundaries, and code that stays understandable."],
  ["04", "Polish loop", "Ship, test, notice friction, then sand the rough edge until it feels obvious."],
];

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
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div className="pixel-card bg-card p-6 md:p-8">
            <p className="eyebrow">World 02 / About</p>
            <h2 className="pixel-title mt-5 text-4xl font-black uppercase leading-none tracking-tight md:text-6xl">
              Builder log
            </h2>
            <p className="mt-7 text-sm font-semibold leading-8 text-muted-foreground md:text-base">
              I am Maadhu, a full-stack engineer from Bangalore. I like building practical tools:
              learning apps, academic assistants, AI notebooks, and systems where the interface and
              backend both carry their weight.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {logs.map(([number, title, text]) => (
              <article key={number} className="pixel-card-sm bg-card p-5">
                <div className="flex items-center justify-between border-b-2 border-border pb-3">
                  <span className="text-2xl font-black">{number}</span>
                  <span className="h-4 w-4 bg-accent shadow-[4px_0_0_hsl(var(--primary)),8px_0_0_hsl(var(--secondary))]" />
                </div>
                <h3 className="mt-5 text-xl font-black uppercase">{title}</h3>
                <p className="mt-3 text-sm font-semibold leading-7 text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
