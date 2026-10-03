import { contact, projects } from "@/data/profile";
import type { Project } from "@/data/types";
import { Section } from "../Section";
import { TagList } from "../Tag";
import { ArrowUpRightIcon, GitHubIcon, LockIcon } from "../icons";

function SourceBadge({ project }: { project: Project }) {
  const { source } = project;
  return (
    <div className="flex flex-wrap items-center gap-2 font-mono text-[11px]">
      {source.kind === "private" ? (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-0.5 text-faint">
          <LockIcon width={12} height={12} /> Professional · {source.org}
        </span>
      ) : (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-0.5 text-faint">
          <GitHubIcon width={12} height={12} /> Open source
        </span>
      )}
      {project.badge && (
        <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-accent">{project.badge}</span>
      )}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const links = [
    ...(project.source.kind === "github"
      ? [{ label: "View repository", href: `${contact.github}/${project.source.repo}` }]
      : []),
    ...(project.extraLinks ?? []),
  ];

  return (
    <article className="reveal group flex flex-col rounded-xl border border-line bg-surface p-6 transition-colors hover:border-line-strong sm:p-7">
      <SourceBadge project={project} />
      <h3 className="mt-4 text-xl font-semibold tracking-tight">{project.name}</h3>
      <p className="mt-1.5 text-muted">{project.tagline}</p>

      <div className="mt-5 rounded-lg bg-surface-2 px-4 py-3">
        <p className="font-mono text-[11px] uppercase tracking-wider text-faint">Problem</p>
        <p className="mt-1 text-sm leading-relaxed">{project.problem}</p>
      </div>

      <ul className="mt-5 space-y-2">
        {project.details.map((d) => (
          <li key={d} className="flex gap-3 text-sm leading-relaxed text-muted">
            <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-accent" />
            <span>{d}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6">
        <TagList items={project.stack} label={`${project.name} technologies`} />
        {links.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-line pt-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
                >
                  {l.label}
                  <ArrowUpRightIcon width={14} height={14} />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      index="04"
      eyebrow="Featured projects"
      title="Selected work"
      intro="Professional work on Robo2mation, where the code is private, alongside open-source projects you can read. Each card says which it is."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
    </Section>
  );
}
