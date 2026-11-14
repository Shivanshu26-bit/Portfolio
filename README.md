# Shivanshu Shukla · Portfolio

Personal portfolio built with React, TypeScript, and Vite.

**Live:** https://shivanshu26-bit.github.io/Portfolio/

## Development

Use Node.js 24 (also used by the deployment workflow).

```sh
npm ci
npm run dev
npm run build
npm run preview
```

GitHub Pages builds and deploys `main` using `.github/workflows/deploy.yml`.
Vite's `/Portfolio/` base is required for repository hosting.

## Updating content

- Project content, categories, dates, and repository links: `src/data/projects.ts`.
- Introduction and education: `src/components/Hero.tsx`.
- Skills, community, achievements, events, and contact: matching files in `src/components/`.
- Layout, responsive styles, keyboard focus, and reduced motion: `src/index.css`.

Filter counts are derived from project data. Project dates describe repository activity, not completion dates. Recent work is a curated snapshot, not a live GitHub feed.

## November 14, 2026 presentation audit

The September 23 version omitted October/November work, advertised project categories with no matching results, and displayed conflicting hardcoded counts. Dense project feature lists and repeated domain/event summaries weakened the hierarchy.

The refresh introduces an editorial green/neutral visual system, a larger portrait and introduction, six concise source-linked projects, working category filters with derived counts, a keyboard skip link, and responsive navigation. Existing education, contact details, community roles, achievements, and event history are retained from the portfolio; those personal claims have not been independently verified. The misleading “Verified Record” labels were removed.

New content was checked against the public READMEs for:

- [Earthquake Analysis](https://github.com/Shivanshu26-bit/Earthquake_Analysis)
- [Healthcare Appointment Dashboard](https://github.com/Shivanshu26-bit/Healthcare-Appointment-Dashboard)
- [Inventory Management API](https://github.com/Shivanshu26-bit/Backend-Assignment-3)
- [AI Resume Studio](https://github.com/Shivanshu26-bit/ai-resume-studio)

LinkedIn blocked automated access (HTTP 999), so no new LinkedIn-only achievements or roles were added. Older projects and games remain available through the link to all repositories.

## Notebook design edition

The second presentation pass uses a paper-and-ink visual direction with an oversized serif nameplate, handwritten margin notes, a taped portrait, and a selectable project-file explorer. Workflow sketches explain each project's input, process, and output; they are schematic illustrations, not measured data visualizations. A 2TechY poster and expandable events archive give different content different presentation treatments.

Project selection stays within the current filter, with the first matching project as a fallback. Category and project buttons expose their selected state, updates are announced in a status region, and Escape closes the mobile menu and restores focus to its toggle. Responsive styles and reduced-motion preferences are supported. The page uses system font fallbacks if Google Fonts is unavailable.

Validation: production build and server-rendered content/anchor/filter checks. Interactive browser and visual viewport checks were unavailable because the managed environment did not include its supported browser tool.
