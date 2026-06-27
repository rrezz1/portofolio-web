import { profile } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 py-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 px-6 text-sm text-zinc-400 sm:flex-row">
        <p>© {year} {profile.name}</p>
        <p>Built with Next.js & Tailwind CSS</p>
      </div>
    </footer>
  );
}
