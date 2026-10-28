"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, Mail, MapPin } from "lucide-react";
import { GithubIcon as Github } from "./Icons";
import ClayClock from "./ClayClock";

export default function Hero() {

  return (
    <section className="section-shell relative overflow-hidden pt-24 sm:pt-28 md:pt-32 pb-8">
      <div className="section-inner relative grid items-stretch gap-6 sm:gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="h-full"
        >
          <div className="clay-card h-full flex flex-col justify-between gap-6">
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <span className="clay-chip-mint text-xs font-semibold uppercase">
                Open to work
              </span>
              <span className="clay-chip text-xs font-medium">
                <MapPin size={14} className="mr-1.5 text-current" />
                Bangalore, IN
              </span>
            </div>

            <div className="py-1">
              <p className="eyebrow">Full-stack engineer / AI builder</p>
              <h1 className="font-display mt-3 sm:mt-4 max-w-4xl text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.98] tracking-tight">
                Maadhu Avati
              </h1>
              <p className="mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base font-medium leading-7 sm:leading-8 text-muted-foreground md:text-lg">
                I build web, mobile, and AI systems with clear architecture, reliable logic,
                and interfaces designed for speed, clarity, and intuitive interaction.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {/* Primary button: coral */}
              <Link
                href="#projects"
                className="clay-btn clay-coral clay-btn-colored px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold uppercase"
              >
                View projects <ArrowDown size={16} className="text-current" />
              </Link>
              {/* Secondary button: neutral surface */}
              <a
                href="mailto:maadhuavati7@gmail.com"
                className="clay-btn px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold uppercase"
              >
                <Mail size={16} className="text-current" />
                Send mail
              </a>
              {/* Secondary button: neutral surface */}
              <a
                href="https://github.com/Maadhu938"
                target="_blank"
                rel="noopener noreferrer"
                className="clay-round text-current"
                aria-label="Open GitHub profile"
              >
                <Github size={20} className="text-current" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="h-full"
        >
          {/* Hero right panel: Animated clay clock showing live Bangalore time */}
          <ClayClock />
        </motion.div>
      </div>
    </section>
  );
}
