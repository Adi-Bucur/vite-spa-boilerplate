# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Vite-based single page application (SPA) showcasing "NeuroLink Pro", a brain wave AI reader product landing page. The project demonstrates modern web development practices with Apple-inspired design aesthetics.

## Development Commands

All commands should be run from the `vite-spa-boilerplate/` directory:

- `npm run dev` - Start development server (typically http://localhost:5173 or next available port)
- `npm run build` - Build for production (outputs to `dist/` directory)
- `npm run preview` - Preview production build locally

## Architecture & Structure

### Single-File SPA Pattern
The application uses a unique hybrid architecture:
- **HTML Structure**: Complete page layout is defined in `index.html` (not typical for Vite SPAs)
- **JavaScript Enhancement**: `main.js` adds interactive behaviors and animations to the static HTML
- **Styling**: `style.css` implements a comprehensive Apple-inspired design system

### Key Design System
The CSS implements a cohesive design system using CSS custom properties:
- **Colors**: Apple-inspired palette with neural-themed accents (`--color-neural`, `--color-neural-secondary`)
- **Typography**: Inter font family with Apple system font fallbacks
- **Spacing**: Consistent scale from `--spacing-xs` (8px) to `--spacing-4xl` (128px)
- **Shadows**: Four-tier shadow system for depth and hierarchy

### Interactive Features Architecture
- **Scroll-based animations**: Uses Intersection Observer API for performance
- **Smooth scrolling navigation**: Vanilla JavaScript implementation for section jumping
- **Dynamic styling**: Real-time style updates based on scroll position
- **Brain wave animations**: CSS-based animations enhanced with JavaScript timing

### Content Structure
The landing page follows Apple's marketing page patterns:
- Hero section with primary CTA
- Features grid (4 key benefits)
- Technology deep-dive with visual
- Technical specifications (3 categories)
- Pricing section with single product focus
- Professional footer with organized links

## Technical Implementation Notes

### Build Process
- Uses Vite 7.x with ES modules (`type: "module"` in package.json)
- No framework dependencies - pure vanilla JavaScript and CSS
- Optimized for production builds with automatic code splitting

### Browser Compatibility
- Uses modern CSS features (backdrop-filter, CSS custom properties)
- JavaScript features require modern browser support (Intersection Observer, ES6+)
- Responsive design implemented with CSS Grid and Flexbox

### Performance Considerations
- Google Fonts preconnection headers for faster loading
- CSS animations use transform and opacity for optimal performance
- Intersection Observer prevents unnecessary scroll event listeners
- after each code change, make sure to commit and push it