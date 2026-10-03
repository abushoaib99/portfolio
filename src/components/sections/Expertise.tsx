import { skillGroups } from "@/data/profile";
import { Section } from "../Section";
import { TagList } from "../Tag";

export function Expertise() {
  return (
    <Section
      id="expertise"
      index="02"
      eyebrow="Technical expertise"
      title="The tools I use for production work"
      intro="Grouped by where they sit in a system. Everything listed here is something I've used in production or in a public repository."
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <li key={group.title} className="reveal rounded-xl border border-line bg-surface p-5 transition-colors hover:border-line-strong">
            <h3 className="font-semibold">{group.title}</h3>
            <p className="mb-4 mt-1 text-sm text-faint">{group.summary}</p>
            <TagList items={group.items} label={`${group.title} skills`} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
