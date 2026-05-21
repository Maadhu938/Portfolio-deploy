export default function Footer() {
  return (
    <footer className="py-20 bg-background border-t border-border mt-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tighter uppercase">Maadhu Avati.</h2>
            <p className="text-muted-foreground max-w-xs leading-relaxed">
              Designed and developed with meticulous attention to detail. Built on the edge.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-12 md:gap-24">
            <div className="space-y-4">
               <h3 className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Social</h3>
               <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-muted-foreground transition-colors">Twitter</a></li>
                  <li><a href="https://github.com/Maadhu938" className="hover:text-muted-foreground transition-colors">GitHub</a></li>
                  <li><a href="https://linkedin.com/in/maadhu-avati-525435279" className="hover:text-muted-foreground transition-colors">LinkedIn</a></li>
               </ul>
            </div>
            <div className="space-y-4">
               <h3 className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Legal</h3>
               <ul className="space-y-2 text-sm">
                  <li><span className="opacity-50">© 2026</span></li>
                  <li><span className="opacity-50">India</span></li>
               </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
