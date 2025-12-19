import type { BuildingDefinition, BuildingId } from '../types/game'

export const BUILDINGS: BuildingDefinition[] = [
  {
    id: 'handmade',
    name: 'Hand Mixer',
    description: 'Your trusty stand mixer that keeps dough moving even while you dream.',
    baseCost: 15,
    costMultiplier: 1.08,
    baseProduction: 0.3,
  },
  {
    id: 'mixer',
    name: 'Baker Buddy',
    description: 'A junior baker who measures, mixes, and sprinkles without complaint.',
    baseCost: 65,
    costMultiplier: 1.12,
    baseProduction: 1.4,
  },
  {
    id: 'oven',
    name: 'Convection Oven',
    description: 'Precision heating with a warm glow—perfect for overnight batches.',
    baseCost: 240,
    costMultiplier: 1.15,
    baseProduction: 6,
  },
  {
    id: 'deliveryVan',
    name: 'Delivery Van',
    description: 'Ships fresh dozens across town, expanding your donut empire.',
    baseCost: 950,
    costMultiplier: 1.18,
    baseProduction: 18,
  },
]

export const BUILDING_LOOKUP = Object.fromEntries(
  BUILDINGS.map((building) => [building.id, building]),
) as Record<BuildingId, BuildingDefinition>
