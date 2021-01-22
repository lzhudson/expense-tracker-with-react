import React from 'react';
import Container from './components/Container';
import Balance from './components/Balance';
import Header from './components/Header';
import GlobalStyle from './styles/global';
import IncomeExpenses from './components/IncomeExpenses';

function App() {
  return (
    <>
      <Header />
      <Container>
        <Balance />
        <IncomeExpenses />
      </Container>
      <GlobalStyle />
    </>
  );
}

export default App;
