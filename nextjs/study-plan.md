# Next.js Interview Preparation Study Plan

## Beginner to Advanced (4–6 Weeks)

---

## Table of Contents

1. [Phase 0: Prerequisites](#phase-0-prerequisites-react--javascript)
2. [Phase 1: Next.js Fundamentals](#phase-1-nextjs-fundamentals-week-1)
3. [Phase 2: Data Fetching & Rendering](#phase-2-data-fetching--rendering-week-2)
4. [Phase 3: API Routes, Forms & Auth](#phase-3-api-routes-forms--auth-basics-week-3)
5. [Phase 4: Styling, Assets & Optimization](#phase-4-styling-assets-and-optimization-week-4)
6. [Phase 5: Advanced Topics](#phase-5-advanced-topics-for-senior-ish-rounds-week-5-6)
7. [Daily Routine Template](#daily-routine-template)
8. [Quick Topic Table](#quick-topic-table-for-revision--pdf)

---

## Phase 0: Prerequisites (React + JavaScript)

Duration: 1–2 weeks (can run in parallel with Phase 1 if React/JS is already strong).

### JavaScript Essentials

- ES6 modules (import/export), arrow functions, let/const.
- Async/await, promises, error handling with try/catch.
- Core array methods: map, filter, reduce, find, some, every.
- Objects, destructuring, spread/rest, JSON basics.
- Fetch/axios for HTTP calls, response handling, status codes.

### React Essentials

- Functional components, JSX.
- Props and state, lifting state up.
- Hooks: useState, useEffect, useContext (at least).
- Basic forms and controlled components.
- Simple routing idea (even if using React Router earlier).

Mini-task: Build a small React SPA (todo app or GitHub user search) using fetch for APIs.

---

## Phase 1: Next.js Fundamentals (Week 1)

Goal: Be comfortable with project structure, routing, and app router basics.

### Topics

- Install and setup: `npx create-next-app@latest`.
- Understanding folders: app/, public/, components/, next.config, env files.
- App router vs pages router (focus on app router for interviews).
- File-based routing: `app/page.tsx`, nested routes, `app/blog/page.tsx`.
- Dynamic routes: `app/posts/[id]/page.tsx`.
- Layouts: `app/layout.tsx`, route-level layouts, shared navbar/footer.
- Basic metadata and SEO (title, description).

### Suggested 5–6 day breakdown

- Day 1–2: Setup project, create Home/About/Contact using app router.
- Day 3–4: Add shared layout (header/footer, navigation), basic metadata.
- Day 5–6: Practice client vs server components, where to use "use client".

### Mini-project

“Multi-page site”: Home, About, Services, Contact with:

- App router routes.
- Shared layout.
- Static content, no data fetching yet.

---

## Phase 2: Data Fetching & Rendering (Week 2)

Goal: Clearly understand SSR, SSG, ISR, CSR and how Next.js implements them.

### Rendering strategies

- CSR (client-side rendering) – React-only style.
- SSR (server-side rendering).
- SSG (static site generation).
- ISR (incremental static regeneration).

You should be able to explain:

- What each is.
- When to use which.
- Trade-offs (SEO, performance, freshness).

### Data fetching in app router

- Async server components with `fetch()` and caching options.
- `next: { revalidate: N }` for ISR-style revalidation.
- `cache: 'force-cache'` vs `cache: 'no-store'` idea.
- Loading and error UI segments (`loading.tsx`, `error.tsx`).
- Client-side fetching with useEffect for interactive parts, optional SWR/React Query overview.

### Suggested 5–6 day breakdown

- Day 1–2: Pure theory – write notes comparing SSR/SSG/ISR/CSR.
- Day 3–4: Implement server-side data fetching for a list page.
- Day 5–6: Add dynamic route with `[id]`, revalidation, loading/error states.

### Mini-project

“Blog app”:

- `/` – list posts fetched on server.
- `/posts/[id]` – post details, dynamic route.
- ISR with some revalidate interval.

---

## Phase 3: API Routes, Forms & Auth Basics (Week 3)

Goal: Be able to talk as a full-stack Next.js dev.

### API routes (route handlers)

- Using `app/api/.../route.ts` style.
- Handling GET, POST, PUT, DELETE.
- Reading JSON body, returning JSON responses.
- Status codes, basic error handling.

### Forms & mutations

- Classic pattern: client form → POST to API route.
- Newer pattern: server actions (if using latest Next) – direct mutations from forms.
- Handling validation and showing errors to user.

### Authentication overview

- High-level: sessions vs JWT.
- Protected routes using middleware.
- Simple concept of auth providers (Auth.js / others).

### Suggested 5–6 day breakdown

- Day 1–2: Create API endpoints (`/api/todos` GET/POST).
- Day 3–4: Build form that creates new todo/note through your API.
- Day 5–6: Add simple middleware that checks for a “fake token” and protects one route.

### Mini-project

“Notes app”:

- API routes for CRUD notes.
- UI with list + form + edit/delete.
- Very simple “auth” concept using middleware.

---

## Phase 4: Styling, Assets and Optimization (Week 4)

Goal: Make apps production-ready and performant.

### Styling options

- Global CSS via `app/globals.css`.
- CSS modules for component-scoped styles.
- Tailwind CSS basics (common in interviews).

### Optimizations

- `next/image` for automatic image optimization and responsive images.
- Font optimization via `next/font`.
- Code splitting and lazy loading with dynamic imports.
- SEO and metadata (Open Graph, etc).

### Suggested 5–6 day breakdown

- Day 1–2: Add Tailwind or CSS modules; style main layout and pages.
- Day 3–4: Replace `<img>` with `<Image>`, tweak sizes, check layout shift.
- Day 5–6: Do a Lighthouse audit and fix at least 1–2 performance issues.

### Mini-project

Refactor your blog or notes app:

- Styled with Tailwind or CSS modules.
- Images optimized with `next/image`.
- Better layout and responsive design.

---

## Phase 5: Advanced Topics for Senior-ish Rounds (Week 5–6)

Goal: Handle deeper conceptual and architecture questions.

### Middleware & edge runtime

- Middleware for auth, logging, redirects, locales.
- Difference between edge and node runtimes in Next.js.

### Architecture & scaling

- Organizing folders by feature (modules) instead of only by type.
- Where to keep shared components, hooks, utils, types.
- Handling large lists with pagination or infinite scroll.

### Testing & quality

- Basic idea of testing components with Jest + React Testing Library.
- Testing API routes at a high level.
- Error boundaries and custom error pages.

### Deployment

- Deploy to Vercel, environment variables, build step.
- Idea of other hosting options (Docker, custom server).

### Suggested 10–12 day breakdown

- Day 1–2: Middleware + basic edge concepts.
- Day 3–4: Refactor folder structure of one main project.
- Day 5–6: Add error handling and custom error UI.
- Day 7–8: Write a few tests for critical components or logic.
- Day 9–10: Deploy to Vercel with env vars.
- Day 11–12: Pure interview drills and mock interviews.

---

## Daily Routine Template

Use this for any phase (3–4 hours per day ideal):

- 30–45 minutes – Learn
  - Read official docs or a short article on the topic of the day.
- 60–90 minutes – Code
  - Implement or extend a feature in your main Next.js project.
- 20–30 minutes – Interview Q&A
  - Answer 5–10 questions related to that topic out loud or in a notebook.
- 10–15 minutes – Review
  - Recap, fix notes, and plan tomorrow.

Weekly pattern:

- Mon–Fri: Follow the routine.
- Sat: Longer build day (project work).
- Thu or Sun: One mock interview.

---

## Quick Topic Table (For Revision / PDF)

| Level        | Focus Areas                                                                 |
| ------------ | --------------------------------------------------------------------------- |
| Beginner     | Setup, app router vs pages router, file-based routing, layouts, basic SEO   |
| Intermediate | SSR, SSG, ISR, data fetching, API routes, forms, simple auth, loading/error |
| Advanced     | Middleware, edge runtime, performance, architecture, testing, deployment    |

---

How to use this:

- Copy everything into a file named like `nextjs-study-plan.md`.
- Open in VS Code or any markdown editor.
- Export or print as PDF if needed.

---

If you want, I can also prepare a downloadable markdown file for you now. Just let me know!
