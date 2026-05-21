"use client";

export default function ContactSection() {
  return (
    <section id="contact" className="grid grid-cols-1 lg:grid-cols-12 border-b border-border">
      <div className="lg:col-span-8 p-12 md:p-24 space-y-12">
         <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground uppercase">Transmission / Contact</span>
         <h2 className="text-7xl md:text-9xl font-bold tracking-tighter leading-[0.8]">
           READY <br />
           TO <br />
           <span className="font-serif italic lowercase tracking-tight opacity-40">execute.</span>
         </h2>
      </div>

      <div className="lg:col-span-4 border-l border-border divide-y divide-border">
         <div className="p-12 space-y-6">
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Digital / Mail</span>
            <a href="mailto:maadhuavati7@gmail.com" className="block text-2xl font-medium tracking-tight hover:translate-x-2 transition-transform">
              maadhuavati7@gmail.com
            </a>
         </div>
         <div className="p-12 space-y-6">
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Network / LinkedIn</span>
            <a href="https://linkedin.com/in/maadhu-avati-525435279" target="_blank" className="block text-2xl font-medium tracking-tight hover:translate-x-2 transition-transform">
              @maadhu-avati
            </a>
         </div>
         <div className="p-12 space-y-6">
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Network / GitHub</span>
            <a href="https://github.com/Maadhu938" target="_blank" className="block text-2xl font-medium tracking-tight hover:translate-x-2 transition-transform">
              @maadhu938
            </a>
         </div>
      </div>
    </section>
  );
}
