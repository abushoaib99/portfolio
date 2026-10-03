import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function Section({ id, index, eyebrow, title, intro, children, className = "" }: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} aria-labelledby={headingId} className={`border-t border-line py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="reveal mb-12 max-w-3xl">
          <p className="mb-3 font-mono text-xs tracking-wide text-accent">
            <span className="text-faint">{index} /</span> {eyebrow}
          </p>
          <h2 id={headingId} className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {title}
          </h2>
          {intro && <p className="mt-4 text-lg leading-relaxed text-muted text-pretty">{intro}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}
