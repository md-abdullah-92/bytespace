import Link from "next/link";
import type { Category } from "@/types";

interface CategoryCardProps {
  category: Category;
}

/** Square tile with an icon bubble, used in the categories grid. */
export function CategoryCard({ category }: CategoryCardProps) {
  const Icon = category.icon;

  return (
    <Link
      href={`/categories/${category.id}`}
      className="flex flex-col items-center gap-4 rounded-2xl border border-border/70 bg-white px-6 py-10 text-center transition-colors hover:border-brand/40 hover:bg-surface-soft"
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-lime">
        <Icon className="h-6 w-6 text-ink" />
      </span>
      <span className="text-base font-semibold text-ink">
        {category.label}
      </span>
    </Link>
  );
}
