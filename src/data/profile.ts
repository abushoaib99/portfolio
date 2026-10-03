// Single source of truth for site content.
// Everything here is taken from the resume (source-docs/, not committed) or from code in
// github.com/abushoaib99. Do not add claims that are not backed by one of those.
import type { Diagram, DsaTopicGroup, Principle, Project, RepoNote, Role, SkillGroup } from "./types";

export const site = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  name: "Md Abu Souyeb",
  alternateName: "Abu Shoaib",
  title: "Senior Software Engineer",
  description:
    "Md Abu Souyeb (Abu Shoaib) is a Senior Software Engineer in Dhaka, Bangladesh, focused on Python and Django backends, multi-tenant SaaS architecture, and LLM applications with LangChain and LangGraph.",
  location: "Dhaka, Bangladesh",
  careerStart: "2019-09",
};

export const contact = {
  email: "cse.souyeb.ist@gmail.com",
  github: "https://github.com/abushoaib99",
  linkedin: "https://www.linkedin.com/in/souyeb/",
};

/** Whole years since the first professional role, so the number never goes stale. */
export function yearsOfExperience(now = new Date()): number {
  const [y, m] = site.careerStart.split("-").map(Number);
  return Math.floor((now.getFullYear() - y) + (now.getMonth() + 1 - m) / 12);
}

export const hero = {
  headline: "I build backend systems, multi-tenant SaaS architecture and LLM-powered workflow automation.",
  statement:
    "Senior Software Engineer at Innoweb Limited, working on Robo2mation — a BPMN process-flow and document management platform. Python, Django and Elasticsearch on the backend; LangChain and LangGraph for the AI features.",
};

export const about = [
  "I'm a backend-focused software engineer based in Dhaka, Bangladesh. Since 2020 I've worked at Innoweb Limited on Robo2mation, a process-flow and document management system — first as a Software Engineer, and since 2023 as a Senior Software Engineer. Before that I built REST APIs and Flutter features for a property-management system and the amarroom.com travel app at Infosapex Limited.",
  "Most of my work sits where application code meets infrastructure. I redesigned Robo2mation from a single-tenant system into multi-tenant SaaS, sized servers for high- and low-load scenarios, set up database replication for failover, and introduced Elasticsearch for search-as-you-type. Day to day I build APIs with Django and Django REST Framework, ship them in Docker containers and automate delivery with Jenkins.",
  "More recently I've been adding LLM features to the product — RAG-based Q&A and an AI workflow generator — and, in my own projects, working on agent orchestration with LangGraph, structured outputs, human-in-the-loop approval and the Model Context Protocol. I also mentor teammates on code management, linting and version control.",
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend",
    summary: "APIs and application logic",
    items: ["Python", "Django", "Django REST Framework", "REST API design", "GraphQL", "JWT auth", "Microsoft authentication", "Pydantic"],
  },
  {
    title: "AI / LLM",
    summary: "Retrieval, agents and structured generation",
    items: ["LangChain", "LangGraph", "RAG", "Tool calling", "Human-in-the-loop", "Structured output", "Model Context Protocol", "FAISS", "Sentence-Transformers", "Gemini", "Groq"],
  },
  {
    title: "Data & Search",
    summary: "Storage, replication and retrieval",
    items: ["PostgreSQL", "SQL", "Database replication", "Elasticsearch", "Full-text search"],
  },
  {
    title: "Cloud & Delivery",
    summary: "Running and shipping software",
    items: ["Docker", "Docker Compose", "Jenkins CI/CD", "Nginx", "Gunicorn", "Traefik", "AWS S3", "Ubuntu / Linux", "Firebase"],
  },
  {
    title: "Architecture",
    summary: "Designing for scale and reliability",
    items: ["Multi-tenant SaaS", "Tenant isolation", "High availability & failover", "Capacity planning", "No-code platform design", "BPMN workflows & eForms"],
  },
  {
    title: "Frontend & Mobile",
    summary: "Clients for the APIs I build",
    items: ["JavaScript", "jQuery", "React", "Flutter", "Dart", "Firebase", "Push notifications"],
  },
];

