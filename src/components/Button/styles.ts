import styled, { css } from "styled-components";

interface TButton {
  isDisabled?: boolean;
}

export const Container = styled.button<TButton>`
  ${({ isDisabled }) => css`
    background-color: ${isDisabled ? "var(--gray-700)" : "var(--blue-500)"};
    cursor: ${isDisabled && "not-allowed"};
    height: 48px;
    border-radius: 8px;
    border: 0;
    padding: 0 16px;
    color: ${isDisabled ? "var(--gray-850)" : "var(--gray-300)"};
    width: 100%;
    font-weight: 500;
    margin-top: 25px;
    transition: ease-in 0.3s;
    &:hover {
      background-color: ${!isDisabled && "#6933FF90"};
    }
  `}
`;
