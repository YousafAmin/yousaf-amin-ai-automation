import { BrainCircuit, LineChart, Workflow as WorkflowIcon, Code2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";

const pillars = [
  { icon: LineChart, label: "Business Analysis" },
  { icon: BrainCircuit, label: "AI Automation" },
  { icon: WorkflowIcon, label: "Workflow Systems" },
  { icon: Code2, label: "Web Development" },
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <Container className="grid items-center gap-14 lg:grid-cols-[1fr_1fr]">
        <RevealOnScroll>
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-border-strong bg-white/[0.03] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-accent-2">
            About
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Yousaf Amin — AI Automation &amp; Business Systems Specialist
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            I combine a background in business analytics with hands-on skill in AI, automation, data,
            and modern web development. That combination means I don&apos;t just build technology — I build
            it around how a specific business actually operates.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            My focus is practical: automating the repetitive parts of running a business, capturing and
            qualifying leads, making data usable, and shipping websites and systems that hold up in
            production — not just in a demo.
          </p>
          <div className="mt-8 rounded-2xl border border-border-strong bg-white/[0.03] p-5">
            <p className="text-sm font-medium text-foreground/90">
              &ldquo;Technology should solve business problems, not create more complexity.&rdquo;
            </p>
          </div>
          <div className="mt-8">
            <Button href="#contact" variant="secondary">
              Work With Me
            </Button>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.15} className="grid grid-cols-2 gap-4">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.label}
                className="card-glass flex flex-col items-start gap-4 rounded-2xl p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border-strong bg-white/[0.03]">
                  <Icon className="h-5 w-5 text-accent-2" strokeWidth={1.7} />
                </span>
                <span className="text-sm font-medium text-foreground/90">{pillar.label}</span>
              </div>
            );
          })}
        </RevealOnScroll>
      </Container>
    </section>
  );
}
