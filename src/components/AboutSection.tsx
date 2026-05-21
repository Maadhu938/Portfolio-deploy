export default function AboutSection() {
  const capabilities = [
    { title: "Architectural Logic", desc: "Modular thinking applied to digital systems. Scaling from zero to distributed." },
    { title: "Interface Precision", desc: "Hard-edged layouts centered around utility and cinematic motion." },
    { title: "Applied Intelligence", desc: "Integrating LLMs into production flows with RAG and custom reasoning." },
    { title: "Human Centricity", desc: "Designing for the user's intent rather than the developer's convenience." }
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 bg-bg">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-border pt-12">
          {/* Label */}
          <div className="lg:col-span-3">
             <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-fg" />
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] font-semibold">The Architect</span>
             </div>
          </div>

          {/* Core Text */}
          <div className="lg:col-span-9 space-y-12">
             <h3 className="text-[clamp(1.5rem,5vw,3.5rem)] font-bold tracking-tight leading-[1.05] max-w-4xl">
               I solve problems using <span className="font-serif italic text-muted">logic as craft</span>. My work exists at the intersection of technical performance and high-fidelity interaction.
             </h3>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-12 border-t border-border">
                {capabilities.map((cap) => (
                  <div key={cap.title} className="space-y-4">
                    <h4 className="text-sm font-mono uppercase tracking-widest">{cap.title}</h4>
                    <p className="text-muted text-lg leading-relaxed">{cap.desc}</p>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