export const roles: Role[] = [
  {
    company: "Innoweb Limited",
    title: "Senior Software Engineer",
    start: "2023-02",
    end: null,
    product: "Robo2mation",
    productNote: "Process flow & document management system",
    highlights: [
      "Redesigned the system from single-tenant to multi-tenant SaaS architecture, improving resource efficiency by 60–70%.",
      "Upgraded the database and Elasticsearch infrastructure for secure, high-performance multi-tenant support.",
      "Defined server specifications — RAM, CPU, storage and cost — for both high-load and low-load scenarios.",
      "Implemented database replication for high availability and failover.",
      "Built AI-driven RAG Q&A and an AI Workflow Generator to make customer service faster and more automated.",
      "Designed and built a no-code platform — third-party API integration, Master Tables for dynamic tables, and dynamic eForm condition building — cutting development time by 15–20%.",
      "Dockerized the Robo2mation web app with multi-stage Docker builds, keeping build-time dependencies out of the production image.",
      "Implemented a CI/CD pipeline with Jenkins to automate deployment.",
      "Mentored the team on code management, linting and version control, and improved development practices.",
    ],
    stack: ["Python", "Django", "DRF", "PostgreSQL", "Elasticsearch", "LangChain", "Docker", "Jenkins", "Nginx"],
  },
  {
    company: "Innoweb Limited",
    title: "Software Engineer",
    start: "2020-08",
    end: "2023-01",
    product: "Robo2mation",
    productNote: "Process flow & document management system",
    highlights: [
      "Containerized the web application with Docker, reducing deployment costs by 15–20%.",
      "Helped redesign the back-end architecture of the application.",
      "Built REST APIs and features with Django, Django REST Framework and JavaScript; worked with GraphQL and React.",
      "Implemented authentication and authorization with JWT, and integrated Microsoft authentication.",
      "Integrated Elasticsearch for full-text, search-as-you-type search, improving search performance by roughly 65–70%.",
      "Built the Robo2mation mobile app for Android and iOS in Flutter and published it to the Play Store and App Store, using Firebase for push notifications and remote configuration.",
    ],
    stack: ["Django", "DRF", "JavaScript", "Elasticsearch", "Docker", "Flutter", "Firebase"],
  },
  {
    company: "Infosapex Limited",
    title: "Software Engineer",
    start: "2019-09",
    end: "2020-06",
    product: "amarroom.com & PMS",
    productNote: "Travel booking mobile app and property management system",
    highlights: [
      "Built a token-based authorization system with JWT and Django REST Framework for the PMS mobile app.",
      "Built the REST APIs for the PMS mobile app and key features of the PMS web app.",
      "Built flight booking and payment gateway features for the amarroom.com mobile app (Android & iOS) in Flutter.",
    ],
    stack: ["Django", "DRF", "JWT", "Flutter"],
  },
];

const gh = (repo: string) => ({ kind: "github" as const, repo });
const innoweb = { kind: "private" as const, org: "Innoweb Limited" };
const infosapex = { kind: "private" as const, org: "Infosapex Limited" };

