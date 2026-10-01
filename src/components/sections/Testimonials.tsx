import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { testimonials } from "@/data/content";

/** "Discover What Our Community Is Saying" testimonials section. */
export function Testimonials() {
  return (
    <section
      className="py-24"
      style={{
        background:
          "linear-gradient(120deg, rgba(0,59,226,0.10) 0%, rgba(255,255,255,0) 30%, rgba(212,251,32,0.18) 100%)",
      }}
    >
      <div className="container-page flex flex-col gap-12">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <h2 className="text-4xl font-bold leading-tight text-ink md:text-[44px]">
            Discover What Our Community Is Saying
          </h2>
          <p className="text-base leading-relaxed text-ink-muted">
            At ByteSpace, our vibrant community of learners and creators is
            at the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating
            on our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
