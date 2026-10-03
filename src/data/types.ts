export interface Link {
  label: string;
  href: string;
}

export interface SkillGroup {
  title: string;
  summary: string;
  items: string[];
}

export interface Role {
  company: string;
  title: string;
  start: string; // "YYYY-MM"
  end: string | null; // null = present
  product: string;
  productNote: string;
  highlights: string[];
  stack: string[];
}

export type ProjectSource =
  | { kind: "github"; repo: string }
  | { kind: "private"; org: string };

export interface Project {
  name: string;
  tagline: string;
  problem: string;
  details: string[];
  stack: string[];
  source: ProjectSource;
  extraLinks?: Link[];
  badge?: string;
}

export interface FlowNode {
  label: string;
  detail?: string;
}

export interface Diagram {
  title: string;
  caption: string;
  lanes: FlowNode[][]; // each lane is a sequential step; multiple nodes in a lane render side by side
}

export interface Principle {
  title: string;
  body: string;
}

export interface RepoNote {
  name: string;
  summary: string;
  topics: string[];
}

export interface GithubSnapshot {
  user: string;
  profileUrl: string;
  syncedAt: string;
  repos: {
    name: string;
    url: string;
    description: string | null;
    language: string | null;
    stars: number;
    forks: number;
    fork: boolean;
    pushedAt: string;
  }[];
}
