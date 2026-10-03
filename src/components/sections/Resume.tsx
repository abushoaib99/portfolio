import { resume } from "@/data/profile";
import { Section } from "../Section";
import { ArrowUpRightIcon, DownloadIcon } from "../icons";

export function Resume() {
  const [small, large] = resume.images;

  return (
    <Section id="resume" index="10" eyebrow="Resume" title="Resume" intro="The one-page version. Read it here or download the PDF.">
      <div className="reveal flex flex-wrap gap-3">
        <a
          href={resume.pdf}
          download={resume.downloadName}
          className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-accent-ink transition-opacity hover:opacity-90"
        >
          <DownloadIcon width={16} height={16} /> Download PDF
        </a>
        <a
          href={resume.pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-line-strong bg-surface px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent"
        >
          Open PDF <ArrowUpRightIcon width={14} height={14} />
        </a>
      </div>

      {/* The full page as a sharp image: no viewer chrome, works the same in every browser. */}
      <a
        href={resume.pdf}
        target="_blank"
        rel="noopener noreferrer"
        className="reveal mt-6 block overflow-hidden rounded-xl border border-line bg-white shadow-[0_20px_50px_-30px_rgba(0,0,0,0.4)] transition-colors hover:border-accent"
      >
        <img
          src={large.src}
          srcSet={`${small.src} ${small.width}w, ${large.src} ${large.width}w`}
          sizes="(min-width: 1152px) 1104px, calc(100vw - 32px)"
          alt="Resume of Md Abu Souyeb"
          width={resume.aspect.width}
          height={resume.aspect.height}
          loading="lazy"
          decoding="async"
          className="h-auto w-full"
        />
        <span className="sr-only">(opens the PDF in a new tab)</span>
      </a>
    </Section>
  );
}
