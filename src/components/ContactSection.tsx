export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 bg-fg text-bg">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
          <div className="lg:col-span-12">
            <h2 className="text-[clamp(3.5rem,15vw,12rem)] font-bold tracking-tighter leading-[0.85] uppercase">
              Let's build <br /> <span className="font-serif italic lowercase tracking-tight">something</span> <br /> permanent.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-bg/20 pt-12 font-mono text-sm uppercase tracking-widest">
          <div className="space-y-4">
             <div className="opacity-40 text-[10px]">Email</div>
             <a href="mailto:maadhuavati7@gmail.com" className="block text-xl hover:opacity-50 transition-opacity lowercase font-sans font-medium tracking-tight">
               maadhuavati7@gmail.com
             </a>
          </div>
          <div className="space-y-4">
             <div className="opacity-40 text-[10px]">Socials</div>
             <div className="flex flex-col gap-2">
                <a href="https://linkedin.com/in/maadhu-avati-525435279" target="_blank" className="hover:opacity-50 transition-opacity">LinkedIn</a>
                <a href="https://instagram.com/maadhu_839" target="_blank" className="hover:opacity-50 transition-opacity">Instagram</a>
             </div>
          </div>
          <div className="space-y-4">
             <div className="opacity-40 text-[10px]">Location</div>
             <div className="text-lg font-sans font-medium tracking-tight">Andhra Pradesh, India</div>
          </div>
        </div>
      </div>
    </section>
  );
}
