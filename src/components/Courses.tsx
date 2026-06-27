import { courses } from "@/data/courses";
import CourseCard from "@/components/CourseCard";
import Section from "./Section";

export default function Courses() {
  return (
    <Section id="courses" title="Courses & Certifications">
      <p className="-mt-6 mb-8 text-sm text-zinc-500">
        Click a course to view details and the Udemy certificate.
      </p>
      <div className="grid gap-6 sm:grid-cols-2">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </Section>
  );
}
