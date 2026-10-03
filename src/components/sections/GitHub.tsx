import githubData from "@/data/github.json";
import { repoNotes } from "@/data/profile";
import type { GithubSnapshot } from "@/data/types";
import { Section } from "../Section";
import { ArrowUpRightIcon, GitHubIcon } from "../icons";

const snapshot = githubData as GithubSnapshot;
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function formatPushed(iso: string): string {
  const d = new Date(iso);
  return `${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

export function GitHub() {
  // Curated notes decide order and wording; the snapshot supplies live metadata (language, last push).
  const repos = repoNotes.flatMap((note) => {
    const meta = snapshot.repos.find((r) => r.name === note.name);
    return meta ? [{ ...note, ...meta }] : [];
  });

  return (
    <Section
      id="github"
      index="07"
      eyebrow="GitHub"
      title="Selected repositories"
      intro="Public repositories, from algorithm practice to architecture and AI experiments I try before using the ideas at work. Older coursework and tutorial repositories are left out."
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {repos.map((repo) => (
          <li key={repo.name} className="reveal">
            <a
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col rounded-xl border border-line bg-surface p-5 transition-colors hover:border-accent"
            >
              <div className="flex items-start justify-between gap-3">
                <p className="font-mono text-[13px] font-medium break-all">{repo.name}</p>
                <ArrowUpRightIcon width={16} height={16} className="shrink-0 text-faint transition-colors group-hover:text-accent" />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">{repo.summary}</p>
              <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-1 pt-4 font-mono text-[11px] text-faint">
                {repo.language && (
                  <span className="inline-flex items-center gap-1.5">
                    <span aria-hidden className="size-2 rounded-full bg-accent" />
                    {repo.language}
                  </span>
                )}
                {repo.fork && <span>fork</span>}
                <span>updated {formatPushed(repo.pushedAt)}</span>
              </div>
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ul>
      <p className="reveal mt-8">
        <a
          href={snapshot.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-line-strong bg-surface px-4 py-2 text-sm font-medium transition-colors hover:border-accent"
        >
          <GitHubIcon width={16} height={16} /> All repositories on GitHub
        </a>
      </p>
    </Section>
  );
}
