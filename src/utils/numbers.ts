const compactFormatter = new Intl.NumberFormat('en-US', {
  notation: 'compact',
  maximumFractionDigits: 1,
})

const preciseFormatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
})

export const formatNumber = (value: number) =>
  value >= 1000 ? compactFormatter.format(value) : preciseFormatter.format(value)

export const formatRate = (value: number) => `${preciseFormatter.format(value)} / sec`
