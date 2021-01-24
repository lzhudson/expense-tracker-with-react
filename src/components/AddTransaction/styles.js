import styled from 'styled-components';

export const FormTransaction = styled.form`
  button[type='submit'] {
    cursor: pointer;
    background-color: #9c88ff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    color: #fff;
    border: 0;
    display: block;
    font-size: 16px;
    margin: 10px 0 30px;
    padding: 10px;
    width: 100%;
  }
  button:focus {
    outline: 0;
  }
`;

export const FormControl = styled.div`
  label {
    display: inline-block;
    margin: 10px 0;
  }
  input {
    border: 1px solid #dedede;
    border-radius: 2px;
    display: block;
    font-size: 16px;
    padding: 10px;
    width: 100%;
  }
`;
