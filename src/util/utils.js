export function typeTransaction(amount) {
  return amount < 0 ? 'minus' : 'plus';
}
