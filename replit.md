GAISB Deployment (4HireAI)
​A comprehensive compliance-focused dashboard and hiring module.
​Stack
​Frontend: Next.js (App Router), React
​Backend: FastAPI (Python)
​Database: PostgreSQL + Drizzle ORM
​Language: TypeScript 5.x / Python 3.x
​Deployment: Vercel
​Run & Operate
​npm run dev — Start the Next.js development server (Localhost:3000)
​npm run build — Build the Next.js frontend for production
​npm run start — Start the production build
​Architecture
​Frontend-First: Next.js handles all client-facing UI, integrated with the root app/ directory.
​Backend: FastAPI resides at the root, managing API routes for job hiring and compliance checks.
​Governance: Controlled by gaisb_config.json at the root, which defines audit compliance thresholds.
​Gotchas
​Deployment Path: Always ensure package.json and app/ are at the root for Vercel to trigger successful builds.
​Infrastructure Files: Files like post-merge.sh, previous_hash.txt, and gaisb_config.json are for repository management and system auditing; do not import these into React components.
​API Calls: Use custom-fetch.ts for all API calls to ensure cross-platform compatibility and proper header handling.
​Source of Truth
​Database Schema: Defined via Drizzle ORM.
​API Contracts: OpenAPI spec defined in openapi.yaml.