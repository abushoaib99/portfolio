import { about, education, roles, site, yearsOfExperience } from "@/data/profile";
import { Section } from "../Section";

export function About() {
  const current = roles[0];
  const facts = [
    { term: "Based in", value: site.location },
    { term: "Currently", value: `${current.title}, ${current.company}` },
    { term: "Experience", value: `${yearsOfExperience()} years, since ${site.careerStart.slice(0, 4)}` },
    { term: "Focus", value: "Backend · Architecture · AI/LLM" },
    { term: "Education", value: `${education.degree.replace("in ", "")}, ${education.year}` },
  ];

  return (
    <Section id="about" index="01" eyebrow="About" title="Backend engineer working on architecture and applied AI">
      <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
        <div className="reveal space-y-5 text-lg leading-relaxed text-muted text-pretty">
          {about.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
        <dl className="reveal h-fit divide-y divide-line rounded-xl border border-line bg-surface">
          {facts.map((f) => (
            <div key={f.term} className="grid grid-cols-[7rem_1fr] gap-3 px-5 py-3.5 text-sm">
              <dt className="font-mono text-xs leading-5 text-faint">{f.term}</dt>
              <dd className="leading-5">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
