import { profile, skills } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="about" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <p className="mb-3 text-sm font-medium text-zinc-500">{profile.role}</p>
        <h1 className="mb-6 text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
          {profile.name}
        </h1>
        <p className="mb-10 max-w-2xl text-lg leading-relaxed text-zinc-600">
          {profile.tagline}
        </p>

        <div className="mb-10 flex flex-wrap gap-3">
          <p className="mb-2 w-full text-xs font-semibold uppercase tracking-widest text-zinc-400">
            Core strengths
          </p>
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-md border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm text-zinc-700"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="#contact"
            className="inline-flex items-center rounded-md bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
          >
            Get in touch
          </a>
          <a
            href="#projects"
            className="inline-flex items-center rounded-md border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-400 hover:bg-zinc-50"
          >
            View projects
          </a>
        </div>
      </div>
    </section>
  );
}
