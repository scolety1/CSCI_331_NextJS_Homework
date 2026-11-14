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

## Contribution and scope

Collected by Spencer Colety. This archive includes coursework, examples, or starter material; the bulk-upload history does not establish sole authorship of individual methods. Preserve source credits and course-sharing restrictions. This README update was AI-assisted and does not change the exercise code.
