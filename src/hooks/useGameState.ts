import { useEffect, useMemo, useState } from 'react'

import { BUILDINGS, BUILDING_LOOKUP } from '../data/buildings'
import type { BuildingId, GameState } from '../types/game'

const TICK_MS = 200

const createInitialBuildings = () =>
  BUILDINGS.reduce(
    (acc, building) => ({
      ...acc,
      [building.id]: { count: 0 },
    }),
    {} as GameState['buildings'],
  )

const createInitialState = (): GameState => ({
  donuts: 0,
  totalDonuts: 0,
  bakedByHand: 0,
  buildings: createInitialBuildings(),
})

const calculateBuildingCost = (id: BuildingId, owned: number) => {
  const building = BUILDING_LOOKUP[id]
  return Math.round(building.baseCost * Math.pow(building.costMultiplier, owned))
}

const calculateDonutsPerSecond = (buildings: GameState['buildings']) =>
  BUILDINGS.reduce(
    (total, building) => total + building.baseProduction * buildings[building.id].count,
    0,
  )

export const useGameState = () => {
  const [state, setState] = useState<GameState>(createInitialState)

  const donutsPerSecond = useMemo(
    () => calculateDonutsPerSecond(state.buildings),
    [state.buildings],
  )

  const buildingCosts = useMemo(
    () =>
      BUILDINGS.reduce(
        (acc, building) => ({
          ...acc,
          [building.id]: calculateBuildingCost(building.id, state.buildings[building.id].count),
        }),
        {} as Record<BuildingId, number>,
      ),
    [state.buildings],
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setState((current) => {
        const gain = calculateDonutsPerSecond(current.buildings) * (TICK_MS / 1000)

        if (gain === 0) return current

        return {
          ...current,
          donuts: current.donuts + gain,
          totalDonuts: current.totalDonuts + gain,
        }
      })
    }, TICK_MS)

    return () => clearInterval(interval)
  }, [])

  const bakeDonut = () =>
    setState((current) => ({
      ...current,
      donuts: current.donuts + 1,
      totalDonuts: current.totalDonuts + 1,
      bakedByHand: current.bakedByHand + 1,
    }))

  const buyBuilding = (id: BuildingId) =>
    setState((current) => {
      const owned = current.buildings[id].count
      const cost = calculateBuildingCost(id, owned)

      if (current.donuts < cost) return current

      return {
        ...current,
        donuts: current.donuts - cost,
        buildings: {
          ...current.buildings,
          [id]: { count: owned + 1 },
        },
      }
    })

  const resetGame = () => setState(createInitialState)

  return {
    state,
    donutsPerSecond,
    buildingCosts,
    bakeDonut,
    buyBuilding,
    resetGame,
  }
}
