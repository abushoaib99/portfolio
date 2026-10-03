import type { Diagram } from "@/data/types";

/**
 * Renders a sequential flow as accessible HTML: an ordered list of steps.
 * Vertical on small screens, horizontal from `lg` up when the container allows it.
 */
export function FlowDiagram({ diagram }: { diagram: Diagram }) {
  return (
    <figure className="reveal rounded-xl border border-line bg-surface p-5 sm:p-6">
      <figcaption className="mb-5">
        <h3 className="font-semibold">{diagram.title}</h3>
        <p className="mt-1 text-sm text-muted">{diagram.caption}</p>
      </figcaption>
      <ol className="flex flex-col gap-0">
        {diagram.lanes.map((lane, i) => (
          <li key={i} className="flex flex-col items-stretch">
            {i > 0 && (
              <span aria-hidden className="mx-auto my-1 flex h-6 flex-col items-center text-faint">
                <span className="h-4 w-px bg-line-strong" />
                <span className="-mt-1 text-[10px] leading-none">▼</span>
              </span>
            )}
            <div className={`grid gap-2 ${lane.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
              {lane.map((node) => (
                <div
                  key={node.label}
                  className="rounded-lg border border-line bg-surface-2 px-3 py-2.5 transition-colors hover:border-accent"
                >
                  <p className="font-mono text-[13px] font-medium break-words">{node.label}</p>
                  {node.detail && <p className="mt-0.5 text-xs leading-snug text-muted">{node.detail}</p>}
                </div>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </figure>
  );
}
