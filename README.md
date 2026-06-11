# Dipak-Folio — React + Vite SPA

Plain React 19 + Vite + Tailwind v4 SPA. No TanStack, fully static.

## Local
```
npm install
npm run dev
```

## Build
```
npm run build
```
Outputs to `dist/`.

## Deploy to Vercel
- Import the repo on Vercel (framework preset: **Vite**).
- Build command: `npm run build`
- Output directory: `dist`
- `vercel.json` already rewrites all routes to `index.html` for SPA routing.
