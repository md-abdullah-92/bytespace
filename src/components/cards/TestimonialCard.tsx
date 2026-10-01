import Image from "next/image";
import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

/** Community-quote card used in the testimonials grid. */
export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <figure className="flex flex-col gap-5 rounded-2xl bg-white p-8 shadow-card">
      <Image
        src={testimonial.avatar}
        alt=""
        width={64}
        height={64}
        className="h-16 w-16 rounded-full object-cover"
      />
      <figcaption>
        <p className="text-base font-semibold text-ink">{testimonial.name}</p>
        <p className="text-sm text-brand">{testimonial.role}</p>
      </figcaption>
      <blockquote className="text-sm leading-relaxed text-ink-soft">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
    </figure>
  );
}
