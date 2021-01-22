import React from 'react';
import { IncomeExpensesContainer, MoneyText } from './styles';

export default function IncomeExpenses() {
  return (
    <IncomeExpensesContainer>
      <div>
        <h4>Income</h4>
        <MoneyText type="plus">+$0.00</MoneyText>
      </div>
      <div>
        <h4>Expense</h4>
        <MoneyText type="minus">+$0.00</MoneyText>
      </div>
    </IncomeExpensesContainer>
  );
}
