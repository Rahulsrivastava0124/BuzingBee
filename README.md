# BuzingBee (Next.js)

This project is now migrated to Next.js (JavaScript, Pages Router).

## Scripts

- `npm run dev` — start development server on port 3000
- `npm run build` — generate sitemap, compile Tailwind CSS, and build production bundle
- `npm run start` — run the production server
- `npm run test` — run Jest tests
- `npm run lint` — run Next.js lint checks

## Routes

- `/` → Home
- `/services` → Services
- `/about` → About
- `/blog` → Blog listing
- `/blog/[slug]` → Blog details
- `/contact` → Contact

## Project Structure

- `pages/` — Next.js route files
- `src/pages/` — reusable page components rendered by route files
- `src/Components/` — UI components
- `public/` — static assets

## Docker

The Docker build now creates and runs the Next.js standalone server.
