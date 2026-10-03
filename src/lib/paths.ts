/**
 * Sub-path the site is served from, e.g. "/portfolio" on a GitHub Pages project site, "" at a domain root.
 * Next.js prefixes its own `_next` assets automatically; plain `<img>`/`<a>` paths to files in
 * `public/` must go through `withBase`.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBase(path: string): string {
  return `${basePath}${path}`;
}
