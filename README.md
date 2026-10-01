# ByteSpace

ByteSpace is a modern learning-platform landing page and authentication experience built with Next.js, TypeScript, and Tailwind CSS. The app presents a polished homepage for creators and learners, including course highlights, testimonial sections, and login/register flows.

## Features

- Responsive marketing landing page
- Course catalog and learning path sections
- Creator-focused CTA blocks
- Testimonials and social proof
- Login and registration pages
- Reusable component architecture
- Clean Tailwind-based design system

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- ESLint

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm

### Install dependencies

```bash
npm install
```

### Run the app locally

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

### Production build

```bash
npm run build
```

### Start production server

```bash
npm run start
```

### Lint the project

```bash
npm run lint
```

## Project Structure

```bash
src/
  app/
    globals.css
    layout.tsx
    page.tsx
    login/
    register/
  components/
    auth/
    cards/
    layout/
    sections/
    ui/
  data/
  lib/
  types/
public/
  avatars/
  courses/
  hero-image/
  images/
  logos/
  people/
  shapes/
```

## Notes

- The design is built as a front-end-focused UI and is structured to be extended with real backend data or authentication later.
- The app uses reusable UI primitives and content-driven data files to keep the layout easy to customize.
- Tailwind theme tokens are centralized in the configuration file, making brand and color updates easier to manage.

## License

This project is for demo and educational use.
