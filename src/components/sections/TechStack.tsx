import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { techStack } from "@/lib/data/tech";
import { getIcon } from "@/lib/icons";

export function TechStack() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Tools &amp; Technology"
          title="The Stack Behind the Systems"
          description="A focused toolkit chosen for reliability, not novelty."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {techStack.map((group, i) => {
            const Icon = getIcon(group.icon);
            return (
              <RevealOnScroll key={group.category} delay={i * 0.06} className="card-glass rounded-2xl p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border-strong bg-white/[0.03]">
                  <Icon className="h-5 w-5 text-accent-2" strokeWidth={1.7} />
                </span>
                <h3 className="mt-4 text-sm font-semibold text-foreground">{group.category}</h3>
                <ul className="mt-3 space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-xs text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </RevealOnScroll>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
