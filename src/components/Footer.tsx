export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="p-12 lg:p-20 flex flex-col md:flex-row justify-between items-center gap-12 bg-background">
       <div className="font-mono text-[10px] uppercase tracking-[0.5em] text-muted-foreground">
          Handcrafted by Maadhu Avati / Architecture V1.0 / © {currentYear}
       </div>
       <div className="flex gap-12 font-mono text-[10px] uppercase tracking-[0.5em]">
          <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="hover:opacity-50 transition-opacity">Back to Top ↑</button>
       </div>
    </footer>
  );
}
