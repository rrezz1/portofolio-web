type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-zinc-200 py-16">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-10 text-xs font-semibold uppercase tracking-widest text-zinc-400">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
