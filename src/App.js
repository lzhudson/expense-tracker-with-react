import React from 'react';
import Container from './components/Container';
import Balance from './components/Balance';
import Header from './components/Header';
import GlobalStyle from './styles/global';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';

function App() {
  return (
    <>
      <Header />
      <Container>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
      </Container>
      <GlobalStyle />
    </>
  );
}

export default App;
