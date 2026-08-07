# health-care

Redesign of [aplusunitedhc.com](https://www.aplusunitedhc.com/), a healthcare website.

## Tech stack

- [Vite](https://vite.dev/) — build tool & dev server
- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [TanStack Router](https://tanstack.com/router) — file-based routing (`src/routes`)
- [TanStack Query](https://tanstack.com/query) — data fetching & caching
- [Tailwind CSS v4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) — component primitives (`src/components/ui`)

## Getting started

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — type-check and build for production
- `npm run preview` — preview the production build
- `npm run lint` — run oxlint

## Adding shadcn components

```bash
npx shadcn@latest add <component>
```

## Project structure

```
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
```
