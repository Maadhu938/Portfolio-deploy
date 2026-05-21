export default function ContactSection() {
    return (
        <section id="contact" className="py-32 px-6 md:px-12 border-t border-[var(--border-subtle)] bg-[var(--text-primary)] text-[var(--bg-primary)]">
            <div className="max-w-screen-xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-12">
                        <h2 className="text-[clamp(2.5rem,10vw,8rem)] font-bold tracking-tighter leading-none mb-24">
                            Let's build <br /> something <span className="italic font-serif">permanent.</span>
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 border-t border-[var(--bg-primary)]/20 pt-12">
                    <div>
                        <div className="text-xs font-mono uppercase tracking-widest opacity-50 mb-6">Contact</div>
                        <a href="mailto:maadhuavati7@gmail.com" className="text-xl hover:opacity-50 transition-opacity">
                            maadhuavati7@gmail.com
                        </a>
                    </div>
                    <div>
                        <div className="text-xs font-mono uppercase tracking-widest opacity-50 mb-6">Socials</div>
                        <ul className="space-y-2">
                            <li><a href="https://www.linkedin.com/in/maadhu-avati-525435279" className="text-xl hover:opacity-50 transition-opacity">LinkedIn</a></li>
                            <li><a href="https://instagram.com/maadhu_839" className="text-xl hover:opacity-50 transition-opacity">Instagram</a></li>
                        </ul>
                    </div>
                    <div>
                        <div className="text-xs font-mono uppercase tracking-widest opacity-50 mb-6">Location</div>
                        <div className="text-xl">Andhra Pradesh, India</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
