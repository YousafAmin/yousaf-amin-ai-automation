import { trustItems } from "@/lib/data/tech";
import { Container } from "@/components/ui/Container";

export function TrustBar() {
  const loop = [...trustItems, ...trustItems];

  return (
    <section className="border-y border-border bg-surface/40 py-8">
      <Container>
        <p className="mb-5 text-center text-xs font-medium uppercase tracking-[0.16em] text-muted-2">
          Core capability areas
        </p>
      </Container>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
        <div className="flex w-max animate-marquee gap-12">
          {loop.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="whitespace-nowrap text-sm font-medium tracking-wide text-muted/80"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
