import React, { useState } from 'react';
import { FormTransaction, FormControl } from './styles';

export default function AddTransaction() {
  const [formState, setFormState] = useState({
    text: '',
    amount: '',
  });

  const handleInputChange = (e) => {
    const valueInput = e.target.value;
    const nameInput = e.target.name;
    setFormState({
      ...formState,
      [nameInput]: valueInput,
    });
    console.log(formState);
  };
  return (
    <>
      <h3>Add Transaction</h3>
      <FormTransaction>
        <FormControl>
          <label htmlFor="text">Text</label>
          <input
            onChange={(e) => handleInputChange(e)}
            type="text"
            value={formState.text}
            placeholder="Enter text..."
            id="text"
            name="text"
          />
        </FormControl>
        <FormControl>
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            value={formState.amount}
            onChange={(e) => handleInputChange(e)}
            type="number"
            placeholder="Enter amount..."
            id="amount"
            name="amount"
          />
        </FormControl>
        <button type="submit">Add Transaction</button>
      </FormTransaction>
    </>
  );
}
