# Hegazi Shehata — Portfolio

React + Vite personal portfolio.

## Run locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Before publishing, fill in the placeholders

- `src/components/Hero.jsx`, `Contact.jsx`, `Footer.jsx` — GitHub URL (currently `#`)
- `src/components/Contact.jsx` — real email address (currently `your-email@example.com`)
- `src/data/projects.js` — `liveUrl` / `codeUrl` for each project (currently `#`)
- `src/data/projects.js` (`uiuxProjects`) — Figma `viewUrl`
- Project thumbnails in `src/components/Projects.jsx` currently render as a styled
  placeholder (initial letter on a gradient panel). Swap in real screenshots when ready —
  add images under `src/assets/` and reference them in `src/data/projects.js`.

## Theme (light / dark)

- Colors live in `src/index.css`: dark tokens in `:root`, light tokens in `:root[data-theme="light"]`.
- The toggle is `src/components/ThemeToggle.jsx` (in the navbar). The choice is saved in
  `localStorage` under the key `theme`, and applied before first paint by a small script in `index.html`.

## Featured projects

- The Projects section displays only entries flagged `featured: true` in `src/data/projects.js` (max 3).
- To show real screenshots: put images in `public/projects/` and set `image: "/projects/name.webp"`.
- Once a project is deployed, set its `liveUrl` and a "Live Demo" button appears automatically.
