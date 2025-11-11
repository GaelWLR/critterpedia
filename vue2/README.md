# Critterpedia - Vue 2 Implementation

Vue 2 implementation of the Animal Crossing Critterpedia.

## Features

- Display bugs, fishes, and fossils
- Sort by name or price
- Filter by hemisphere and period

## Tech Stack

- Vue 2.6 with Vuex for state management
- Vue Router for navigation (history mode)
- Vite as build tool with vite-plugin-vue2
- Vue-i18n for internationalization (French default, English fallback)
- Axios for data fetching
- FontAwesome icons

## Development

```bash
# Install dependencies
yarn install

# Start dev server
yarn dev

# Build for production
yarn build

# Lint
yarn lint

# Format
yarn format
```

## Project Structure

```
vue2/
├── src/
│   ├── models/           # Resource model classes
│   ├── store/            # Vuex store with modular structure
│   │   └── modules/      # bugs, fishes, fossils modules
│   ├── views/            # Route-level components
│   ├── components/       # Reusable components
│   ├── plugins/          # Axios, i18n configuration
│   ├── utils/            # Data formatting utilities
│   └── router/           # Vue-router configuration
├── public/               # Symlinks to shared assets
│   ├── data/            → ../../shared/data/
│   ├── images/          → ../../shared/images/
│   └── icons/           → ../../shared/icons/
└── index.html
```

## Notes

This is part of a multi-framework comparison project. See the main README for other implementations.
