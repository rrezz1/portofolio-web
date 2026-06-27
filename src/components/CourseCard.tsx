import Link from "next/link";
import type { Course } from "@/data/courses";

type CourseCardProps = {
  course: Course;
};

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-zinc-200 bg-white transition-all hover:border-zinc-400 hover:shadow-sm"
    >
      <div className="flex items-center gap-4 border-b border-zinc-100 bg-zinc-50 px-5 py-4">
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-lg font-semibold text-zinc-900 group-hover:text-zinc-700">
            {course.title}
          </h3>
          <p className="text-xs text-zinc-400">
            {course.provider}
            {course.certificate ? " · Certificate" : ""}
          </p>
        </div>
        <span
          aria-hidden
          className="text-zinc-300 transition-transform group-hover:translate-x-0.5 group-hover:text-zinc-500"
        >
          →
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="mb-5 flex-1 text-sm leading-relaxed text-zinc-600">
          {course.description}
        </p>
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-zinc-400">
            Topics
          </p>
          <div className="flex flex-wrap gap-2">
            {course.topics.map((topic) => (
              <span
                key={topic}
                className="rounded bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
