import { education, problemSolving } from "@/data/profile";
import { Section } from "../Section";
import { ArrowUpRightIcon } from "../icons";

export function Education() {
  return (
    <Section id="education" index="08" eyebrow="Education & fundamentals" title="Education and problem solving">
      <div className="grid gap-5 lg:grid-cols-2">
        <div className="reveal rounded-xl border border-line bg-surface p-6">
          <p className="font-mono text-xs text-faint">{education.year}</p>
          <h3 className="mt-2 text-lg font-semibold">{education.degree}</h3>
          <p className="mt-1 text-muted">{education.institution}</p>
        </div>
        <div className="reveal rounded-xl border border-line bg-surface p-6">
          <h3 className="font-semibold">Competitive programming</h3>
          <p className="mt-1 text-sm text-muted">Practice with data structures and algorithms, beyond what day-to-day work needs.</p>
          <ul className="mt-4 divide-y divide-line">
            {problemSolving.map((p) => (
              <li key={p.platform}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 py-2.5 text-sm"
                >
                  <span className="text-muted group-hover:text-ink">{p.platform}</span>
                  <span className="inline-flex items-center gap-2 font-mono">
                    {p.count} solved
                    <ArrowUpRightIcon width={14} height={14} className="text-faint group-hover:text-accent" />
                  </span>
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
