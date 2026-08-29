import { XCircle, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { problems } from "@/lib/data/tech";

const solutionPoints = [
  "Automated workflows that connect your tools",
  "AI that handles repetitive, rules-based work",
  "Clear analytics instead of messy spreadsheets",
  "A modern website that actually converts visitors",
];

export function ProblemSolution() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="The Real Problem"
          title="Your Business Doesn't Need More Tools. It Needs Better Systems."
          description="Most businesses aren't short on software — they're short on systems that connect it all together."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <RevealOnScroll delay={0.05} className="card-glass rounded-2xl p-8">
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wide text-danger">
              What&apos;s slowing things down
            </h3>
            <ul className="space-y-4">
              {problems.map((problem) => (
                <li key={problem} className="flex items-start gap-3 text-sm text-muted sm:text-base">
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-danger/80" strokeWidth={1.6} />
                  {problem}
                </li>
              ))}
            </ul>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15} className="card-glass rounded-2xl p-8">
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wide text-success">
              What replaces it
            </h3>
            <ul className="space-y-4">
              {solutionPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-muted sm:text-base">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success/80" strokeWidth={1.6} />
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-border pt-6 text-sm font-medium text-foreground/90">
              Automated workflows + AI + analytics + modern digital systems — working together.
            </p>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}
