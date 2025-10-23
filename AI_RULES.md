# AI Rules for this Application

This document outlines the core technologies used in this project and provides guidelines for library usage to maintain consistency and best practices.

## Tech Stack Description

*   **Next.js (v16.0.0)**: A React framework for building full-stack web applications, providing server-side rendering, static site generation, and API routes.
*   **React (v19.2.0)**: A JavaScript library for building user interfaces, focusing on component-based development.
*   **TypeScript**: A superset of JavaScript that adds static typing, enhancing code quality and maintainability.
*   **Tailwind CSS (v4)**: A utility-first CSS framework for rapidly building custom designs directly in your markup.
*   **Lucide React**: A collection of open-source, customizable SVG icons for React applications.
*   **Next/Font**: Next.js's built-in font optimization feature, used here for Geist and Geist Mono fonts.
*   **File-System Routing**: Next.js handles routing automatically based on the file structure within the `app/` directory.
*   **React Hooks**: Utilizes React's built-in hooks like `useState` for managing component-level state.

## Library Usage Rules

*   **Application Framework**: Use **Next.js** for all page and API route creation.
*   **UI Components**: Build UI components using **React**.
*   **Styling**: All styling must be done using **Tailwind CSS** classes. Avoid custom CSS files or other styling libraries.
*   **Icons**: Use **Lucide React** for all icons. Import icons directly from the `lucide-react` package.
*   **Fonts**: Leverage **`next/font`** for optimal font loading and performance.
*   **State Management**: For local component state, use **React's `useState` and `useReducer` hooks**. For global state, if needed, a dedicated solution will be introduced.
*   **Routing**: Rely on **Next.js's file-system based routing**. Do not introduce `react-router-dom` or similar client-side routing libraries.
*   **Utility Functions**: Create small, focused utility functions in `src/utils/` for common tasks.