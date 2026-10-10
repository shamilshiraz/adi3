# ADHIHAVEN

ADHIHAVEN is a responsive Dubai real-estate advisory website built with React,
Vite, Tailwind CSS v4, Framer Motion, and React Router.

## Available scripts

```bash
npm run dev      # Start the Vite development server
npm run lint     # Run ESLint
npm run build    # Create a production build
npm run preview  # Preview the production build locally
```

## Main routes

- `/` — Homepage and investment overview
- `/agents` — Advisor directory with search
- `/about` — Abdul Abid, CEO & Founder
- `/roadshows` — Roadshow search, location filtering, and date sorting
- `/developer` — Consultation process and FAQs
- `/contact` — Consultation form and office information
- `/terms` — Terms & Conditions

## Lead forms

The consultation form and investor roadshow popup submit through FormSubmit to
`adhirealty.uae@gmail.com`. FormSubmit may send a one-time activation email to
the inbox the first time the integration is used. The destination address is
centralized in `src/utils/formSubmission.js`.

## Project structure

- `src/pages` contains route-level pages.
- `src/components` contains reusable sections and shared layout components.
- `src/assets/agents.json` contains the advisor directory data.
- `public` contains local logos, hero imagery, and developer logos.
