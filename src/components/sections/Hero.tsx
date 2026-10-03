import { contact, hero, resume, site, yearsOfExperience } from "@/data/profile";
import { withBase } from "@/lib/paths";
import { ArrowDownIcon, DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from "../icons";

function CodeCard() {
  const years = yearsOfExperience();
  const k = "text-accent"; // keyword / name
  const s = "text-ink"; // string
  const p = "text-faint"; // punctuation
  return (
    <div className="rounded-xl border border-line bg-surface shadow-[0_12px_40px_-20px_rgba(0,0,0,0.35)]">
      <div className="flex items-center gap-1.5 border-b border-line px-4 py-2.5" aria-hidden>
        <span className="size-2.5 rounded-full bg-line-strong" />
        <span className="size-2.5 rounded-full bg-line-strong" />
        <span className="size-2.5 rounded-full bg-line-strong" />
        <span className="ml-2 font-mono text-[11px] text-faint">engineer.py</span>
      </div>
      <pre className="overflow-x-auto px-4 py-4 font-mono text-[11px] leading-6 sm:text-[12.5px] text-muted">
        <code>
          <span className={p}>engineer = </span>
          <span className={k}>Engineer</span>
          <span className={p}>(</span>
          {"\n"}    role<span className={p}>=</span><span className={s}>&quot;Senior Software Engineer&quot;</span><span className={p}>,</span>
          {"\n"}    focus<span className={p}>=[</span><span className={s}>&quot;backend&quot;</span><span className={p}>, </span><span className={s}>&quot;architecture&quot;</span><span className={p}>, </span><span className={s}>&quot;llm&quot;</span><span className={p}>],</span>
          {"\n"}    stack<span className={p}>=[</span><span className={s}>&quot;django&quot;</span><span className={p}>, </span><span className={s}>&quot;elasticsearch&quot;</span><span className={p}>, </span><span className={s}>&quot;langgraph&quot;</span><span className={p}>],</span>
          {"\n"}    years<span className={p}>=</span><span className={k}>{years}</span><span className={p}>,</span>
          {"\n"}<span className={p}>)</span>
          <span className="cursor ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-accent" aria-hidden />
        </code>
      </pre>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="relative overflow-hidden">
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-14 sm:px-6 sm:pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pb-28">
        <div className="reveal min-w-0">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-muted">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden />
            {site.title} · {site.location}
          </p>
          <h1 id="hero-heading" className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {site.name}
          </h1>
          <p className="mt-5 max-w-2xl text-xl leading-snug text-ink text-balance sm:text-2xl">{hero.headline}</p>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted text-pretty">{hero.statement}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-accent-ink transition-opacity hover:opacity-90"
            >
              View my work <ArrowDownIcon width={16} height={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-line-strong bg-surface px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent"
            >
              Contact me
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap items-center gap-1" aria-label="Profiles">
            <li>
              <a href={contact.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md p-2 text-sm text-muted hover:text-ink">
                <GitHubIcon /> <span>GitHub</span>
              </a>
            </li>
            <li>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md p-2 text-sm text-muted hover:text-ink">
                <LinkedInIcon /> <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 rounded-md p-2 text-sm text-muted hover:text-ink">
                <MailIcon /> <span>Email</span>
              </a>
            </li>
            <li>
              <a href={resume.pdf} download={resume.downloadName} className="inline-flex items-center gap-2 rounded-md p-2 text-sm text-muted hover:text-ink">
                <DownloadIcon /> <span>Resume</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="reveal relative mx-auto w-full min-w-0 max-w-sm lg:max-w-none">
          <div className="overflow-hidden rounded-2xl border border-line bg-surface-2">
            <picture>
              <source srcSet={withBase("/abu-souyeb.webp")} type="image/webp" />
              <img
                src={withBase("/abu-souyeb.jpg")}
                alt="Portrait of Md Abu Souyeb"
                width={640}
                height={640}
                fetchPriority="high"
                decoding="async"
                className="aspect-square w-full object-cover"
              />
            </picture>
          </div>
          <div className="relative -mt-14 ml-4 sm:ml-10 lg:-ml-12 lg:mr-8">
            <CodeCard />
          </div>
        </div>
      </div>
    </section>
  );
}
