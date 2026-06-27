import { education } from "@/data/portfolio";
import Section from "./Section";

export default function EducationSection() {
  return (
    <Section id="education" title="Education">
      <div className="flex flex-col gap-10">
        {education.map((item) => (
          <article key={item.id}>
            <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-zinc-900">{item.degree}</h3>
                <p className="text-zinc-600">{item.institution}</p>
              </div>
              <div className="text-sm text-zinc-400">
                <span>{item.period}</span>
                <span className="mx-2">·</span>
                <span>{item.location}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
