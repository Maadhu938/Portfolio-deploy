"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto border-t border-border pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
         <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-4 text-[10px] font-mono uppercase tracking-[0.4em] text-muted-foreground">
               <span>Studio.Index</span>
               <span className="w-1 h-1 rounded-full bg-border" />
               <span>v2.0.0-PRO</span>
            </div>
            <div className="text-xs text-muted-foreground/40 font-mono italic">
               Design system built on First Principles & Radical Transparency.
            </div>
         </div>

         <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-8 font-mono text-[10px] uppercase tracking-[0.2em] font-bold">
               <a href="https://github.com/Maadhu938" target="_blank" className="hover:text-primary transition-colors">Open Source</a>
               <button 
                 onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} 
                 className="hover:text-primary transition-colors"
               >
                 Return [Esc]
               </button>
            </div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
               © {currentYear} Maadhu Avati — All Rights Reserved.
            </div>
         </div>
      </div>
    </footer>
  );
}

