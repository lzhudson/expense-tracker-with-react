import React, { useContext } from 'react';
import { BalanceTitle, BalanceTextValue } from './style';
import { GlobalContext } from '../../context/GlobalState';
import { formatPrice } from '../../util/format';

export default function Balance() {
  const { transactions } = useContext(GlobalContext);
  const totalBalance = transactions.reduce(
    (acc, transaction) => acc + Number(transaction.amount),
    0
  );
  return (
    <>
      <BalanceTitle>Your Balance</BalanceTitle>
      <BalanceTextValue>{formatPrice(totalBalance)}</BalanceTextValue>
    </>
  );
}
