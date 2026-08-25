import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowCard } from "@/components/ui/GlowCard";
import { solutions } from "@/lib/data/solutions";
import { getIcon } from "@/lib/icons";

export function Solutions() {
  return (
    <section id="solutions" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Solutions"
          title="Solutions Built Around Your Business"
          description="Every industry has different bottlenecks. Here's how automation and AI typically apply to yours."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, i) => {
            const Icon = getIcon(solution.icon);
            return (
              <GlowCard key={solution.id} delay={i * 0.06}>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-border-strong bg-white/[0.03]">
                  <Icon className="h-6 w-6 text-accent-2" strokeWidth={1.6} />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{solution.industry}</h3>
                <p className="mt-1 text-xs text-muted-2">{solution.businesses}</p>

                <ul className="mt-5 space-y-2.5">
                  {solution.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-2" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent-2"
                >
                  Discuss Your Business
                  <ArrowRight size={15} />
                </a>
              </GlowCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
