import { cn } from "@/lib/cn";

/**
 * Faint white grid lines used as a texture on top of the brand-blue
 * sections (hero + "Unlock Your Potential" banner). Implemented as a CSS
 * background so it scales with the section instead of a fixed SVG.
 */
export function GridOverlay({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 opacity-[0.12]", className)}
      style={{
        backgroundImage:
          "repeating-linear-gradient(to right, white 0, white 2px, transparent 2px, transparent 120px), repeating-linear-gradient(to bottom, white 0, white 2px, transparent 2px, transparent 120px)",
      }}
    />
  );
}
