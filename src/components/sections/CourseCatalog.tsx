"use client";

import { useState } from "react";
import { CourseCard } from "@/components/cards/CourseCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";
import { courseFilters, courses } from "@/data/courses";

/**
 * "Discover Your Passion" section: category filter chips above a grid of
 * course cards. Filtering is presentational only (no real dataset to
 * filter against yet) — swap `visibleCourses` for a real query later.
 */
export function CourseCatalog() {
  const [activeFilter, setActiveFilter] = useState(courseFilters[0]);
  const visibleCourses = courses;

  return (
    <section className="py-24">
      <div className="container-page flex flex-col items-center gap-12">
        <SectionHeading
          title={
            <>
              Discover Your Passion,
              <br />
              Build Your Skills
            </>
          }
          description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
        />

        <div
          role="tablist"
          aria-label="Course categories"
          className="flex flex-wrap justify-center gap-3"
        >
          {courseFilters.map((filter) => (
            <button
              key={filter}
              role="tab"
              type="button"
              aria-selected={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "rounded-full px-5 py-2.5 text-sm font-medium transition-colors",
                activeFilter === filter
                  ? "bg-lime text-ink"
                  : "bg-surface-soft text-ink-soft hover:bg-border/40",
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
