import styled from "styled-components";

export const Wrapper = styled.li`
  list-style-type: none;
`;

export const Btn = styled.button`
  width: 100px;
  height: 90px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border: none;
  border-radius: 8px;
  background-color: transparent;
  font-size: 0.875rem;
  color: var(--white);
  transition: 0.1s all ease-in-out;

  &:hover {
    background-color: #6933ff20;
  }

  &.selected {
    background-color: #6933ff20;
    color: var(--orange-500);

    svg path {
      fill: var(--orange-500);
    }
  }
`;
