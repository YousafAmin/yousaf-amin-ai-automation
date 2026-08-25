import { ReactNode } from "react";
import clsx from "clsx";
import { RevealOnScroll } from "./RevealOnScroll";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <RevealOnScroll
      className={clsx(
        "mx-auto max-w-3xl",
        align === "center" ? "text-center" : "text-left mx-0",
        className,
      )}
    >
      {eyebrow ? (
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-border-strong bg-white/[0.03] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-accent-2">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-pretty text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </RevealOnScroll>
  );
}
