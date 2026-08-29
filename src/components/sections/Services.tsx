import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowCard } from "@/components/ui/GlowCard";
import { services } from "@/lib/data/services";
import { getIcon } from "@/lib/icons";

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Practical Systems, Built Around Business Outcomes"
          description="Five core service areas that can stand alone or combine into a complete business system."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {services.map((service, i) => {
            const Icon = getIcon(service.icon);
            return (
              <GlowCard key={service.id} delay={i * 0.08} className={i === 4 ? "lg:col-span-2" : ""}>
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-border-strong bg-gradient-to-br from-accent/20 to-accent-2/10">
                    <Icon className="h-7 w-7 text-accent-2" strokeWidth={1.6} />
                  </span>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground">{service.name}</h3>
                    <p className="mt-1 text-sm font-medium text-accent-2">{service.tagline}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{service.description}</p>

                    <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                      {service.useCases.map((useCase) => (
                        <li key={useCase} className="flex items-start gap-2 text-xs text-muted sm:text-sm">
                          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                          {useCase}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-border-strong bg-white/[0.03] px-2.5 py-1 text-[11px] text-muted-2"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href="#contact"
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent-2"
                    >
                      {service.ctaLabel}
                      <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </GlowCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
