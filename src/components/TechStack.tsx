type TechStackProps = {
  stack: string[];
  size?: "sm" | "md";
};

export default function TechStack({ stack, size = "sm" }: TechStackProps) {
  const tagClass =
    size === "md"
      ? "rounded-md border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm text-zinc-700"
      : "rounded bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600";

  return (
    <div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-zinc-400">
        Stack
      </p>
      <div className="flex flex-wrap gap-2">
        {stack.map((tech) => (
          <span key={tech} className={tagClass}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
