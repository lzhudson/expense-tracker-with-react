import React from 'react';
import { List } from './styles';

export default function TransactionList() {
  return (
    <>
      <h3>History</h3>
      <List>
        <li>
          Cash <span>-$400</span>
          <button type="button">X</button>
        </li>
      </List>
    </>
  );
}