// Order matters: projects render in exactly this sequence.
export const projects: Project[] = [
  {
    name: "Robo2mation multi-tenant SaaS",
    context: "Innoweb Limited · 2023–present",
    tagline: "Re-architecting a single-tenant workflow platform into multi-tenant SaaS.",
    problem:
      "Robo2mation was deployed as a single-tenant system. Serving more customers that way meant more servers doing the same work.",
    details: [
      "Redesigned the architecture for multi-tenancy, improving resource efficiency by 60–70%.",
      "Upgraded the database and Elasticsearch layers to keep tenants secure and search fast.",
      "Added database replication for failover, and calculated server specifications (RAM, CPU, storage and cost) for high- and low-load profiles.",
      "Automated per-tenant subdomains: a script renders an Nginx server block from a template, enables it and reloads Nginx.",
      "Shipped as multi-stage Docker builds through a Jenkins CI/CD pipeline.",
    ],
    stack: ["Python", "Django", "DRF", "PostgreSQL", "Elasticsearch", "Nginx", "Gunicorn", "Docker", "Jenkins"],
    source: innoweb,
    extraLinks: [{ label: "Nginx provisioning script", href: "https://github.com/abushoaib99/create-dynamic-nginx-conf" }],
  },
  {
    name: "AI Workflow Generator & RAG Q&A",
    context: "Innoweb Limited · 2023–present",
    tagline: "LLM features inside Robo2mation for faster customer service.",
    problem:
      "Customers needed help building workflows and finding answers in the platform's documentation without waiting on support.",
    details: [
      "AI Workflow Generator that produces workflows on the platform, reducing manual setup.",
      "RAG-based Q&A that answers customer questions from retrieved product documentation.",
      "Built so customer service is faster and more automated, without waiting on the support team.",
      "Knowledge base built from the platform's DMS and workflow admin manuals.",
      "Public prototype retrieval pipeline: PDF chunks (1,000 characters, 200 overlap) → MiniLM embeddings → FAISS, with LLM-based contextual compression.",
      "In the prototype, the support assistant answers only from retrieved context and refers users to support when the answer isn't there.",
    ],
    stack: ["Python", "LLMs", "RAG", "Prompt engineering", "FAISS", "Embeddings"],
    source: innoweb,
    extraLinks: [{ label: "RAG prototype", href: "https://github.com/abushoaib99/langchain_python" }],
  },
  {
    name: "No-code integration platform",
    context: "Innoweb Limited · 2023–present",
    tagline: "Lets teams configure integrations, data tables and form logic without writing code.",
    problem: "Every customer integration, custom table and form rule had needed developer time.",
    details: [
      "Third-party API integration system configured from the UI.",
      "Master Tables: user-defined dynamic tables that workflows can use.",
      "Dynamic eForm condition builder for form logic.",
      "Designed and built end to end: Django REST APIs on the backend and the builder UI in JavaScript.",
      "eForm amount fields use my currency input mask library for live, always-valid currency formatting.",
      "Reduced development time by 15–20%.",
    ],
    stack: ["Python", "Django", "DRF", "JavaScript", "PostgreSQL"],
    source: innoweb,
  },
  // TODO(details needed): Boineer — what it is, your role, features, stack, live link.
  {
    name: "Boineer",
    draft: true,
    tagline: "",
    problem: "",
    details: [],
    stack: [],
    source: { kind: "private", org: "" },
  },
  // TODO(details needed): Edusoft (web) — what it is, your role, features, stack.
  {
    name: "Edusoft",
    draft: true,
    tagline: "",
    problem: "",
    details: [],
    stack: [],
    source: { kind: "private", org: "" },
  },
  {
    name: "Robo2mation mobile app",
    context: "Innoweb Limited · 2020–2023",
    tagline: "Android and iOS app for the Robo2mation process-flow and document platform.",
    problem: "Robo2mation's workflow and document features needed to be available on phones, not only in the web app.",
    details: [
      "Built in Flutter from one codebase for Android and iOS, and published to Google Play and the App Store.",
      "Push notifications through Firebase Cloud Messaging.",
      "Firebase Remote Config, so app configuration can change without shipping a new release.",
      "Runs on the platform's Django REST Framework APIs.",
    ],
    stack: ["Flutter", "Dart", "Firebase Cloud Messaging", "Firebase Remote Config", "Django REST Framework"],
    source: innoweb,
  },
  // TODO(details needed): Edusoft mobile app — platforms, features, stack, store links.
  {
    name: "Edusoft mobile app",
    draft: true,
    tagline: "",
    problem: "",
    details: [],
    stack: [],
    source: { kind: "private", org: "" },
  },
  {
    name: "Currency input mask",
    context: "Library for Robo2mation workflow eForms",
    tagline: "A small jQuery library that turns any input into a live-formatted currency field.",
    problem:
      "Amount fields in workflow eForms must always hold a valid value — thousands separators and exactly two decimals — while the user types, on desktop keyboards and Android virtual keyboards alike.",
    details: [
      "One call — makeAmountField($('input[type=amount]')) — turns fields into right-aligned amount inputs that always hold a value such as 1,234,567.00.",
      "Reformats on every keystroke with thousands separators and a fixed two-digit decimal part, and caps the integer part at 12 digits.",
      "Keeps the caret where the user expects: recalculates its position as commas appear or disappear, jumps to the decimal point on '.', and overwrites decimal digits in place.",
      "Separate code paths for desktop keydown events and Android virtual keyboards, which don't report Backspace and '.' the same way.",
      "Blocks paste, cut, long-press repeats and partial-selection deletes that could leave an invalid value, while still allowing Ctrl+C and Ctrl+A.",
    ],
    stack: ["JavaScript", "jQuery", "DOM selection API", "Mobile input handling"],
    source: gh("currency_input_mask"),
  },
  {
    name: "amarroom.com app & property management system",
    context: "Infosapex Limited · 2019–2020",
    tagline: "Flight booking and payments on mobile, plus the API behind a property management system.",
    problem: "A travel booking app and a property management system (PMS) needed mobile features and a secure API.",
    details: [
      "Built flight booking and payment gateway features for the amarroom.com Android and iOS app in Flutter.",
      "Built the REST APIs for the PMS mobile app with Django REST Framework.",
      "Implemented token-based authorization with JWT for the PMS mobile app.",
      "Built key features of the PMS web app.",
    ],
    stack: ["Flutter", "Dart", "Python", "Django REST Framework", "JWT"],
    source: infosapex,
  },
  {
    name: "LangGraph eForm auto-fill",
    context: "Personal project · 2025",
    tagline: "Turns a plain-language request into a filled BPMN eForm.",
    problem:
      "Workflow eForms such as purchase requisitions have many fields, grids and option lists. Filling them by hand is slow and error-prone.",
    details: [
      "Loads the eForm definition (JSON) from PostgreSQL and flattens it into a field schema, including grid columns, check groups and allowed options.",
      "A LangGraph state graph runs fetch → validate → extract → check-required → ask-missing as separate nodes.",
      "Gemini runs at temperature 0 in JSON mode, mapping values onto field IDs and choosing only from the allowed options.",
      "Required fields the model could not fill are collected and asked of the user instead of being guessed.",
    ],
    stack: ["Python", "LangGraph", "LangChain", "Gemini", "PostgreSQL"],
    source: gh("langgraph_python"),
  },
  {
    name: "Google Calendar MCP server",
    context: "Personal project · 2026",
    tagline: "Gives AI clients like Cursor access to your own Google Calendar through the Model Context Protocol.",
    problem:
      "LLM assistants can't see your schedule. MCP gives them a typed tool to call, but the server still has to handle OAuth safely for each user.",
    details: [
      "Built with FastMCP; exposes an async tool that returns the events for a given date.",
      "Per-user OAuth: each user brings their own Google client and signs in once; the token is cached locally.",
      "Runs locally or on FastMCP Cloud, where credentials come from environment secrets instead of files in git.",
      "Validates dates with Pydantic and returns errors as structured JSON with setup instructions.",
    ],
    stack: ["Python 3.13", "MCP / FastMCP", "Google Calendar API", "OAuth 2.0", "Pydantic", "uv"],
    source: gh("google_calendar_mcp_server_python"),
  },
  {
    name: "Isolated tenant stacks",
    context: "Personal project · 2025",
    tagline: "Prototype of silo-style tenancy: one container stack per tenant, routed by hostname.",
    problem:
      "Some tenants need hard isolation of compute, database and storage, which a shared multi-tenant deployment cannot give them.",
    details: [
      "Provisioning script renders a per-tenant Docker Compose file from a Jinja template and starts it under its own project name.",
      "Traefik discovers containers through Docker labels and routes each tenant's hostname to its own stack.",
      "Design document covers a per-tenant Django app, PostgreSQL with its own volume, optional Redis, and environment-based settings.",
    ],
    stack: ["Python", "Docker Compose", "Traefik", "Jinja2", "PostgreSQL"],
    source: gh("multitenant_docker_isolation"),
    badge: "Prototype",
  },
];

