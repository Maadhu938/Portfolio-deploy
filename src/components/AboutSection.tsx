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
          
          {/* Principle 1 */}
          <div className="md:col-span-2 bento-card bg-primary text-primary-foreground p-8 flex flex-col justify-between min-h-[400px] group overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-30 transition-opacity">
              <span className="text-9xl font-bold font-serif italic leading-none">01</span>
            </div>
            <div className="relative z-10 space-y-4">
               <span className="text-[10px] font-mono uppercase tracking-widest opacity-80">Core Principle</span>
               <h3 className="text-4xl md:text-5xl font-bold tracking-tight">{principles[0].title}</h3>
            </div>
            <p className="relative z-10 text-xl md:text-2xl text-primary-foreground leading-snug tracking-tight max-w-sm">
              {principles[0].desc}
            </p>
          </div>

          {/* Principle 2 */}
          <div className="md:col-span-1 bento-card bg-card border-border p-8 flex flex-col justify-between aspect-square md:aspect-auto min-h-[400px]">
             <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">02</span>
             <div className="space-y-4">
                <h3 className="text-3xl font-bold tracking-tight">{principles[1].title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{principles[1].desc}</p>
             </div>
          </div>

          {/* Principle 3 */}
          <div className="md:col-span-1 bento-card bg-card border-border p-8 flex flex-col justify-between aspect-square md:aspect-auto min-h-[400px]">
             <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">03</span>
             <div className="space-y-4">
                <h3 className="text-3xl font-bold tracking-tight">{principles[2].title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{principles[2].desc}</p>
             </div>
          </div>

          {/* Visual/Quote Bento - Now more prominent since philosophy card is removed */}
          <div className="md:col-span-4 bento-card bg-foreground/5 dark:bg-white/5 border-border flex items-center justify-center p-12 py-20 overflow-hidden group">
             <div className="relative text-center space-y-4">
                <div className="text-6xl md:text-9xl font-serif italic opacity-10 group-hover:scale-105 transition-transform duration-1000">Engineering Distinction</div>
                <div className="absolute inset-0 flex items-center justify-center">
                   <p className="text-[10px] md:text-xs font-mono uppercase tracking-[0.8em] opacity-40">Maadhu Avati — Bangalore, India</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}

        </div>
      </div>
    </section>
  );
}

