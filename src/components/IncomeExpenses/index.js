import React, { useContext } from 'react';
import { IncomeExpensesContainer, MoneyText } from './styles';
import { GlobalContext } from '../../context/GlobalState';
import { filterTransactionsByType } from '../../util/utils';
import { formatPrice } from '../../util/format';

export default function IncomeExpenses() {
  const { transactions } = useContext(GlobalContext);
  const incomeTransactionsTotal = filterTransactionsByType(
    transactions,
    'income'
  ).reduce((acc, transaction) => acc + Number(transaction.amount), 0);
  const expenseTransactionsTotal = filterTransactionsByType(
    transactions,
    'expense'
  ).reduce((acc, transaction) => acc + Number(transaction.amount), -0);
  return (
    <IncomeExpensesContainer>
      <div>
        <h4>Income</h4>
        <MoneyText type="plus">
          {formatPrice(expenseTransactionsTotal)}
        </MoneyText>
      </div>
      <div>
        <h4>Expense</h4>
        <MoneyText type="minus">
          {formatPrice(incomeTransactionsTotal)}
        </MoneyText>
      </div>
    </IncomeExpensesContainer>
  );
}
