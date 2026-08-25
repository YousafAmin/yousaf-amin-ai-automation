import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { processSteps } from "@/lib/data/process";
import { getIcon } from "@/lib/icons";

export function Process() {
  return (
    <section id="process" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Process"
          title="A Clear Path From Problem to System"
          description="No guesswork. Every project follows the same disciplined process."
        />

        <div className="relative mt-20">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-accent via-border to-transparent lg:left-1/2 lg:block" />

          <div className="grid gap-10 lg:grid-cols-4 lg:gap-6">
            {processSteps.map((step, i) => {
              const Icon = getIcon(step.icon);
              return (
                <RevealOnScroll key={step.number} delay={i * 0.1} className="relative pl-16 lg:pl-0 lg:text-center">
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-2xl border border-border-strong bg-gradient-to-br from-accent/25 to-accent-2/10 lg:static lg:mx-auto lg:mb-6">
                    <Icon className="h-5 w-5 text-accent-2" strokeWidth={1.7} />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-2">
                    {step.number}
                  </span>
                  <h3 className="mt-1.5 text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted lg:mx-auto lg:max-w-[220px]">
                    {step.description}
                  </p>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
