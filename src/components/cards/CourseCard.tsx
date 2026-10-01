import Image from "next/image";
import Link from "next/link";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { Badge } from "@/components/ui/Badge";
import { LevelIcon } from "@/components/ui/Icons";
import { StarRating } from "@/components/ui/StarRating";
import type { Course } from "@/types";

interface CourseCardProps {
  course: Course;
}

/** Catalog card: thumbnail, meta chips, author, level, price. */
export function CourseCard({ course }: CourseCardProps) {
  return (
    <article className="flex flex-col rounded-2xl border border-border/70 bg-white p-4 transition-shadow hover:shadow-card">
      <div className="relative aspect-[341/195] overflow-hidden rounded-xl bg-card-dark">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
        <div className="absolute bottom-3 left-3 flex gap-2">
          <Badge tone="translucent">{course.lessons} Lessons</Badge>
          <Badge tone="translucent">{course.duration}</Badge>
        </div>
      </div>

      <div className="flex items-start justify-between gap-2 pt-4">
        <h3 className="text-base font-semibold text-ink">
          <Link href={`/courses/${course.id}`} className="hover:underline">
            {course.title}
          </Link>
        </h3>
        <StarRating value={course.rating} className="shrink-0 pt-0.5" />
      </div>

      <p className="pt-1 text-sm text-ink-muted">
        by{" "}
        <Link
          href={course.authorHref}
          className="text-brand hover:underline"
        >
          {course.author}
        </Link>
      </p>

      <div className="flex items-center justify-between pt-4">
        <Badge className="gap-1.5">
          <LevelIcon className="h-3 w-3 text-ink-faint" />
          {course.level}
        </Badge>
        <AvatarStack
          avatars={course.avatars}
          countLabel={`${course.students}+`}
          size={24}
        />
      </div>

      <p className="pt-4 text-lg font-bold text-brand">
        ${course.price}
        <span className="text-sm font-normal text-ink-muted">/lifetime</span>
      </p>
    </article>
  );
}
