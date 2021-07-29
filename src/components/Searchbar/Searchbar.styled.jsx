import styled from "@emotion/styled";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #18166b;

  padding: 10px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  width: 400px;
  height: 40px;

  font-size: 20px;
  font-weight: 500;

  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;

  padding: 5px;

  border: none;

  &:focus {
    outline: none;
    background-color: #cdcdfd;
    & + button {
    }
  }
`;

export const Button = styled.button`
  width: 40px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white;

  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left: 1px solid #18166b;

  cursor: pointer;
`;
