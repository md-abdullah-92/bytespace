import { cn } from "@/lib/cn";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  /** `translucent` sits on top of images (course-card meta chips). */
  tone?: "solid" | "translucent";
}

/** Rounded meta chip, e.g. "17 Lessons" or "Beginner". */
export function Badge({ children, className, tone = "solid" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium",
        tone === "solid" && "bg-surface-soft text-ink-faint",
        tone === "translucent" && "bg-white/60 text-ink-faint backdrop-blur",
        className,
      )}
    >
      {children}
    </span>
  );
}
