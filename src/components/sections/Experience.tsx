import { roles } from "@/data/profile";
import type { Role } from "@/data/types";
import { Section } from "../Section";
import { TagList } from "../Tag";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function formatMonth(ym: string): string {
  const [y, m] = ym.split("-").map(Number);
  return `${MONTHS[m - 1]} ${y}`;
}

function period(role: Role): string {
  return `${formatMonth(role.start)} – ${role.end ? formatMonth(role.end) : "Present"}`;
}

/** Consecutive roles at the same company are shown together, so promotions read as one tenure. */
function groupByCompany(list: Role[]): { company: string; roles: Role[] }[] {
  const groups: { company: string; roles: Role[] }[] = [];
  for (const role of list) {
    const last = groups.at(-1);
    if (last && last.company === role.company) last.roles.push(role);
    else groups.push({ company: role.company, roles: [role] });
  }
  return groups;
}

export function Experience() {
  return (
    <Section id="experience" index="03" eyebrow="Experience" title="Where I've worked">
      <ol className="space-y-6">
        {groupByCompany(roles).map((group) => (
          <li key={group.company} className="reveal rounded-xl border border-line bg-surface p-5 sm:p-8">
            <h3 className="text-xl font-semibold">{group.company}</h3>
            <ol className="mt-6 space-y-10">
              {group.roles.map((role) => (
                <li key={role.title + role.start} className="relative border-l border-line pl-6">
                  <span
                    aria-hidden
                    className={`absolute -left-[5px] top-1.5 size-2.5 rounded-full border-2 ${
                      role.end ? "border-line-strong bg-surface" : "border-accent bg-accent"
                    }`}
                  />
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                    <p className="font-semibold">{role.title}</p>
                    <p className="font-mono text-xs text-faint">
                      <time dateTime={role.start}>{period(role)}</time>
                    </p>
                  </div>
                  <p className="mt-1 text-sm text-muted">
                    <span className="font-medium text-ink">{role.product}</span> — {role.productNote}
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {role.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                        <span aria-hidden className="mt-2.5 h-px w-3 shrink-0 bg-accent" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5">
                    <TagList items={role.stack} label={`Technologies used as ${role.title} at ${role.company}`} />
                  </div>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </Section>
  );
}
