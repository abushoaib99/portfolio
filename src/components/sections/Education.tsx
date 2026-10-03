import { education } from "@/data/profile";
import { Section } from "../Section";

export function Education() {
  return (
    <Section id="education" index="09" eyebrow="Education" title="Education">
      <div className="reveal max-w-2xl rounded-xl border border-line bg-surface p-6">
        <p className="font-mono text-xs text-faint">{education.year}</p>
        <h3 className="mt-2 text-lg font-semibold">{education.degree}</h3>
        <p className="mt-1 text-muted">{education.institution}</p>
      </div>
    </Section>
  );
}
