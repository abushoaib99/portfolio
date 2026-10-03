import { dsa } from "@/data/profile";
import { Section } from "../Section";
import { TagList } from "../Tag";
import { ArrowUpRightIcon, GitHubIcon } from "../icons";

export function ProblemSolving() {
  return (
    <Section
      id="dsa"
      index="08"
      eyebrow="Data structures & algorithms"
      title="800+ problems solved"
      intro={dsa.intro}
    >
      <div className="grid gap-5 lg:grid-cols-[1fr_1.6fr]">
        <div className="reveal flex flex-col rounded-xl border border-line bg-surface p-6">
          <h3 className="font-semibold">Online judges</h3>
          <ul className="mt-4 divide-y divide-line">
            {dsa.platforms.map((p) => (
              <li key={p.platform}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 py-3"
                >
                  <span className="text-sm text-muted group-hover:text-ink">{p.platform}</span>
                  <span className="inline-flex items-center gap-2">
                    <span className="font-mono text-lg font-medium">{p.count}</span>
                    <ArrowUpRightIcon width={14} height={14} className="text-faint group-hover:text-accent" />
                  </span>
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
          <dl className="mt-5 space-y-3 text-sm">
            <div>
              <dt className="font-mono text-xs text-faint">Also practised on</dt>
              <dd className="mt-1">{dsa.alsoPractised.join(" · ")}</dd>
            </div>
            <div>
              <dt className="font-mono text-xs text-faint">Languages</dt>
              <dd className="mt-1">{dsa.languages.join(" · ")}</dd>
            </div>
          </dl>
          <a
            href={dsa.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-medium text-accent hover:underline"
          >
            <GitHubIcon width={16} height={16} /> Solutions & implementations
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2">
          {dsa.topics.map((t) => (
            <li key={t.title} className="reveal rounded-xl border border-line bg-surface p-5">
              <h3 className="mb-3 font-semibold">{t.title}</h3>
              <TagList items={t.items} label={`${t.title} topics`} />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
