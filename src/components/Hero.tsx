export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20">
            <div className="max-w-[1400px] mx-auto w-full">
                <div className="mb-12 overflow-hidden">
                    <span className="block text-sm font-mono uppercase tracking-[0.3em] opacity-40 translate-y-full animate-[reveal_1s_ease_forwards]">
                        Full Stack Architect & Designer
                    </span>
                </div>
                
                <h1 className="text-[clamp(3.5rem,15vw,12rem)] font-bold tracking-tighter leading-[0.8] mb-20">
                    <span className="block italic font-serif translate-y-full animate-[reveal_1s_ease_0.1s_forwards]">Maadhu</span>
                    <span className="block translate-y-full animate-[reveal_1s_ease_0.2s_forwards]">Avati.</span>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
                    <div className="md:col-span-12 lg:col-span-6 opacity-0 animate-[fadeInUp_1s_ease_0.5s_forwards]">
                        <p className="text-xl md:text-3xl leading-tight tracking-tight text-[var(--text-secondary)]">
                            Engineering complex systems with minimalist intent. 
                            Bridging the gap between high-level logic and visceral interaction.
                        </p>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-12 right-6 md:right-12 hidden md:block opacity-0 animate-[fadeInUp_1s_ease_1s_forwards]">
                <div className="flex flex-col items-end">
                    <div className="text-[10px] font-mono uppercase tracking-widest opacity-40 mb-2">Available for roles</div>
                    <div className="w-12 h-[1px] bg-[var(--text-primary)] mb-2" />
                    <a href="#projects" className="text-xs font-mono uppercase tracking-widest hover:opacity-50 transition-opacity">
                        Scroll to discover
                    </a>
                </div>
            </div>
        </section>
    );
}
