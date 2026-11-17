# Next.js Coursework

A small Next.js/React exercise with three routes beyond the original starter home page:

- `/counter`: [counter page](app/counter/page.tsx) and [component](components/Counter.jsx).
- `/store`: [store page](app/store/page.tsx) and [FakeStore component](components/Store.jsx).
- `/project`: [project page](app/project/page.tsx) and [GitHub component](components/GitHubInfo.jsx).

## Run

From the repository root with Node.js and npm:

```sh
npm ci
npm run dev
```

Open `http://localhost:3000/counter`, `/store`, or `/project`. The root page is still the create-next-app starter. API-backed components depend on external services.

```sh
npm run build
npm run lint
```

These are the package's documented commands, not a claim that a fresh build or external API integration passed in this documentation review. The pinned framework dependencies are historical; review them before deploying publicly.

Bootstrapped with create-next-app. Starter framework assets remain credited to Next.js/Vercel and their respective authors.

## About this archive

I wrote the coursework implementations by hand. Included course examples, starter code and framework scaffolding retain their original attribution.

These exercises were originally developed and kept on my computer, then uploaded together in November 2026. The recent Git history reflects that upload, not when I wrote the coursework. Original lab and project folders are retained as separate exercises.

README presentation was updated with AI assistance; exercise source is unchanged.
