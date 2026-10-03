import type { Principle } from "@/data/types";

export function PrincipleGrid({ items }: { items: Principle[] }) {
  return (
    <ul className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
      {items.map((p) => (
        <li key={p.title} className="reveal bg-surface p-5 sm:p-6">
          <h3 className="font-semibold">{p.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
        </li>
      ))}
    </ul>
  );
}
