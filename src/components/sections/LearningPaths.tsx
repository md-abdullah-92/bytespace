import { CategoryCard } from "@/components/cards/CategoryCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { categories } from "@/data/content";

/** "Explore Diverse Learning Paths" category tile grid. */
export function LearningPaths() {
  return (
    <section className="pb-24">
      <div className="container-page flex flex-col items-center gap-12">
        <SectionHeading
          title="Explore Diverse Learning Paths at Bytespace"
          description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
        />

        <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
