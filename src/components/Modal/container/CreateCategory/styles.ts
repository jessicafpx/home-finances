import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  margin-bottom: 32px;
  color: var(--blue-700);
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

export const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.87);
  margin-bottom: 4px;
`;

export const Input = styled.input`
  padding: 8px 12px;
  border: 1px solid rgba(0, 0, 0, 0.23);
  border-radius: 4px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s ease-in-out;

  &:focus {
    border-color: #1976d2;
  }
`;

export const RadiosBtn = styled.div`
  margin-bottom: 24px;
`;

export const RadioButtonLabel = styled.label`
  margin-right: 56px;
  input {
    margin-right: 8px;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: var(--blue-500);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