export const architectureDiagrams: Diagram[] = [
  {
    title: "Multi-tenant request path",
    caption:
      "A simplified view of the parts I worked on in Robo2mation. It is not a complete production topology.",
    lanes: [
      [{ label: "tenant.robo2mation.com", detail: "a subdomain for each tenant" }],
      [{ label: "Nginx", detail: "TLS, a server block per tenant, static & media" }],
      [{ label: "Gunicorn", detail: "Unix socket" }],
      [{ label: "Django + DRF", detail: "REST APIs, JWT auth, workflows, eForms" }],
      [
        { label: "PostgreSQL", detail: "primary → replica for failover" },
        { label: "Elasticsearch", detail: "search-as-you-type" },
      ],
    ],
  },
  {
    title: "Silo tenancy prototype",
    caption: "From the multitenant_docker_isolation repository: each tenant runs as its own Compose project.",
    lanes: [
      [{ label: "provision_tenant.py", detail: "operator command" }],
      [{ label: "Jinja template", detail: "renders <tenant>.yml" }],
      [{ label: "docker compose -p <tenant>", detail: "a separate stack per tenant" }],
      [{ label: "Traefik", detail: "routes by Host() from container labels" }],
      [
        { label: "Tenant web", detail: "app container" },
        { label: "Tenant Postgres", detail: "its own volume" },
      ],
    ],
  },
];

