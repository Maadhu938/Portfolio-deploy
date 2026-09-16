"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { GithubIcon as Github, InstagramIcon as Instagram, LinkedinIcon as Linkedin } from "./Icons";

const socials = [
  ["LinkedIn", "professional", "https://linkedin.com/in/maadhu-avati-525435279", Linkedin],
  ["GitHub", "source code", "https://github.com/Maadhu938", Github],
  ["Instagram", "social", "https://instagram.com/maadhu_839", Instagram],
] as const;

export default function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="section-shell pb-20 md:pb-28"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.45 }}
    >
      <div className="section-inner">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="pixel-card bg-primary p-6 text-foreground md:p-8">
            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-muted-foreground">Final world / Contact</p>
            <h2 className="mt-6 text-4xl font-black uppercase leading-none tracking-tight md:text-6xl">
              Ready for co-op mode?
            </h2>
            <p className="mt-6 max-w-2xl text-sm font-semibold leading-8 text-muted-foreground md:text-base">
              Send a quest if you want to build a mobile app, full-stack product, AI assistant,
              or a cleaner interface for something that already exists.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="mailto:maadhuavati7@gmail.com" className="pixel-button bg-card px-5 py-3 text-sm font-black uppercase text-foreground">
                <Mail size={17} />
                Email me
              </a>
              <span className="inline-flex items-center gap-2 border-2 border-foreground/70 px-5 py-3 text-sm font-black uppercase">
                <MapPin size={17} />
                Bangalore
              </span>
            </div>
          </div>

          <div className="grid gap-4">
            {socials.map(([name, label, href, Icon], index) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group pixel-card-sm flex items-center justify-between gap-4 bg-card p-5 transition-transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center border-2 border-border bg-muted">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                      Link 0{index + 1} / {label}
                    </p>
                    <h3 className="mt-1 text-xl font-black uppercase">{name}</h3>
                  </div>
                </div>
                <ArrowUpRight size={18} className="shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
