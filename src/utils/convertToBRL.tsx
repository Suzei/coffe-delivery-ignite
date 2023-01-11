export function BRLCurrency(num: number) {
  return num.toLocaleString('pt-br', {
    minimumFractionDigits: 2,
  })
}
