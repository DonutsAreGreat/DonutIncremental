import BuildingCard from './components/BuildingCard'
import StatCard from './components/StatCard'
import { BUILDINGS } from './data/buildings'
import { useGameState } from './hooks/useGameState'
import { formatNumber, formatRate } from './utils/numbers'
import './App.css'

function App() {
  const { state, donutsPerSecond, buildingCosts, bakeDonut, buyBuilding, resetGame } =
    useGameState()

  return (
    <div className="app">
      <header className="app__header">
        <div>
          <p className="app__eyebrow">Alpha kitchen</p>
          <h1 className="app__title">Donut Incremental</h1>
          <p className="app__lede">
            Start with a single donut and grow into a cozy, automated bakery empire.
          </p>
        </div>
        <button className="app__reset" onClick={resetGame} type="button">
          Reset kitchen
        </button>
      </header>

      <section className="app__panel">
        <div className="stat-grid">
          <StatCard
            label="Donuts on hand"
            value={formatNumber(state.donuts)}
            helper="Spend these to automate your bakery."
            highlight
          />
          <StatCard
            label="Automation"
            value={formatRate(donutsPerSecond)}
            helper="Donuts generated every second by your buildings."
          />
          <StatCard
            label="Total donuts baked"
            value={formatNumber(state.totalDonuts)}
            helper="Lifetime production across all runs."
          />
          <StatCard
            label="Hand-crafted"
            value={formatNumber(state.bakedByHand)}
            helper="The donuts you personally clicked into existence."
          />
        </div>
      </section>

      <section className="app__panel app__panel--action">
        <div className="action">
          <div>
            <p className="app__eyebrow">Manual production</p>
            <h2 className="app__section-title">Bake your first dozen</h2>
            <p className="app__muted">
              Click to bake donuts, then invest them into equipment that keeps running while you
              plan your next upgrade.
            </p>
          </div>
          <div className="action__controls">
            <button className="primary-button" onClick={bakeDonut} type="button">
              Bake a donut
            </button>
            <p className="app__muted">Current automation: {formatRate(donutsPerSecond)}</p>
          </div>
        </div>
      </section>

      <section className="app__panel">
        <div className="app__panel-heading">
          <div>
            <p className="app__eyebrow">Automation</p>
            <h2 className="app__section-title">Bakery floor</h2>
            <p className="app__muted">
              Hire bakers and upgrade equipment to grow your donut empire. Each purchase boosts
              your donuts per second.
            </p>
          </div>
          <span className="app__badge">{formatRate(donutsPerSecond)}</span>
        </div>

        <div className="building-grid">
          {BUILDINGS.map((building) => {
            const cost = buildingCosts[building.id]
            const count = state.buildings[building.id].count
            const canAfford = state.donuts >= cost

            return (
              <BuildingCard
                key={building.id}
                building={building}
                cost={cost}
                count={count}
                canAfford={canAfford}
                onPurchase={() => buyBuilding(building.id)}
              />
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default App
