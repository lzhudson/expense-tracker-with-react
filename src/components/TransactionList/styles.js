import styled from 'styled-components';

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 40px;
`;
export const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin: 10px 0;
  position: relative;
  &:hover button {
    opacity: 1;
  }
  div {
    width: 90%;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    color: #333;
    padding: 10px;
    border-left: 5px solid
      ${(props) => (props.type === 'plus' ? '#2ecc71' : '#c0392b')};
    span {
      color: #333;
    }
  }
  button {
    position: absolute;
    right: 0;
    height: 100%;
    width: 10%;
    cursor: pointer;
    background-color: #e74c3c;
    border: 0;
    color: #fff;
    font-size: 20px;
    padding: 2px 5px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
`;
