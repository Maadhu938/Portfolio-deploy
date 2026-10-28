"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { GithubIcon as Github, InstagramIcon as Instagram, LinkedinIcon as Linkedin } from "./Icons";

const socials = [
  ["LinkedIn", "Professional Network", "https://linkedin.com/in/maadhu-avati-525435279", Linkedin],
  ["GitHub", "Source Code", "https://github.com/Maadhu938", Github],
  ["Instagram", "Social", "https://instagram.com/maadhu_839", Instagram],
] as const;

const socialColors = ["tint sky", "tint butter", "tint coral"];

export default function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="section-shell"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.45 }}
    >
      <div className="section-inner">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="clay tint mint flex flex-col justify-between p-5 sm:p-6 md:p-8">
            <div>
              <span className="card-pill tag text-[11px] font-bold uppercase tracking-[0.16em] px-3.5 py-1.5 rounded-full">
                Get In Touch
              </span>
              <h2 className="font-display mt-4 sm:mt-6 text-3xl sm:text-5xl md:text-6xl font-bold leading-none tracking-tight text-ink">
                Let&apos;s build something great.
              </h2>
              <p className="mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base font-medium leading-7 sm:leading-8 text-ink opacity-90">
                Reach out if you are looking to build a mobile app, full-stack product, AI assistant,
                or a more refined interface for an existing system.
              </p>
            </div>

            <div className="mt-7 sm:mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
              {/* Primary button: coral */}
              <a
                href="mailto:maadhuavati7@gmail.com"
                className="clay-btn clay-coral clay-btn-colored px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold uppercase"
              >
                <Mail size={16} className="text-current" />
                Email me
              </a>
              <span className="card-pill tag px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold uppercase rounded-full">
                <MapPin size={15} className="mr-1 text-current" />
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
                className={`clay p-5 ${socialColors[index % socialColors.length]} group flex items-center justify-between gap-4 transition-transform hover:-translate-y-1`}
              >
                <div className="flex items-center gap-4">
                  <div className="card-button clay-round flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-current" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-ink">
                      {label}
                    </p>
                    <h3 className="font-display mt-1 text-xl font-bold text-ink">{name}</h3>
                  </div>
                </div>
                <div className="card-button clay-round h-10 w-10 shrink-0 flex items-center justify-center">
                  <ArrowUpRight
                    size={20}
                    className="text-current transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
