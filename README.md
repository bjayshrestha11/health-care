# health-care

Redesign of [aplusunitedhc.com](https://www.aplusunitedhc.com/), a healthcare website.

pnpm workspace containing a public-facing site today, with room to add an admin app later.

## Tech stack

- [pnpm](https://pnpm.io/) workspaces — monorepo package management
- [Vite](https://vite.dev/) — build tool & dev server
- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [TanStack Router](https://tanstack.com/router) — file-based routing (`src/routes`)
- [TanStack Query](https://tanstack.com/query) — data fetching & caching
- [Tailwind CSS v4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) — component primitives (`src/components/ui`)

## Getting started

```bash
pnpm install
pnpm dev       # or: make dev
```

## Scripts

Run from the repo root (delegate to `apps/user` via `pnpm --filter`):

- `pnpm dev` / `make dev` — start the dev server
- `pnpm build` / `make build` — type-check and build for production
- `pnpm preview` / `make preview` — preview the production build
- `pnpm lint` / `make lint` — run oxlint across all workspace packages

## Adding shadcn components

```bash
cd apps/user
pnpm dlx shadcn@latest add <component>
```

## Workspace structure

```
apps/
  user/            # public-facing site
    src/
      components/
        ui/          # shadcn components
      lib/
        utils.ts     # cn() helper, etc.
      routes/
        __root.tsx   # root layout, providers, devtools
        index.tsx    # "/" route
      main.tsx       # router + query client setup
      index.css      # Tailwind + shadcn theme tokens
packages/          # shared code across apps (empty for now)
pnpm-workspace.yaml
```

When the admin site is added, it will live alongside `user` as `apps/admin`, sharing
common UI/config via `packages/`.
