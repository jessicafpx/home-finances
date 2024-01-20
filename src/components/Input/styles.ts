import styled, { css } from "styled-components";

interface ContainerProps {
  $isFocused: boolean;
  $isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background-color: var(--gray-300);
  border-radius: 8px;
  padding: 14px;
  width: 100%;
  border: 3px solid var(--gray-300);
  color: var(--gray-700);
  display: flex;
  align-items: center;

  svg {
    color: var(--gray-850);
  }
  & + div {
    margin-top: 10px;
  }

  ${(props) =>
    props.$isFocused &&
    css`
      color: var(--blue-500);
      border-color: var(--blue-500);

      input {
        outline: none;
      }

      svg {
        color: var(--blue-500);
      }
    `}

  ${(props) =>
    props.$isFilled &&
    css`
      color: var(--blue-500);

      input {
        outline: none;
      }

      svg {
        color: var(--blue-500);
      }
    `}

  input {
    flex: 1;
    background-color: transparent;
    border: 0;
    &::placeholder {
      color: var(--gray-700);
    }
  }
  svg {
    margin-right: 16px;
  }
`;
