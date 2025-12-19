import type { BuildingDefinition } from '../types/game'
import { formatNumber, formatRate } from '../utils/numbers'
import './BuildingCard.css'

interface BuildingCardProps {
  building: BuildingDefinition
  count: number
  cost: number
  canAfford: boolean
  onPurchase: () => void
}

const BuildingCard = ({ building, count, cost, canAfford, onPurchase }: BuildingCardProps) => (
  <article className="building-card">
    <div className="building-card__header">
      <div>
        <p className="building-card__eyebrow">Production</p>
        <h3 className="building-card__title">{building.name}</h3>
      </div>
      <span className="building-card__count">x{count}</span>
    </div>

    <p className="building-card__description">{building.description}</p>

    <div className="building-card__meta">
      <div>
        <p className="building-card__label">Output</p>
        <p className="building-card__value">{formatRate(building.baseProduction)}</p>
      </div>
      <div>
        <p className="building-card__label">Next cost</p>
        <p className="building-card__value">{formatNumber(cost)} donuts</p>
      </div>
    </div>

    <button
      className="building-card__button"
      onClick={onPurchase}
      disabled={!canAfford}
      type="button"
    >
      {canAfford ? 'Purchase' : 'Need donuts'}
    </button>
  </article>
)

export default BuildingCard
