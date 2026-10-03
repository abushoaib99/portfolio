import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { contact, education, site } from "@/data/profile";
import { withBase } from "@/lib/paths";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

const ogImage = `${site.url}/og-image.jpg`;

const pageTitle = `${site.name} — ${site.title} · Python, Django & AI/LLM`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: pageTitle,
  description: site.description,
  authors: [{ name: site.name, url: site.url }],
  alternates: { canonical: `${site.url}/` },
  openGraph: {
    type: "profile",
    url: `${site.url}/`,
    siteName: site.name,
    title: pageTitle,
    description: site.description,
    firstName: "Md Abu",
    lastName: "Souyeb",
    images: [{ url: ogImage, width: 1200, height: 630, alt: `${site.name}, ${site.title}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: site.description,
    images: [ogImage],
  },
  icons: { icon: withBase("/icon.svg"), apple: withBase("/apple-touch-icon.png") },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f8f6" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0f13" },
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  alternateName: site.alternateName,
  jobTitle: site.title,
  url: site.url,
  image: `${site.url}/abu-souyeb.jpg`,
  email: `mailto:${contact.email}`,
  worksFor: { "@type": "Organization", name: "Innoweb Limited" },
  address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "BD" },
  alumniOf: { "@type": "CollegeOrUniversity", name: education.institution },
  sameAs: [contact.github, contact.linkedin],
  knowsAbout: ["Python", "Django", "Django REST Framework", "System Architecture", "Multi-tenant SaaS", "Elasticsearch", "LangChain", "LangGraph", "Retrieval-Augmented Generation"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${plexSans.variable} ${plexMono.variable}`} suppressHydrationWarning>
      <head>
        {/* Marks JS as available so reveal animations never hide content from no-JS readers. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      </head>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
