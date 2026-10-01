import Link from "next/link";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Variant = "lime" | "outline-light" | "outline-dark" | "ghost-light";
type Size = "md" | "lg";

const variantClasses: Record<Variant, string> = {
  // Primary CTA — solid lime pill with dark text.
  lime: "bg-lime text-ink hover:bg-lime-bright",
  // Used on white backgrounds (e.g. hero search button).
  "outline-light": "bg-ink text-white hover:bg-ink/90",
  // Used on dark/blue backgrounds where the border must read against blue.
  "outline-dark": "border border-white/40 text-white hover:bg-white/10",
  // Low-emphasis link-style button (nav "Sign In").
  "ghost-light": "text-white hover:text-lime",
};

const sizeClasses: Record<Size, string> = {
  md: "h-11 px-6 text-sm",
  lg: "h-[46px] px-6 text-[15px]",
};

interface BaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = BaseProps & {
  href: string;
};

/**
 * Shared pill-shaped button used across the page (nav, hero, CTAs, footer).
 * Renders a Next.js `<Link>` when `href` is passed, otherwise a `<button>`.
 */
export function Button({
  variant = "lime",
  size = "md",
  className,
  children,
  href,
  ...props
}: ButtonAsButton | ButtonAsLink) {
  const classes = cn(
    "inline-flex items-center justify-center whitespace-nowrap rounded-full font-semibold transition-colors",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
