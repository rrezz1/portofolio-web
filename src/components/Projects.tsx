import { projects } from "@/data/portfolio";
import ProjectCard from "@/components/ProjectCard";
import Section from "./Section";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <p className="-mt-6 mb-8 text-sm text-zinc-500">
        A few things I have worked on. Click one to read more or watch a demo.
      </p>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