export const architecturePrinciples: Principle[] = [
  {
    title: "Shared vs. isolated tenancy",
    body: "Shared multi-tenancy in production for resource efficiency, plus a silo prototype for tenants that need isolated compute, database and storage. Which to use depends on each tenant's isolation needs.",
  },
  {
    title: "Capacity planning",
    body: "Server specifications — RAM, CPU, storage and cost — worked out for both high-load and low-load scenarios, so each deployment is sized to its demand.",
  },
  {
    title: "Availability",
    body: "Database replication so the system can fail over and keep running when the primary has a problem.",
  },
  {
    title: "Search as its own subsystem",
    body: "Full-text and search-as-you-type queries moved to Elasticsearch instead of the relational database, and the index layer upgraded for multi-tenant use.",
  },
  {
    title: "Repeatable delivery",
    body: "Docker containers for consistent, lower-cost deployments, and a Jenkins CI/CD pipeline so building, testing and releasing don't depend on manual steps.",
  },
  {
    title: "Configuration over code",
    body: "A no-code layer for integrations, dynamic tables and form conditions, so routine customer requests no longer need new code.",
  },
];

export const aiDiagrams: Diagram[] = [
  {
    title: "eForm auto-fill graph (LangGraph)",
    caption: "These are the nodes and edges from form_fillup/run_execution.py.",
    lanes: [
      [{ label: "get_eform_variables", detail: "eForm JSON from PostgreSQL → field schema" }],
      [{ label: "validate_inputs", detail: "schema and user context present" }],
      [{ label: "extract_data", detail: "Gemini · temperature 0 · JSON mode" }],
      [{ label: "check_required", detail: "required fields the model left empty" }],
      [{ label: "ask_missing", detail: "human fills the gaps" }],
    ],
  },
  {
    title: "Document Q&A (RAG)",
    caption: "These are the pieces used in langchain_python/rag.",
    lanes: [
      [{ label: "PDF loader", detail: "product manuals" }],
      [{ label: "Recursive splitter", detail: "1000-char chunks, 200 overlap" }],
      [{ label: "all-MiniLM-L6-v2", detail: "embeddings → FAISS index" }],
      [{ label: "Retriever + LLM compression", detail: "keeps only the relevant passages" }],
      [{ label: "Gemini answer", detail: "from context only; says so when it can't answer" }],
    ],
  },
];

export const aiPractices: Principle[] = [
  {
    title: "Ground the model in the real schema",
    body: "The model gets the actual form definition — field IDs, labels, types and allowed options — rather than a description of it, so its output maps directly onto the application.",
  },
  {
    title: "Output the application can parse",
    body: "Temperature 0, JSON mode and TypedDict-based structured output, with parse failures caught and recorded as validation errors instead of crashing the workflow.",
  },
  {
    title: "Check the output after generation",
    body: "Required fields are checked once the model returns. Missing values go back to a person instead of being guessed.",
  },
  {
    title: "Human approval before side effects",
    body: "LangGraph interrupts pause tool calls that take actions until a person approves, with checkpointed state so the run can resume.",
  },
  {
    title: "Answer from context only",
    body: "RAG prompts limit the model to retrieved context, with contextual compression to cut noise and a set fallback reply when the answer isn't there.",
  },
  {
    title: "Typed tools for agents",
    body: "Capabilities exposed as typed MCP tools with validated inputs, per-user OAuth and secrets kept out of source control.",
  },
];

