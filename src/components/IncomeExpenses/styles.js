import styled from 'styled-components';

export const IncomeExpensesContainer = styled.div`
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;

  > div {
    flex: 1;
    text-align: center;
  }

  > div:first-of-type {
    border-right: 1px solid #dedede;
  }
`;

export const MoneyText = styled.p`
  font-size: 1.25rem;
  letter-spacing: 1px;
  margin: 5px 0;
  color: ${(props) => (props.type === 'plus' ? '#2ecc71' : '#c0392b')};
`;
