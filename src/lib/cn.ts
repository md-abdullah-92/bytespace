type ClassValue = string | number | null | boolean | undefined;

/**
 * Tiny `clsx`-style class combiner so we don't need an extra dependency.
 * Falsy values are dropped; everything else is joined with a space.
 */
export function cn(...values: ClassValue[]): string {
  return values.filter(Boolean).join(" ");
}
