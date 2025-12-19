# DonutIncremental

DonutIncremental is a cozy, browser-based incremental game where you start with a single donut and build a thriving donut empire through clever automation, flavorful research, and sweet prestige loops.

## Game Vision
- **Vibe:** Lighthearted, colorful, and cozy. UI leans on bakery counters, pastel sprinkles, and warm lighting.
- **Session Style:** Short, satisfying loops that feel productive within minutes, plus long-form idle depth for multi-day runs.
- **Devices:** Built primarily for desktop browsers with responsive layouts that work well on tablets and phones.

## Core Loop
1. Click to bake your first donuts and unlock automated bakers.
2. Spend donuts on production buildings (mixers, ovens, delivery vans) that increase Donuts Per Second (DPS).
3. Invest in upgrades that amplify output or change the math (multipliers, soft caps, synergy bonuses).
4. Unlock new donut varieties (glazed → chocolate → specialty seasonal sets) to deepen the economy and achievements.
5. Prestige into a new run as a "Franchise" to earn permanent flavor shards that accelerate future growth.

## Systems Overview
- **Resources:** Donuts (primary), Flavor Shards (prestige), Toppings (mid-game crafting), and Seasonal Ingredients (limited-time loops).
- **Production:** Buildings that produce donuts per second; each tier has scaling costs and unlock conditions.
- **Automation:** Auto-buyers, smart batching, and production routing that reduce click load and optimize output.
- **Research & Upgrades:** Tiered upgrades that modify multipliers, unlock new donut types, and alter building synergies.
- **Events & Seasons:** Time-limited bonuses with exclusive ingredients and cosmetics to keep late-game fresh.
- **UI/UX:** Accessible typography, color-blind-friendly palettes, tooltips for every modifier, and compact prestige summaries.
- **Performance:** Deterministic tick loop with floating-point safety guards and offline progress simulation.

## Planned Feature Milestones
- **MVP:**
  - Clicker + automated baker loop with 3–4 building types.
  - Basic upgrades, achievements, and a prestige reset that awards flavor shards.
  - Responsive UI with keyboard shortcuts for buying/selling and clear tooltips.
- **Beta:**
  - Expanded building tiers, donut varieties, and research trees.
  - Offline progress, cloud/local save, and accessibility options.
  - Seasonal event scaffolding (buffs, limited recipes, cosmetic badges).
- **Launch:**
  - Polished art/animation, achievements telemetry, and balance passes.
  - Community-requested quality-of-life (advanced autobuyers, granular logs).

## Technical Approach
- **Stack (planned):** TypeScript + React for UI, Vite for dev/build, Tailwind for styling, and Zustand for game state. Canvas/SVG for lightweight animations.
- **State Model:** Single source of truth for resources and upgrades; pure reducers for ticks; selectors for derived DPS and efficiency; checksumed saves to avoid corruption.
- **Simulation:** Fixed tick (e.g., 100–200ms) with delta-based catch-up for offline gains; deterministic math guarded by clamping and big-number helpers.
- **Persistence:** LocalStorage-first saves with optional cloud sync; import/export as versioned JSON.
- **Testing:** Unit tests for reducers and math helpers; integration tests for prestige/reset flows; snapshot tests for UI components.

## Next Steps
- **Design & UX:** Wireframe the main bakery panel, resource bars, upgrade list, and prestige modal. Define color/typography tokens and accessibility defaults.
- **Prototype:** Stand up a Vite + React shell with a minimal tick loop, a resource display, and a couple of buildings/upgrades.
- **Economy Tuning:** Document scaling curves (cost multipliers, softcaps), DPS formulas, and prestige rewards. Create a spreadsheet or JSON curves for iteration.
- **Content:** Draft the first 3 donut varieties, 5–6 upgrades, and a starter achievement list.
- **Infrastructure:** Set up linting (ESLint + Prettier), formatting hooks, and basic CI (lint + unit tests). Add analytics/event stubs for later.

## How It Will Be Built
- Start with the Vite/React scaffold and a modular game-state core (ticks, resources, buildings) separated from UI components.
- Implement reducers/selectors for donuts, buildings, and prestige; keep mutation-free logic for testability.
- Layer UI components for resource bars, building list, and upgrade cards; add hotkeys and batch-buy options.
- Add save/load, offline catch-up, and a prestige reset flow; expose debug panels for balance tuning.
- Iterate on content, balance, and accessibility with telemetry and playtest feedback.

## Repository Notes
This README will evolve alongside the prototype and design docs. Future commits should link to specific design specs, balance sheets, and component libraries as they land.
