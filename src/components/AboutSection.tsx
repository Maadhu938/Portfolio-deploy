export default function AboutSection() {
  const principles = [
    { title: "First Principles", desc: "I break complex problems down to their fundamental truths before building up." },
    { title: "System Logic", desc: "Design is not just what it looks like, it's how the architectural pieces fit together." },
    { title: "Human Scale", desc: "Technology should feel natural. I optimize for the hand, the eye, and the intent." }
  ];

  return (
    <section id="about" className="grid grid-cols-1 lg:grid-cols-12 border-b border-border">
      {/* Visual Side */}
      <div className="lg:col-span-5 bg-foreground text-background p-12 md:p-24 flex flex-col justify-between min-h-[60svh]">
         <div className="space-y-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-40">Core Values</span>
            <h2 className="text-6xl md:text-7xl font-bold tracking-tighter leading-[0.85] uppercase">
              Truth in <br />
              <span className="font-serif italic lowercase tracking-tight opacity-60">Architecture.</span>
            </h2>
         </div>
         <div className="font-mono text-[10px] uppercase tracking-widest opacity-40">
           Maadhu Avati / Developer & Designer
         </div>
      </div>

      {/* Narrative Side */}
      <div className="lg:col-span-7 p-12 md:p-24 space-y-24">
         <div className="space-y-8">
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight max-w-xl">
              I am a developer who treats code as <span className="text-muted-foreground font-light">spatial engineering</span>.
            </h3>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Currently based in India, I collaborate with global partners to build digital products that endure. 
              I specialize in bridging the gap between brute-force performance and high-fidelity aesthetics.
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {principles.map((p, i) => (
              <div key={p.title} className="space-y-4">
                 <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">0{i+1} — {p.title}</div>
                 <p className="text-lg leading-snug tracking-tight">{p.desc}</p>
              </div>
            ))}
         </div>
      </div>
    </section>
  );
}
