export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 px-6 md:px-12 border-t border-[var(--border-subtle)] bg-[var(--bg-primary)]">
            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
                <div className="space-y-4">
                    <div className="text-xl font-bold tracking-tighter uppercase">Maadhu Avati.</div>
                    <div className="text-sm font-mono text-[var(--text-secondary)] uppercase tracking-widest">
                        Handcrafted with precision / &copy; {currentYear}
                    </div>
                </div>
                
                <div className="flex gap-12 text-sm font-mono uppercase tracking-widest">
                    <a href="https://github.com/Maadhu938" target="_blank" className="hover:text-[var(--text-secondary)] transition-colors">GitHub</a>
                    <a href="https://www.linkedin.com/in/maadhu-avati-525435279" target="_blank" className="hover:text-[var(--text-secondary)] transition-colors">LinkedIn</a>
                    <a href="#hero" className="opacity-40 hover:opacity-100 transition-opacity">Back to top ↑</a>
                </div>
            </div>
        </footer>
    );
}

