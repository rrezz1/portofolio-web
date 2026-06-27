import { experience } from "@/data/portfolio";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" title="Work Experience">
      <div className="flex flex-col gap-12">
        {experience.map((job) => (
          <article key={job.id} className="group">
            <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-zinc-900">{job.role}</h3>
                <p className="text-zinc-600">{job.company}</p>
              </div>
              <div className="text-sm text-zinc-400">
                <span>{job.period}</span>
                <span className="mx-2">·</span>
                <span>{job.location}</span>
              </div>
            </div>
            <ul className="ml-4 list-disc space-y-2 text-zinc-600">
              {job.highlights.map((item) => (
                <li key={item} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
