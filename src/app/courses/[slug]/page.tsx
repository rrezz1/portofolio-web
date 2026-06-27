import { notFound } from "next/navigation";
import type { Metadata } from "next";
import CourseDetail from "@/components/CourseDetail";
import { courses, getCourseBySlug } from "@/data/courses";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return { title: "Course not found" };
  }

  return {
    title: `${course.title} — ${course.provider}`,
    description: course.description,
  };
}

export default async function CoursePage({ params }: PageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return <CourseDetail course={course} />;
}
