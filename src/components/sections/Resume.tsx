import { resume } from "@/data/profile";
import { ArrowUpRightIcon, DownloadIcon } from "../icons";

export function Resume() {
  const [small, large] = resume.images;

  return (
    <section id="resume" aria-labelledby="resume-heading" className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_3fr] lg:gap-12">
        <header className="reveal lg:sticky lg:top-28">
          <p className="mb-3 font-mono text-xs tracking-wide text-accent">
            <span className="text-faint">10 /</span> Resume
          </p>
          <h2 id="resume-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Resume
          </h2>
          <div className="mt-6 flex flex-wrap gap-3 lg:flex-col lg:items-stretch">
            <a
              href={resume.pdf}
              download={resume.downloadName}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-accent-ink transition-opacity hover:opacity-90"
            >
              <DownloadIcon width={16} height={16} /> Download PDF
            </a>
            <a
              href={resume.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-line-strong bg-surface px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent"
            >
              Open PDF <ArrowUpRightIcon width={14} height={14} />
            </a>
          </div>
        </header>

        <a
          href={resume.pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="reveal group relative block overflow-hidden rounded-lg border border-line bg-white shadow-[0_24px_60px_-30px_rgba(0,0,0,0.45)] transition-colors hover:border-accent"
        >
          <img
            src={large.src}
            srcSet={`${small.src} ${small.width}w, ${large.src} ${large.width}w`}
            sizes="(min-width: 1152px) 810px, (min-width: 1024px) 72vw, calc(100vw - 32px)"
            alt="Resume of Md Abu Souyeb"
            width={resume.aspect.width}
            height={resume.aspect.height}
            loading="lazy"
            decoding="async"
            className="h-auto w-full"
          />
          <span className="pointer-events-none absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-md bg-black/70 px-2.5 py-1 font-mono text-[11px] text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
            Open PDF <ArrowUpRightIcon width={12} height={12} />
          </span>
          <span className="sr-only">(opens the PDF in a new tab)</span>
        </a>
      </div>
    </section>
  );
}
