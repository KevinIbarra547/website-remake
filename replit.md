# Grace Aligned

Grace Aligned is a scripture and gospel-content website. Development follows the phase gates and requirements in `specs/build-prompt.md`, `specs/constitution.md`, and `specs/spec.md`.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm --filter @workspace/grace-aligned run dev` — run the public website
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `specs/` — provided project constitution, website specification, and phased build prompt
- `artifacts/grace-aligned/` — public website
- `artifacts/api-server/` — shared Express API server
- `lib/db/src/schema/` — PostgreSQL schema for leads and visits

## Architecture decisions

- Replit's web artifact uses the workspace's React/Vite scaffold for static site delivery; the existing Express service remains the API backend.
- Apply development schema updates through Drizzle's dev-side push and Replit's post-merge setup; do not run schema DDL at server startup or in production build scripts.

## Product

The current phase is a technical foundation only. The public Home page displays the business name; later pages and features are gated by student approval.

## User preferences

- Stop after each phase and wait for the exact approval command in `specs/build-prompt.md`.

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
