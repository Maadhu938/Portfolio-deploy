export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 bg-bg border-t border-border">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
        <div>
           Handcrafted by Maadhu Avati / {currentYear}
        </div>
        
        <div className="flex gap-12 text-fg">
          <a href="https://github.com/Maadhu938" target="_blank" className="hover:opacity-50 transition-opacity">GitHub</a>
          <a href="https://www.linkedin.com/in/maadhu-avati-525435279" target="_blank" className="hover:opacity-50 transition-opacity">LinkedIn</a>
          <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="hover:opacity-50 transition-opacity">↑ Top</button>
        </div>
      </div>
    </footer>
  );
}
