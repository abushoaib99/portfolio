import { resume } from "@/data/profile";
import { Section } from "../Section";
import { ArrowUpRightIcon, DownloadIcon } from "../icons";
import { PdfViewer } from "../PdfViewer";

function PreviewImage({ className }: { className: string }) {
  return (
    <img
      src={resume.preview}
      alt="Preview of Md Abu Souyeb's resume"
      width={resume.previewSize.width}
      height={resume.previewSize.height}
      loading="lazy"
      decoding="async"
      className={`bg-white ${className}`}
    />
  );
}

export function Resume() {
  return (
    <Section
      id="resume"
      index="10"
      eyebrow="Resume"
      title="Resume"
      intro="The one-page version. Read it here or download the PDF."
    >
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
          Open in new tab <ArrowUpRightIcon width={14} height={14} />
        </a>
      </div>

      <div className="reveal mt-6 overflow-hidden rounded-xl border border-line bg-surface-2">
        {/* Desktop and tablet: the real PDF, with the preview image as fallback. */}
        <PdfViewer
          src={resume.pdf}
          title="Resume of Md Abu Souyeb (PDF)"
          className="hidden h-[min(1100px,85vh)] w-full md:block"
          fallback={<PreviewImage className="mx-auto h-full w-auto" />}
        />
        {/* Phones: most mobile browsers can't show PDFs inline, so show a preview that opens the PDF. */}
        <a href={resume.pdf} target="_blank" rel="noopener noreferrer" className="block md:hidden">
          <PreviewImage className="h-auto w-full" />
          <span className="sr-only">(opens the PDF in a new tab)</span>
        </a>
      </div>
    </Section>
  );
}
