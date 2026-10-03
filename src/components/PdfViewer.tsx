"use client";

import { useEffect, useRef, useState } from "react";

interface PdfViewerProps {
  src: string;
  title: string;
  fallback: React.ReactNode;
  className?: string;
}

/**
 * Embeds a PDF only once it is near the viewport, so it isn't downloaded on page load.
 * Browsers without an inline PDF viewer render `fallback` instead.
 */
export function PdfViewer({ src, title, fallback, className = "" }: PdfViewerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true);
          observer.disconnect();
        }
      },
      { rootMargin: "600px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {near ? (
        <object data={`${src}#view=FitH`} type="application/pdf" aria-label={title} className="h-full w-full">
          {fallback}
        </object>
      ) : (
        fallback
      )}
    </div>
  );
}