export const repoNotes: RepoNote[] = [
  {
    name: "google_calendar_mcp_server_python",
    summary: "MCP server with FastMCP that exposes a user's Google Calendar to AI clients, using per-user OAuth and cloud deployment docs.",
    topics: ["MCP", "OAuth", "Pydantic"],
  },
  {
    name: "langgraph_python",
    summary: "LangGraph state graphs: conditional routing, tool calling, memory checkpoints, human-in-the-loop interrupts and the eForm auto-fill workflow.",
    topics: ["LangGraph", "HITL", "Agents"],
  },
  {
    name: "langchain_python",
    summary: "RAG over PDF manuals with FAISS and MiniLM embeddings, contextual compression, a Streamlit chat UI, structured output and Gemini/Groq models.",
    topics: ["RAG", "FAISS", "Streamlit"],
  },
  {
    name: "multitenant_docker_isolation",
    summary: "Prototype that provisions isolated Docker Compose stacks for each tenant from a Jinja template, with Traefik hostname routing.",
    topics: ["Docker", "Traefik", "Multi-tenancy"],
  },
  {
    name: "create-dynamic-nginx-conf",
    summary: "Creates an Nginx server block for a new tenant subdomain from a template, enables it and reloads Nginx.",
    topics: ["Nginx", "Automation"],
  },
  {
    name: "currency_input_mask",
    summary: "jQuery library for live-formatted currency inputs with caret-aware editing and Android keyboard handling, used for workflow eForm amount fields.",
    topics: ["JavaScript", "jQuery"],
  },
  {
    name: "My-Programming",
    summary: "Competitive-programming solutions and implementations of the classic algorithms: graphs, DP, segment trees, game theory and more.",
    topics: ["C++", "DSA"],
  },
  {
    name: "doc_to_md",
    summary: "Desktop batch converter (Tkinter + MarkItDown) that turns PDF, Office and image files into Markdown, for example to prepare documents for LLMs.",
    topics: ["MarkItDown", "Tooling"],
  },
  {
    name: "graphene-elastic",
    summary: "My fork of Graphene Elasticsearch, the library for exposing Elasticsearch DSL through GraphQL.",
    topics: ["GraphQL", "Elasticsearch"],
  },
];

export const dsa = {
  intro:
    "I've practised competitive programming since university, mostly in C and C++. My solutions and implementations of the classic algorithms are in a public repository.",
  platforms: [
    { platform: "LeetCode & GeeksforGeeks", count: "450+", href: "https://leetcode.com/abushoaib/" },
    { platform: "Codeforces", count: "250+", href: "https://codeforces.com/profile/AbuShoaib" },
    { platform: "UVa Online Judge", count: "100+", href: "https://uhunt.onlinejudge.org/id/752162" },
  ],
  alsoPractised: ["LightOJ", "SPOJ", "CodeMarshal"],
  languages: ["C", "C++", "Java"],
  repo: "https://github.com/abushoaib99/My-Programming",
  topics: [
    {
      title: "Graphs",
      items: ["BFS / DFS", "Dijkstra", "Bellman-Ford", "Floyd-Warshall", "Kruskal & Prim (MST)", "Disjoint set union", "Strongly connected components", "Articulation points", "Maximum flow", "Minimum vertex cover", "Travelling salesperson"],
    },
    {
      title: "Dynamic programming",
      items: ["0/1 knapsack", "Coin change", "LIS", "Longest common subsequence", "Longest common substring", "Maximum subarray", "Bitmask DP"],
    },
    {
      title: "Data structures",
      items: ["Segment tree", "Lazy propagation", "Binary indexed tree", "Lowest common ancestor", "Binary trees", "Linked list, stack, queue"],
    },
    {
      title: "Game theory & more",
      items: ["Nim & Misère Nim", "Impartial games", "Sorting algorithms"],
    },
  ] satisfies DsaTopicGroup[],
};

export const resume = {
  pdf: "/resume/Md_Abu_Souyeb_Resume.pdf",
  images: [
    { src: "/resume/resume-900.webp", width: 900 },
    { src: "/resume/resume-1800.webp", width: 1800 },
  ],
  aspect: { width: 1800, height: 2546 },
  downloadName: "Md_Abu_Souyeb_Resume.pdf",
};

export const education = {
  degree: "B.Sc. in Computer Science & Engineering",
  institution: "Institute of Science and Technology",
  year: "2019",
};
