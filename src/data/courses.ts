export type Course = {
  id: string;
  slug: string;
  title: string;
  provider: string;
  description: string;
  certificate?: string;
  topics: string[];
};

function slugify(filename: string): string {
  return filename
    .replace(/\.pdf$/i, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const udemyCourseData: { file: string; title: string; topics: string[] }[] = [
  {
    file: "fullstack web develop.pdf",
    title: "Full Stack Web Development",
    topics: ["HTML", "CSS", "JavaScript", "Backend"],
  },
  {
    file: "git github.pdf",
    title: "The Git & GitHub Bootcamp",
    topics: ["Git", "GitHub", "Version Control"],
  },
  {
    file: "python.pdf",
    title: "The Complete Python Bootcamp: Go from Zero to Hero",
    topics: ["Python", "OOP", "Backend"],
  },
  {
    file: "fastapi.pdf",
    title: "FastAPI — The Complete Course 2026 (Beginner + Advanced)",
    topics: ["FastAPI", "Python", "REST API"],
  },
  {
    file: "sql.pdf",
    title: "The Complete SQL Bootcamp: Go from Zero to Hero",
    topics: ["SQL", "PostgreSQL", "Databases"],
  },
  {
    file: "typescript.pdf",
    title: "TypeScript",
    topics: ["TypeScript", "Types", "JavaScript"],
  },
  {
    file: "js.pdf",
    title: "JavaScript",
    topics: ["JavaScript", "ES6+", "DOM"],
  },
  {
    file: "agile.pdf",
    title: "Agile Development",
    topics: ["Scrum", "Kanban", "Agile"],
  },
  {
    file: "next js react.pdf",
    title: "Next.js & React",
    topics: ["Next.js", "React", "SSR"],
  },
  {
    file: "next js react ai.pdf",
    title: "Next.js, React & AI",
    topics: ["Next.js", "React", "AI"],
  },
  {
    file: "ai agent agentic ai.pdf",
    title: "AI Agent & Agentic AI",
    topics: ["AI Agents", "LLMs", "Automation"],
  },
  {
    file: "c sharp.pdf",
    title: "C# Programming",
    topics: ["C#", ".NET", "OOP"],
  },
  {
    file: "asp dot net.pdf",
    title: "ASP.NET",
    topics: ["ASP.NET", "C#", "Web APIs"],
  },
  {
    file: "aws.pdf",
    title: "AWS Cloud Computing",
    topics: ["AWS", "Cloud", "Infrastructure"],
  },
];

function topicsFromTitle(title: string): string[] {
  const map: Record<string, string[]> = {
    "Full-Stack Development & UI/UX Design": [
      "Full-Stack",
      "UI/UX",
      "Web Development",
    ],
    "C# & .NET Core Development": ["C#", ".NET Core", "Backend"],
    "Programming Module — Software Development": [
      "Programming",
      "Software Development",
    ],
  };

  return map[title] ?? [title];
}

const udemyCourses: Course[] = udemyCourseData.map((course, index) => ({
  id: `course-${index + 1}`,
  slug: slugify(course.file),
  title: course.title,
  provider: "Udemy",
  description: `Udemy certification in ${course.title}.`,
  certificate: `/udemy/${course.file}`,
  topics: course.topics,
}));

const otherCourses: Course[] = [
  {
    id: "course-tectigon-1",
    slug: "tectigon-fullstack-uiux",
    title: "Full-Stack Development & UI/UX Design",
    provider: "Tectigon Academy",
    description:
      "Training in full-stack development combined with UI/UX design principles and practical project work.",
    topics: topicsFromTitle("Full-Stack Development & UI/UX Design"),
  },
  {
    id: "course-tectigon-2",
    slug: "tectigon-csharp-dotnet",
    title: "C# & .NET Core Development",
    provider: "Tectigon Academy",
    description:
      "Structured training in C# programming and .NET Core application development.",
    topics: topicsFromTitle("C# & .NET Core Development"),
  },
  {
    id: "course-ubt",
    slug: "ubt-programming-module",
    title: "Programming Module — Software Development",
    provider: "UBT",
    description:
      "Successfully completed a 120-hour module in programming within the Software Development qualification.",
    topics: topicsFromTitle("Programming Module — Software Development"),
  },
];

export const courses: Course[] = [...udemyCourses, ...otherCourses];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug);
}
