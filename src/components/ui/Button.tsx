import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-2/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

const variants = {
  primary:
    "bg-gradient-to-r from-accent to-accent-3 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset,0_8px_30px_-8px_rgba(109,92,246,0.65)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.12)_inset,0_10px_40px_-6px_rgba(109,92,246,0.85)] hover:-translate-y-0.5",
  secondary:
    "border border-border-strong bg-white/[0.03] text-foreground hover:bg-white/[0.07] hover:border-white/25",
  ghost: "text-foreground/80 hover:text-foreground",
};

const sizes = {
  sm: "px-4 py-2 text-xs",
  md: "px-5 py-3",
  lg: "px-7 py-3.5 text-base",
};

type Variant = keyof typeof variants;
type Size = keyof typeof sizes;

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function Button(props: ButtonAsButton | ButtonAsAnchor) {
  const { variant = "primary", size = "md", className, children, ...rest } = props;
  const classes = clsx(baseStyles, variants[variant], sizes[size], className);

  if ("href" in props && props.href) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
