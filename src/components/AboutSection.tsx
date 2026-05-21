export default function AboutSection() {
  const values = [
    { title: "Architecture", desc: "Thinking in systems before writing a single line of code." },
    { title: "Performance", desc: "Optimizing for the edge—speed is a feature, not an afterthought." },
    { title: "Precision", desc: "Pixel perfection and structural integrity in every component." }
  ];

  return (
    <section id="about" className="py-32 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter leading-none uppercase">
              Merging <br /> 
              Logic with <br />
              <span className="text-background/40">Imagination</span>
            </h2>
            
            <div className="space-y-6 text-xl text-background/80 leading-relaxed max-w-xl">
              <p>
                I'm a Full-Stack Engineer based in India, specializing in building products that solve complex problems with elegant solutions.
              </p>
              <p>
                My approach is rooted in structural integrity. Whether it's a mobile app for students or an AI-driven knowledge base, I focus on building foundations that scale.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-12 pt-8">
            {values.map((v, i) => (
              <div key={v.title} className="group border-t border-background/10 pt-8">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-mono opacity-40 uppercase tracking-widest">0{i+1}</span>
                  <h3 className="text-3xl font-bold uppercase tracking-tight">{v.title}</h3>
                </div>
                <p className="text-lg text-background/60 leading-relaxed max-w-md ml-auto text-right">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
