import React, { useState } from 'react';
import { FormTransaction, FormControl } from './styles';

export default function AddTransaction() {
  const [formState, setFormState] = useState({
    text: '',
    amount: '',
  });

  return (
    <>
      <h3>Add Transaction</h3>
      <FormTransaction>
        <FormControl>
          <label htmlFor="text">Text</label>
          <input type="text" placeholder="Enter text..." id="text" />
        </FormControl>
        <FormControl>
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" placeholder="Enter amount..." id="amount" />
        </FormControl>
        <button type="submit">Add Transaction</button>
      </FormTransaction>
    </>
  );
}
