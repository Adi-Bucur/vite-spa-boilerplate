# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

This is a Vite-based single page application (SPA) boilerplate project located in the `vite-spa-boilerplate/` directory. The main application code is in `vite-spa-boilerplate/src/`.

Key files:
- `vite-spa-boilerplate/src/main.js` - Main application entry point that renders the entire SPA content
- `vite-spa-boilerplate/src/style.css` - CSS styles using Apple-inspired design system with CSS custom properties
- `vite-spa-boilerplate/src/counter.js` - Utility function for counter functionality (currently unused in main app)
- `vite-spa-boilerplate/index.html` - HTML entry point with a single `#app` div

## Development Commands

All commands should be run from the `vite-spa-boilerplate/` directory:

- `npm run dev` - Start development server (typically runs on http://localhost:5173 or next available port)
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Architecture

The application uses a simple, single-file SPA architecture:
- All HTML content is generated in `main.js` using template literals
- The app renders directly into the `#app` div without any framework
- CSS uses a comprehensive design system with CSS custom properties for colors, spacing, typography, and shadows
- The current application displays a "NeuroLink Pro" product landing page with multiple sections (hero, features, products, story, specifications)

## Technology Stack

- **Build Tool**: Vite 7.x
- **Module System**: ES modules (type: "module" in package.json)
- **Styling**: Vanilla CSS with CSS custom properties
- **JavaScript**: Vanilla JavaScript (no framework)
- after each code change, make sure to commit and push it