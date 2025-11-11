# Critterpedia

A multi-framework implementation of Animal Crossing's Critterpedia to explore and compare different frontend technologies.

## About

This project implements the same Animal Crossing New Horizons Critterpedia application across multiple JavaScript frameworks. Each implementation displays bugs, fishes, and fossils with sorting and filtering capabilities.

## Frameworks

### ✅ Implemented

- **[Vue 2](./vue2/)** - Complete implementation with Vuex, Vue Router, and Vite

### 📋 Planned

- **Vue 3** - With Pinia and Composition API
- **SvelteKit** - Svelte meta-framework with SSR/SSG
- **Next.js** - React with SSR/SSG
- **Nuxt.js** - Vue 3 meta-framework

## Features

All implementations include:

- 📊 Display bugs, fishes, and fossils from Animal Crossing New Horizons
- 🔤 Sort by name or price
- 🌍 Filter by hemisphere (North/South)
- ⏰ Filter by availability (current month, right now)
- 📍 Filter by location and other attributes
- 🌐 i18n support (French/English)

## Shared Assets

All framework implementations share the same data and assets located in the `shared/` directory:

- **Data**: JSON files with bugs, fish, and fossils information (~383 KB)
- **Images**: PNG images for all creatures (~20 MB)
- **Icons**: SVG icons for UI elements

Each framework accesses these shared assets via symlinks in their respective `public/` folders.

## Project Structure

```
critterpedia/
├── shared/              # Shared assets across all implementations
│   ├── data/           # bugs.json, fish.json, fossils.json
│   ├── images/         # PNG images for all creatures
│   └── icons/          # SVG icons
│
├── vue2/               # Vue 2 implementation
│   ├── src/
│   ├── public/         # Symlinks to ../shared/
│   └── package.json
│
├── vue3/               # Vue 3 implementation (planned)
├── sveltekit/          # SvelteKit implementation (planned)
├── nextjs/             # Next.js implementation (planned)
└── nuxtjs/             # Nuxt.js implementation (planned)
```

## Getting Started

Each framework implementation is independent. Navigate to the desired framework directory and follow its README:

```bash
# Vue 2
cd vue2
yarn install
yarn dev
```

## Development Philosophy

This project aims to:

- 🎯 Implement the exact same features in each framework
- 🔍 Compare approaches, patterns, and best practices
- 📚 Serve as a learning resource for framework differences
- 🚀 Demonstrate real-world application structure

## Data Source

All creature data comes from the Animal Crossing New Horizons API / community data sources.

## License

This project is for educational purposes.
