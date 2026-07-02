import Link from "next/link";
import type { Project } from "@/data/portfolio";
import TechStack from "./TechStack";

function videoMimeType(path: string): string {
  if (path.endsWith(".webm")) return "video/webm";
  if (path.endsWith(".ogg")) return "video/ogg";
  return "video/mp4";
}

type ProjectDetailProps = {
  project: Project;
};

function VideoPlayer({ src, title }: { src: string; title: string }) {
  return (
    <div className="overflow-hidden rounded-lg border border-zinc-200 bg-zinc-950">
      <video
        controls
        playsInline
        preload="metadata"
        className="aspect-video w-full"
      >
        <source src={src} type={videoMimeType(src)} />
        Your browser does not support video playback.
      </video>
      <p className="border-t border-zinc-800 px-4 py-2 text-sm text-zinc-400">
        {title}
      </p>
    </div>
  );
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-zinc-200">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <Link
            href="/#projects"
            className="text-sm text-zinc-500 transition-colors hover:text-zinc-900"
          >
            ← Back to portfolio
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
            {project.title}
          </h1>
          <p className="mt-2 text-zinc-600">{project.description}</p>
        </div>

        {project.videos && project.videos.length > 0 && (
          <section className="mb-10">
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-400">
              Demos
            </h2>
            <div className="flex flex-col gap-6">
              {project.videos.map((item) => (
                <VideoPlayer key={item.src} src={item.src} title={item.label} />
              ))}
            </div>
          </section>
        )}

        {project.video && !project.videos?.length && (
          <section className="mb-10">
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-400">
              Demo
            </h2>
            <VideoPlayer src={project.video} title="Project demo" />
          </section>
        )}

        <section className="mb-10">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-400">
            Details
          </h2>
          <p className="leading-relaxed text-zinc-600">{project.longDescription}</p>
        </section>

        <section className="mb-10">
          <TechStack stack={project.stack} size="md" />
        </section>

        {(project.links.live || project.links.github) && (
          <section>
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-400">
              Links
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-md bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
                >
                  Visit site
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-md border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-400 hover:bg-zinc-50"
                >
                  View on GitHub
                </a>
              )}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
