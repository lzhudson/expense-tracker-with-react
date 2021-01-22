import React from 'react';
import { BalanceTitle, BalanceTextValue } from './style';

export default function Balance() {
  return (
    <>
      <BalanceTitle>Your Balance</BalanceTitle>
      <BalanceTextValue>$0.00</BalanceTextValue>
    </>
  );
}
