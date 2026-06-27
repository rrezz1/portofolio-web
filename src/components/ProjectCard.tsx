import Link from "next/link";
import type { Project } from "@/data/portfolio";
import TechStack from "./TechStack";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-zinc-200 bg-white transition-all hover:border-zinc-400 hover:shadow-sm"
    >
      <div className="flex items-center justify-between gap-4 border-b border-zinc-100 bg-zinc-50 px-5 py-4">
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-semibold text-zinc-900 group-hover:text-zinc-700">
            {project.title}
          </h3>
          {project.video && (
            <p className="text-xs text-zinc-400">Has video demo</p>
          )}
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
          {project.description}
        </p>
        <TechStack stack={project.stack} />
      </div>
    </Link>
  );
}
