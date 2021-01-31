import React, { useState, useContext } from 'react';
import { FormTransaction, FormControl } from './styles';
import { GlobalContext } from '../../context/GlobalState';

export default function AddTransaction() {
  const [formState, setFormState] = useState({
    text: '',
    amount: '',
  });
  const { addTransaction } = useContext(GlobalContext);
  const handleInputChange = (e) => {
    const valueInput = e.target.value;
    const nameInput = e.target.name;
    setFormState({
      ...formState,
      [nameInput]: valueInput,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      ...formState,
    };
    addTransaction(newTransaction);
  };
  return (
    <>
      <h3>Add Transaction</h3>
      <FormTransaction onSubmit={onSubmit}>
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
