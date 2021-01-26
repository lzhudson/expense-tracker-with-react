import React from 'react';
import Container from './components/Container';
import Balance from './components/Balance';
import Header from './components/Header';
import GlobalStyle from './styles/global';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <>
      <GlobalProvider>
        <Header />
        <Container>
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </Container>
        <GlobalStyle />
      </GlobalProvider>
    </>
  );
}

export default App;
