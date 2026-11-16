# QRDen

QRDen is a QR code generator that runs entirely in your browser. There is no
sign-up and no backend: the app builds to static files and everything happens
on your device.

> **Status:** project scaffold. The page is a placeholder; QR code generation,
> customisation and download are coming in later changes.

## Tech stack

- [Vite](https://vite.dev/) + [React](https://react.dev/) + TypeScript (strict mode)
- [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/vite`
- [shadcn/ui](https://ui.shadcn.com/) components (`components.json`, `@/` import alias)
- [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) + jsdom
- ESLint (flat config) + Prettier

## Prerequisites

- **Node.js 24 LTS**. The version is pinned in `.nvmrc`, so run `nvm use` (or
  `fnm use`) if you use a version manager.
- **npm** (bundled with Node). The project uses npm and commits
  `package-lock.json`.

## Getting started

```bash
# Install dependencies exactly as locked
npm ci

# Start the dev server at http://localhost:5173
npm run dev
```

## Scripts

| Command                | What it does                                              |
| ---------------------- | --------------------------------------------------------- |
| `npm run dev`          | Start the Vite dev server with hot reload.                |
| `npm run build`        | Typecheck, then build static files into `dist/`.          |
| `npm run preview`      | Serve the production build from `dist/` locally.          |
| `npm run lint`         | Lint the project with ESLint.                             |
| `npm run typecheck`    | Typecheck all TypeScript with `tsc -b` (no output files). |
| `npm test`             | Run the test suite once with Vitest.                      |
| `npm run format`       | Format all files with Prettier.                           |
| `npm run format:check` | Check formatting without changing files (used in CI).     |

### Testing

```bash
npm test               # run once
npx vitest             # watch mode
```

Tests live next to the code they cover (`*.test.tsx`) and run in jsdom.
`src/test/setup.ts` registers the `jest-dom` matchers.

### Building

```bash
npm run build          # outputs static files to dist/
npm run preview        # serve dist/ at http://localhost:4173
```

The contents of `dist/` can be hosted on any static file host.

## Project structure

```text
.
├── .github/workflows/ci.yml   # CI: lint, format check, typecheck, test, build
├── public/                    # Static assets copied as-is (favicon)
├── src/
│   ├── components/ui/         # shadcn/ui components
│   ├── lib/utils.ts           # cn() class-name helper
│   ├── test/setup.ts          # Vitest setup (jest-dom matchers)
│   ├── App.tsx                # Home page
│   ├── App.test.tsx           # Smoke test
│   ├── index.css              # Tailwind + shadcn theme (light/dark)
│   └── main.tsx               # Entry point
├── components.json            # shadcn/ui configuration
├── eslint.config.js
├── index.html
└── vite.config.ts             # Vite + Vitest configuration
```

## Adding shadcn/ui components

```bash
npx shadcn@latest add <component>
```

Components are added to `src/components/ui/`. Import them with the `@/` alias,
for example `import { Card } from '@/components/ui/card'`. If a newly added
component imports `cn` from `'cn'`, change it to `'@/lib/utils'` so every
component goes through the shared helper.

## Notes

- **Dark mode** follows the operating system setting (`prefers-color-scheme`).
- **`cn()` comes from the [`cn`](https://github.com/shadcn-ui/cn) package**,
  shadcn's own drop-in replacement for `clsx` + `tailwind-merge`, which is what
  `shadcn init` installs today. `src/lib/utils.ts` re-exports it, so swapping
  the implementation is a one-file change.
- **TypeScript is pinned to 6.0.x.** TypeScript 7 is out, but `typescript-eslint`
  does not support it yet (its peer range is `<6.1.0`). Move to TypeScript 7
  once `typescript-eslint` supports it.

## Continuous integration

`.github/workflows/ci.yml` runs on every push to `main` and on every pull
request. It runs `npm ci`, lint, format check, typecheck, tests and build on the
Node version from `.nvmrc`.
