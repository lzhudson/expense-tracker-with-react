export function typeTransaction(amount) {
  return amount < 0 ? 'minus' : 'plus';
}
export function filterTransactionsByType(transactions, type) {
  let transactionsFiltered = [];
  if (type === 'income')
    transactionsFiltered = transactions.filter((transaction) =>
      transaction.amount < 0 ? transaction : null
    );
  if (type === 'expense')
    transactionsFiltered = transactions.filter((transaction) =>
      transaction.amount > 0 ? transaction : null
    );

  return transactionsFiltered;
}
