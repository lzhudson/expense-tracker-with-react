import React, { useContext } from 'react';
import { List, ListItem } from './styles';
import { GlobalContext } from '../../context/GlobalState';
import { formatPrice } from '../../util/format';
import { typeTransaction } from '../../util/utils';

export default function TransactionList() {
  const { transactions, deleteTransaction } = useContext(GlobalContext);
  const transactionList = transactions.map((transaction) => ({
    ...transaction,
    priceFormatted: formatPrice(transaction.amount),
    typeTransaction: typeTransaction(transaction.amount),
  }));
  return (
    <>
      <h3>History</h3>
      <List>
        {transactionList.map((transaction) => (
          <ListItem key={transaction.id} type={transaction.typeTransaction}>
            <div>
              <span>{transaction.text}</span>
              <span>{transaction.priceFormatted}</span>
            </div>
            <button
              onClick={() => deleteTransaction(transaction.id)}
              type="button"
            >
              X
            </button>
          </ListItem>
        ))}
      </List>
    </>
  );
}
