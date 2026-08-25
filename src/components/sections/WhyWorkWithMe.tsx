import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowCard } from "@/components/ui/GlowCard";
import { whyPoints } from "@/lib/data/tech";
import { getIcon } from "@/lib/icons";

export function WhyWorkWithMe() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Why Work With Me"
          title="A Business-First Approach to Technology"
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyPoints.map((point, i) => {
            const Icon = getIcon(point.icon);
            return (
              <GlowCard key={point.title} delay={i * 0.07}>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-border-strong bg-white/[0.03]">
                  <Icon className="h-5 w-5 text-accent-2" strokeWidth={1.7} />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{point.description}</p>
              </GlowCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
