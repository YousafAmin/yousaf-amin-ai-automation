import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Badge } from "@/components/ui/Badge";
import { projects, badgeStyles } from "@/lib/data/projects";
import { getIcon } from "@/lib/icons";

export function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Featured Projects"
          description="Demos and sample projects that show how these systems come together. Clearly labeled — no fabricated clients or results."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => {
            const Icon = getIcon(project.icon);
            return (
              <RevealOnScroll key={project.id} delay={i * 0.08}>
                <div className="glow-border card-glass group h-full overflow-hidden rounded-2xl">
                  <div className="bg-grid relative flex h-44 items-center justify-center overflow-hidden border-b border-border bg-gradient-to-br from-surface-2 to-surface">
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/15 via-transparent to-accent-2/10" />
                    <span className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-border-strong bg-white/[0.04] backdrop-blur-sm transition-transform duration-500 group-hover:scale-105">
                      <Icon className="h-9 w-9 text-accent-2" strokeWidth={1.5} />
                    </span>
                    <Badge className={`absolute right-4 top-4 ${badgeStyles[project.badge]}`}>
                      {project.badge}
                    </Badge>
                  </div>

                  <div className="p-6 sm:p-8">
                    <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{project.summary}</p>

                    <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                      {project.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-xs text-muted sm:text-sm">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border-strong bg-white/[0.03] px-2.5 py-1 text-[11px] text-muted-2"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm text-muted-2">
          More case studies and client work will be added here as projects are completed.
        </p>
      </Container>
    </section>
  );
}
