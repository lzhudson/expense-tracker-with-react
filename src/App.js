import React from 'react';
import Container from './components/Container';
import Balance from './components/Balance';
import Header from './components/Header';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <Header />
      <Container>
        <Balance />
      </Container>
      <GlobalStyle />
    </>
  );
}

export default App;
