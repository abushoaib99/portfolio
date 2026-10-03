import { contact } from "@/data/profile";
import { CopyEmail } from "../CopyEmail";
import { Section } from "../Section";
import { ArrowUpRightIcon, GitHubIcon, LinkedInIcon, MailIcon } from "../icons";

export function Contact() {
  const channels = [
    { label: "Email", value: contact.email, href: `mailto:${contact.email}`, Icon: MailIcon, external: false },
    { label: "LinkedIn", value: "linkedin.com/in/souyeb", href: contact.linkedin, Icon: LinkedInIcon, external: true },
    { label: "GitHub", value: "github.com/abushoaib99", href: contact.github, Icon: GitHubIcon, external: true },
  ];

  return (
    <Section
      id="contact"
      index="09"
      eyebrow="Contact"
      title="Let's talk"
      intro="I'm open to conversations about backend, architecture and AI/LLM engineering roles. Email is the best way to reach me."
    >
      <div className="reveal grid gap-8 rounded-2xl border border-line bg-surface p-6 sm:p-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <p className="font-mono text-sm text-faint">Write to</p>
          <a
            href={`mailto:${contact.email}`}
            className="mt-2 block text-xl font-semibold tracking-tight break-all hover:text-accent sm:text-2xl"
          >
            {contact.email}
          </a>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-accent-ink transition-opacity hover:opacity-90"
            >
              <MailIcon width={16} height={16} /> Send an email
            </a>
            <CopyEmail email={contact.email} />
          </div>
        </div>
        <ul className="divide-y divide-line rounded-xl border border-line">
          {channels.map(({ label, value, href, Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex items-center gap-4 px-5 py-4"
              >
                <Icon className="text-faint group-hover:text-accent" />
                <span className="min-w-0 flex-1">
                  <span className="block font-mono text-[11px] text-faint">{label}</span>
                  <span className="block truncate text-sm group-hover:text-ink">{value}</span>
                </span>
                <ArrowUpRightIcon width={14} height={14} className="text-faint group-hover:text-accent" />
                {external && <span className="sr-only">(opens in a new tab)</span>}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
