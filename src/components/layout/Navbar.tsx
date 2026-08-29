"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { navLinks, brand } from "@/lib/data/nav";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border bg-background/80 backdrop-blur-xl" : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between py-3.5">
          <a
            href="#home"
            className={clsx("group flex items-center gap-2.5 rounded-lg", focusRing)}
            onClick={() => setOpen(false)}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-3-deep text-sm font-bold text-white shadow-[0_0_20px_-4px_rgba(109,92,246,0.8)]">
              YA
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-sm font-semibold tracking-tight text-foreground">{brand.name}</span>
              <span className="hidden text-[11px] text-muted sm:block">{brand.shortDescriptor}</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = activeId === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={clsx(
                    "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                    focusRing,
                    isActive ? "text-foreground" : "text-muted hover:bg-white/5 hover:text-foreground",
                  )}
                >
                  {isActive ? (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full bg-white/8"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  ) : null}
                  <span className="relative">{link.label}</span>
                </a>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button href="#projects" variant="ghost" size="sm">
              View My Work
            </Button>
            <Button href="#contact" size="sm">
              Book a Free Consultation
            </Button>
          </div>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={clsx(
              "flex h-10 w-10 items-center justify-center rounded-full border border-border-strong bg-white/[0.03] text-foreground lg:hidden",
              focusRing,
            )}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-border bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {navLinks.map((link, i) => {
                const isActive = activeId === link.href.replace("#", "");
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "true" : undefined}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className={clsx(
                      "rounded-xl px-4 py-3 text-base font-medium",
                      focusRing,
                      isActive ? "bg-white/8 text-foreground" : "text-foreground/90 hover:bg-white/5",
                    )}
                  >
                    {link.label}
                  </motion.a>
                );
              })}
              <div className="mt-3 flex flex-col gap-3 border-t border-border pt-4">
                <Button href="#projects" variant="secondary" onClick={() => setOpen(false)}>
                  View My Work
                </Button>
                <Button href="#contact" onClick={() => setOpen(false)}>
                  Book a Free Consultation
                </Button>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
