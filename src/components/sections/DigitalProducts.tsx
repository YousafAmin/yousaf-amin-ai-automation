import { PackageOpen } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { digitalProducts } from "@/lib/data/digitalProducts";

export function DigitalProducts() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <RevealOnScroll className="card-glass mx-auto flex max-w-3xl flex-col items-center gap-4 rounded-2xl px-6 py-10 text-center sm:px-10">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border-strong bg-white/[0.03]">
            <PackageOpen className="h-5 w-5 text-accent-2" strokeWidth={1.7} />
          </span>
          <span className="text-xs font-medium uppercase tracking-[0.14em] text-accent-2">
            {digitalProducts.eyebrow}
          </span>
          <h3 className="text-xl font-semibold text-foreground sm:text-2xl">{digitalProducts.title}</h3>
          <p className="max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            {digitalProducts.description}
          </p>

          {digitalProducts.href ? (
            <Button href={digitalProducts.href} variant="secondary" size="sm" className="mt-2">
              {digitalProducts.ctaLabel}
            </Button>
          ) : (
            <span className="mt-2 inline-flex items-center gap-2 rounded-full border border-border-strong bg-white/[0.02] px-4 py-2 text-xs font-medium uppercase tracking-wide text-muted-2">
              {digitalProducts.ctaLabel} — Coming Soon
            </span>
          )}
        </RevealOnScroll>
      </Container>
    </section>
  );
}
