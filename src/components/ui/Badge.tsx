import { ReactNode } from "react";
import clsx from "clsx";

export function Badge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wide",
        className,
      )}
    >
      {children}
    </span>
  );
}
