import React from 'react';
import { List, ListItem } from './styles';

export default function TransactionList() {
  return (
    <>
      <h3>History</h3>
      <List>
        <ListItem type="plus">
          <div>
            <span>Cash</span>
            <span>+$400</span>
          </div>
          <button type="button">X</button>
        </ListItem>
        <ListItem type="minus">
          <div>
            <span>Cash</span>
            <span>-$400</span>
          </div>
          <button type="button">X</button>
        </ListItem>
      </List>
    </>
  );
}
