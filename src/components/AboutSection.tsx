export default function AboutSection() {
  const principles = [
    { title: "First Principles", desc: "Breaking complex problems to fundamental truths before building up." },
    { title: "System Logic", desc: "Design is not just visuals; it is how architectural pieces fit together." },
    { title: "Human Scale", desc: "Technology should feel natural. Optimizing for hand, eye, and intent." }
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 bg-muted/20">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          {/* Main Narrative */}
          <div className="md:col-span-2 bento-card bg-card border-border p-8 flex flex-col justify-between min-h-[400px]">
            <div className="space-y-6">
              <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-muted-foreground border-l-2 border-primary pl-4">Core Philosophy</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
                CODE AS <br />
                <span className="text-muted-foreground italic font-serif">SPATIAL ENGINEERING.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                I specialize in bridging the gap between brute-force performance and high-fidelity aesthetics. Based in India, working globally.
              </p>
            </div>
            <div className="pt-8 font-mono text-[10px] uppercase tracking-widest text-muted-foreground opacity-50">
              Maadhu Avati — Developer & Designer
            </div>
          </div>

          {/* Principle 1 */}
          <div className="md:col-span-2 bento-card bg-primary text-primary-foreground p-8 flex flex-col justify-between group overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="text-9xl font-bold font-serif italic leading-none">01</span>
            </div>
            <div className="relative z-10 space-y-4">
               <span className="text-[10px] font-mono uppercase tracking-widest opacity-60">Principle One</span>
               <h3 className="text-3xl font-bold tracking-tight">{principles[0].title}</h3>
            </div>
            <p className="relative z-10 text-xl text-primary-foreground/80 leading-snug tracking-tight max-w-xs">
              {principles[0].desc}
            </p>
          </div>

          {/* Principle 2 */}
          <div className="md:col-span-1 bento-card bg-card border-border p-8 flex flex-col justify-between aspect-square md:aspect-auto min-h-[300px]">
             <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">02</span>
             <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tight">{principles[1].title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{principles[1].desc}</p>
             </div>
          </div>

          {/* Principle 3 */}
          <div className="md:col-span-1 bento-card bg-card border-border p-8 flex flex-col justify-between aspect-square md:aspect-auto min-h-[300px]">
             <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">03</span>
             <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tight">{principles[2].title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{principles[2].desc}</p>
             </div>
          </div>

          {/* Visual/Quote Bento */}
          <div className="md:col-span-2 bento-card bg-foreground/5 dark:bg-white/5 border-border flex items-center justify-center p-12 overflow-hidden group">
             <div className="relative text-center space-y-4">
                <div className="text-6xl md:text-8xl font-serif italic opacity-10 group-hover:scale-110 transition-transform duration-1000">Architecture</div>
                <div className="absolute inset-0 flex items-center justify-center">
                   <p className="text-xs font-mono uppercase tracking-[0.8em] opacity-40">Form Follows Function</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}

