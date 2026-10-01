import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
  className?: string;
  /** Colour treatment for use on dark (blue) section backgrounds. */
  tone?: "dark" | "light";
}

/** Title + supporting copy used to introduce most sections on the page. */
export function SectionHeading({
  title,
  description,
  align = "center",
  tone = "dark",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <h2
        className={cn(
          "text-4xl font-bold leading-tight md:text-[44px]",
          tone === "dark" ? "text-ink" : "text-white",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed",
            tone === "dark" ? "text-ink-muted" : "text-white/80",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
