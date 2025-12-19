export type BuildingId = 'handmade' | 'mixer' | 'oven' | 'deliveryVan'

export interface BuildingDefinition {
  id: BuildingId
  name: string
  description: string
  baseCost: number
  costMultiplier: number
  baseProduction: number
  unlocksAt?: number
}

export interface BuildingProgress {
  count: number
}

export type BuildingState = Record<BuildingId, BuildingProgress>

export interface GameState {
  donuts: number
  totalDonuts: number
  bakedByHand: number
  buildings: BuildingState
}
