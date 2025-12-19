import './StatCard.css'

interface StatCardProps {
  label: string
  value: string
  helper?: string
  highlight?: boolean
}

const StatCard = ({ label, value, helper, highlight = false }: StatCardProps) => (
  <div className={`stat-card ${highlight ? 'stat-card--highlight' : ''}`}>
    <p className="stat-card__label">{label}</p>
    <p className="stat-card__value">{value}</p>
    {helper ? <p className="stat-card__helper">{helper}</p> : null}
  </div>
)

export default StatCard
