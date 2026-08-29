"use client";

import { motion } from "framer-motion";
import { BarChart3, Cpu, LayoutTemplate, PhoneCall, Sparkles, Workflow } from "lucide-react";

const SIZE = 500;
const CENTER = { x: 250, y: 250 };

const nodes = [
  { icon: Sparkles, label: "AI Layer", x: 250, y: 60, delay: 0 },
  { icon: PhoneCall, label: "Voice Agent", x: 430.7, y: 191.3, delay: 0.2 },
  { icon: Workflow, label: "Automation", x: 361.7, y: 403.7, delay: 0.4 },
  { icon: BarChart3, label: "Dashboard", x: 138.3, y: 403.7, delay: 0.6 },
  { icon: LayoutTemplate, label: "Website / Form", x: 69.3, y: 191.3, delay: 0.8 },
];

function pct(value: number) {
  return `${(value / SIZE) * 100}%`;
}

export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[560px] overflow-hidden rounded-[2rem]">
      <div className="card-glass absolute inset-0 rounded-[2rem]" />
      <div className="bg-grid absolute inset-4 rounded-[1.6rem] opacity-40 [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]" />

      <motion.div
        aria-hidden
        className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-accent/30 blur-3xl"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-accent-2/25 blur-3xl"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        role="presentation"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6d5cf6" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.4" />
          </linearGradient>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#6d5cf6" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#6d5cf6" stopOpacity="0" />
          </radialGradient>
        </defs>

        {nodes.map((node, i) => (
          <line
            key={i}
            x1={node.x}
            y1={node.y}
            x2={CENTER.x}
            y2={CENTER.y}
            stroke="url(#lineGradient)"
            strokeWidth="1.5"
            strokeDasharray="6 8"
            className="animate-dash"
          />
        ))}

        <circle cx={CENTER.x} cy={CENTER.y} r="90" fill="url(#coreGlow)" />
      </svg>

      <motion.div
        className="absolute flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-white/20 bg-gradient-to-br from-accent/90 to-accent-3-deep/90 shadow-[0_0_50px_-8px_rgba(109,92,246,0.9)]"
        style={{ left: pct(CENTER.x), top: pct(CENTER.y) }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Cpu className="h-10 w-10 text-white" strokeWidth={1.6} />
      </motion.div>

      {nodes.map((node, i) => {
        const Icon = node.icon;
        return (
          <motion.div
            key={node.label}
            className="absolute flex w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 text-center"
            style={{ left: pct(node.x), top: pct(node.y) }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: node.delay }}
          >
            <motion.span
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-border-strong bg-surface-2/90 shadow-lg backdrop-blur-sm"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: node.delay }}
            >
              <Icon className="h-5 w-5 text-accent-2" strokeWidth={1.7} />
            </motion.span>
            <span className="text-[11px] font-medium text-muted">{node.label}</span>
          </motion.div>
        );
      })}

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.4 }}
        className="card-glass absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-foreground/90 shadow-xl"
      >
        <span className="h-2 w-2 animate-pulse-soft rounded-full bg-success" />
        Systems connected &amp; running
      </motion.div>
    </div>
  );
}
