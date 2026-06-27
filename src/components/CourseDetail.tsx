import Link from "next/link";
import type { Course } from "@/data/courses";

type CourseDetailProps = {
  course: Course;
};

export default function CourseDetail({ course }: CourseDetailProps) {
  const certificateUrl = course.certificate
    ? encodeURI(course.certificate)
    : undefined;

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-zinc-200">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <Link
            href="/#courses"
            className="text-sm text-zinc-500 transition-colors hover:text-zinc-900"
          >
            ← Back to portfolio
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-12">
        <div className="mb-8">
          <p className="mb-1 text-sm font-medium text-zinc-500">{course.provider}</p>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
            {course.title}
          </h1>
          <p className="mt-2 text-zinc-600">{course.description}</p>
        </div>

        <section className="mb-10">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-400">
            Topics
          </h2>
          <div className="flex flex-wrap gap-2">
            {course.topics.map((topic) => (
              <span
                key={topic}
                className="rounded-md border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm text-zinc-700"
              >
                {topic}
              </span>
            ))}
          </div>
        </section>

        {certificateUrl && (
          <section className="mb-6">
            <div className="mb-4 flex items-center justify-between gap-4">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
                Certificate
              </h2>
              <a
                href={certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-zinc-900 underline-offset-4 hover:underline"
              >
                Open PDF in new tab
              </a>
            </div>
            <div className="overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50">
              <iframe
                src={certificateUrl}
                title={`${course.title} certificate`}
                className="aspect-[4/3] w-full bg-white sm:aspect-[3/2]"
              />
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
