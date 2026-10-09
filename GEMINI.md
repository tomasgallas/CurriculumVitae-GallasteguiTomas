# Project Overview
This project is a React-based web application serving as a Curriculum Vitae (CV) for Tomas Gallastegui. It is built using modern web development practices and tools, focusing on a responsive and interactive user interface.

## Tech Stack
- **Framework:** React 18 with TypeScript
- **Bundler:** Vite
- **Styling:** Tailwind CSS (v4)
- **UI Components:** Shadcn UI (built on top of Radix UI primitives)
- **Icons:** Lucide React, MUI Icons
- **Routing:** React Router
- **Animations/Charts:** Motion, Canvas Confetti, Recharts
- **Deployment:** GitHub Pages (via `gh-pages`)

## Key Directories and Files
- `src/`: Contains the source code of the application.
  - `src/main.tsx`: The application entry point.
  - `src/app/App.tsx`: The main application component.
  - `src/app/components/ui/`: Contains reusable Shadcn UI components.
  - `src/styles/`: Contains global styles, fonts, and Tailwind configurations.
  - `src/assets/`: Contains static assets like images (`FotoCV.jpg`).
- `vite.config.ts`: Configuration file for Vite, including path aliases (`@/` to `src/`) and a custom Figma asset resolver.
- `package.json`: Defines project dependencies and scripts.
- `guidelines/Guidelines.md`: A template for project-specific rules and guidelines.

## Building and Running
The project defines the following npm scripts in `package.json`:

- **Development Server:** Start the local development server using Vite.
  ```bash
  npm run dev
  ```
- **Build:** Build the project for production.
  ```bash
  npm run build
  ```
- **Deploy:** Deploy the application to GitHub Pages (automatically runs build first).
  ```bash
  npm run deploy
  ```

## Development Conventions
- The project uses **TypeScript** for type safety; ensure new code is properly typed.
- **Tailwind CSS** is used for styling. Stick to utility classes for consistent design.
- **Shadcn UI** components are located in `src/app/components/ui/`. Prefer reusing these existing components over building new ones from scratch to maintain a cohesive look and feel.
- Path aliases are configured: use `@/` to import from the `src/` directory (e.g., `import { Button } from "@/app/components/ui/button"`).
