import styled from 'styled-components';

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 40px;

  li {
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    color: #333;
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 10px;
    margin: 10px 0;
    border-right: 5px solid
      ${(props) => (props.type === 'plus' ? '#2ecc71' : '#c0392b')};

    button {
      cursor: pointer;
      background-color: #e74c3c;
      border: 0;
      color: #fff;
      font-size: 20px;
      line-height: 20px;
      padding: 2px 5px;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(-100%, -50%);
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    &:hover button {
      opacity: 1;
    }
  }
`;
