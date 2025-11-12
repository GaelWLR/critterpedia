# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

critterpedia is a multi-framework comparison project that implements the same Animal Crossing New Horizons Critterpedia application across different JavaScript frameworks. The project uses a monorepo structure with shared assets.

### Repository Structure

```
critterpedia/
├── shared/              # Shared assets across all implementations
│   ├── data/           # JSON files: bugs, fish, fossils, sea, art, villagers, music
│   ├── images/         # PNG images for all items and villagers
│   ├── audio/          # MP3 files for K.K. Slider songs and hourly music
│   └── icons/          # SVG icons
├── vue2/               # Vue 2 implementation (current)
├── vue3/               # Vue 3 implementation (planned)
├── sveltekit/          # SvelteKit implementation (planned)
├── nextjs/             # Next.js implementation (planned)
└── nuxtjs/             # Nuxt.js implementation (planned)
```

## Development Commands

**Note**: All development commands must be run from within the specific framework directory (e.g., `vue2/`).

From the `vue2/` directory:
- `yarn dev` - start vite dev server on http://localhost:3000
- `yarn build` - build for production
- `yarn lint` - run eslint on src files (quiet mode)
- `yarn format` - format js/vue/css files with prettier

## Vue 2 Implementation Architecture

### tech stack
- vue 2.6 with vuex for state management
- vue-router for navigation (history mode)
- vite as build tool with vite-plugin-vue2
- vue-i18n for internationalization (french default, english fallback)
- axios for data fetching
- fontawesome icons

### project structure

```
vue2/
├── src/
│   ├── models/           # resource model classes
│   ├── store/            # vuex store with modular structure
│   │   └── modules/      # bugs, fishes, fossils modules
│   ├── views/            # route-level components
│   ├── components/       # reusable components
│   ├── plugins/          # axios, i18n configuration
│   ├── utils/            # data formatting utilities
│   └── router/           # vue-router configuration
├── public/               # Symlinks to shared assets
│   ├── data/            → ../../shared/data/
│   ├── images/          → ../../shared/images/
│   ├── audio/           → ../../shared/audio/
│   └── icons/           → ../../shared/icons/
└── index.html
```

### vuex architecture

**modular store pattern**: each resource type (bugs, fishes, fossils) has a namespaced vuex module in `src/store/modules/`

**module structure**:
```js
state: {
  data: [],              // array of model instances
  sortingOptions: [],    // available sorting options
  filters: {},           // filter configuration and selected values
  loaded: false          // prevents duplicate api calls
}
```

**centralized filtering/sorting**: the root store provides a `getResourceDataSortedAndFiltered` getter that:
- accepts resource name as parameter
- applies all active filters (availability by time/hemisphere, location, shadow)
- applies all active sorting options in sequence
- used by all resource views via `getResourceDataSortedAndFiltered('bugs')`

**shared mutations/actions**: `SET_SORTING_OPTION` and `SET_FILTER` are in root store and work across all modules via resource name parameter

### data model pattern

**base class**: `ACNHApiResource` in `src/models/ACNHApiResource.js`
- handles common properties (id, reference, imgUrl, price, names)
- provides computed getters for localized properties (name, location, shadow)
- name localization via `formatNames` utility and i18n.locale

**extending classes**: `Bug`, `Fish`, `Fossil` extend ACNHApiResource
- transform raw api data in constructor (availability, months, hours)
- use utility functions from `src/utils/formatResources.js` to parse availability strings

### data flow

1. view component dispatches module action on `created()`: `this.$store.dispatch('bugs/loadData')`
2. module checks `loaded` flag to prevent duplicate fetches
3. axios fetches static json from `/data/bugs.json` (symlinked from `shared/data/`, configured in `vue2/src/plugins/axios/index.js`)
4. raw data transformed into model instances: `data.map(bug => new Bug(bug))`
5. dynamic filter options extracted from loaded data and committed
6. view accesses data via computed property using root getter: `getResourceDataSortedAndFiltered('bugs')`

### filtering system

**availability filter**: combines time period and hemisphere
- options: 'all', 'this_month-north', 'this_month-south', 'now-north', 'now-south'
- filters based on current date/time against resource availability arrays

**dynamic filters**: location and shadow filters are built from actual data
- module iterates loaded resources to extract unique values
- sorted alphabetically and committed via `SET_FILTER_OPTIONS`

### sorting system

**three-state pattern**: each sorting option cycles through:
1. inactive (no sorting applied)
2. active ascending
3. active descending

**sort types**: 'string' (uses localeCompare) or 'number' (numeric comparison)

**action logic** in `updateSortingOption`:
- if inactive → activate ascending
- if active ascending → switch to descending
- if active descending → deactivate and reset to ascending

## key patterns

### lazy loading
resources are only fetched once per session via `loaded` flag in module state

### i18n integration
- default locale is french (`locale: 'fr'`)
- model getters use `i18n.locale` to return localized properties
- `formatNames` utility extracts locale codes from api name objects
- translation keys use snake_case format via `formatStringToTranslate`

### api integration
axios instance configured with `baseURL: '/data/'` to load static json files rather than external api calls

## node version
project uses volta with node 18.16.0 and yarn 1.22.19
