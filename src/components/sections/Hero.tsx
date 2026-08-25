"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroVisual } from "@/components/ui/HeroVisual";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-24 pt-36 sm:pb-32 sm:pt-44">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-accent/20 blur-[140px]" />

      <Container className="relative grid items-center gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border-strong bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-muted"
          >
            <Sparkles size={13} className="text-accent-2" />
            AI Automation &amp; Business Systems Specialist
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl"
          >
            I Build <span className="text-gradient">AI-Powered Systems</span> That Help Businesses Work Smarter.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg"
          >
            I help businesses automate repetitive work, capture more leads, deploy AI voice agents,
            build high-converting websites, and turn raw data into actionable insights.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button href="#contact" size="lg">
              Let&apos;s Build Your System
              <ArrowRight size={16} />
            </Button>
            <Button href="#services" variant="secondary" size="lg">
              View Services
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-8 text-xs uppercase tracking-[0.14em] text-muted-2"
          >
            Automation &middot; AI Voice Agents &middot; Websites &middot; Analytics
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <HeroVisual />
        </motion.div>
      </Container>
    </section>
  );
}
