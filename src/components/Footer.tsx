import { contact, site } from "@/data/profile";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

export function Footer() {
  const links = [
    { label: "GitHub", href: contact.github, Icon: GitHubIcon, external: true },
    { label: "LinkedIn", href: contact.linkedin, Icon: LinkedInIcon, external: true },
    { label: "Email", href: `mailto:${contact.email}`, Icon: MailIcon, external: false },
  ];

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-faint sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          © {new Date().getFullYear()} {site.name} · {site.location}
        </p>
        <div className="flex items-center gap-4">
          <ul className="flex items-center gap-1" aria-label="Profiles">
            {links.map(({ label, href, Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="inline-flex rounded-md p-2 hover:text-ink"
                >
                  <Icon width={16} height={16} />
                </a>
              </li>
            ))}
          </ul>
          <a href="#top" className="font-mono text-xs hover:text-ink">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
