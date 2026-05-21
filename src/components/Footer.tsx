"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 bg-muted/10">
      <div className="max-w-[1400px] mx-auto border-t border-border pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
         <div className="flex flex-col items-center md:items-start gap-4">
            <div className="text-[10px] font-mono uppercase tracking-[0.4em] text-muted-foreground">
               Portfolio — 2026
            </div>
         </div>

         <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-8 font-mono text-[10px] uppercase tracking-[0.2em] font-bold">
               <a 
                 href="https://github.com/Maadhu938" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="hover:text-primary transition-colors"
               >
                 Source Code
               </a>
               <button 
                 onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} 
                 className="hover:text-primary transition-colors"
               >
                 Back to Top
               </button>
            </div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
               © {currentYear} Maadhu Avati. Bangalore, India.
            </div>
         </div>
      </div>
    </footer>
  );
}

