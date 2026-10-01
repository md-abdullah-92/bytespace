import { StarIcon } from "@/components/ui/Icons";
import { cn } from "@/lib/cn";

interface StarRatingProps {
  value: number;
  className?: string;
}

/** Single-star numeric rating readout, e.g. "★ 4.5". */
export function StarRating({ value, className }: StarRatingProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 text-sm text-ink-soft",
        className,
      )}
    >
      {value.toFixed(1)}
      <StarIcon className="h-4 w-4 text-border" />
    </span>
  );
}
