import { profile } from "@/data/portfolio";
import Section from "./Section";

export default function Contact() {
  const hasLinks = profile.links.github || profile.links.linkedin;

  return (
    <Section id="contact" title="Contact">
      <div className="max-w-lg">
        <p className="mb-8 leading-relaxed text-zinc-600">
          Open to full-time roles and freelance projects. Feel free to reach out.
        </p>

        <dl className="space-y-4 text-sm">
          <div>
            <dt className="mb-1 text-zinc-400">Email</dt>
            <dd>
              <a
                href={`mailto:${profile.email}`}
                className="font-medium text-zinc-900 underline-offset-4 hover:underline"
              >
                {profile.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="mb-1 text-zinc-400">Phone</dt>
            <dd>
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="font-medium text-zinc-900 underline-offset-4 hover:underline"
              >
                {profile.phone}
              </a>
            </dd>
          </div>
          <div>
            <dt className="mb-1 text-zinc-400">Location</dt>
            <dd className="text-zinc-700">{profile.location}</dd>
          </div>
          <div>
            <dt className="mb-1 text-zinc-400">Languages</dt>
            <dd className="text-zinc-700">{profile.languages.join(" · ")}</dd>
          </div>
          {hasLinks && (
            <div>
              <dt className="mb-1 text-zinc-400">Links</dt>
              <dd className="flex gap-4">
                {profile.links.github && (
                  <a
                    href={profile.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-zinc-900 underline-offset-4 hover:underline"
                  >
                    GitHub
                  </a>
                )}
                {profile.links.linkedin && (
                  <a
                    href={profile.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-zinc-900 underline-offset-4 hover:underline"
                  >
                    LinkedIn
                  </a>
                )}
              </dd>
            </div>
          )}
        </dl>
      </div>
    </Section>
  );
}
