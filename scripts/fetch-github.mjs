// Snapshots selected repositories from the GitHub API into src/data/github.json.
// Run manually (`npm run github:sync`) so the site makes no API calls at page load.
import { writeFile } from "node:fs/promises";

const USER = "abushoaib99";
const REPOS = [
  "google_calendar_mcp_server_python",
  "langgraph_python",
  "langchain_python",
  "multitenant_docker_isolation",
  "create-dynamic-nginx-conf",
  "currency_input_mask",
  "My-Programming",
  "doc_to_md",
  "graphene-elastic",
];

const headers = { Accept: "application/vnd.github+json" };
if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

const repos = [];
for (const name of REPOS) {
  const res = await fetch(`https://api.github.com/repos/${USER}/${name}`, { headers });
  if (!res.ok) throw new Error(`${name}: HTTP ${res.status}`);
  const r = await res.json();
  repos.push({
    name: r.name,
    url: r.html_url,
    description: r.description,
    language: r.language,
    stars: r.stargazers_count,
    forks: r.forks_count,
    fork: r.fork,
    pushedAt: r.pushed_at,
  });
}

const out = { user: USER, profileUrl: `https://github.com/${USER}`, syncedAt: new Date().toISOString(), repos };
await writeFile(new URL("../src/data/github.json", import.meta.url), JSON.stringify(out, null, 2) + "\n");
console.log(`Wrote ${repos.length} repositories`);
