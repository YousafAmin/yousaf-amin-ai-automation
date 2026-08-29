import { navLinks, brand } from "@/lib/data/nav";
import { contactChannels } from "@/lib/data/contact";
import { Container } from "@/components/ui/Container";
import { getIcon } from "@/lib/icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-surface/60">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.4] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <Container className="relative py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="#home" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-3-deep text-sm font-bold text-white">
                YA
              </span>
              <span className="text-sm font-semibold tracking-tight text-foreground">{brand.name}</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              {brand.descriptor}. Helping small businesses, service businesses, and startups automate
              work, capture leads, and build modern digital systems.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Navigate</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted transition-colors hover:text-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Get in touch</h4>
            <ul className="space-y-2.5">
              {contactChannels.map((channel) => {
                const Icon = getIcon(channel.icon);
                return (
                  <li key={channel.label}>
                    <a
                      href={channel.href}
                      target={channel.href.startsWith("http") ? "_blank" : undefined}
                      rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
                    >
                      <Icon size={15} className="text-accent-2" />
                      {channel.label}
                      {channel.isPlaceholder ? (
                        <span className="rounded-full border border-border-strong px-1.5 py-0.5 text-[9px] uppercase tracking-wide text-muted-2">
                          Placeholder
                        </span>
                      ) : null}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-2 sm:flex-row">
          <p>© {year} {brand.name}. All rights reserved.</p>
          <p>Built with Next.js, TypeScript &amp; Tailwind CSS.</p>
        </div>
      </Container>
    </footer>
  );
}
