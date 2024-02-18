import styled, { css } from "styled-components";

interface PropsContainer {
  hasSubtitle?: boolean;
}

export const Container = styled.div<PropsContainer>`
  ${({ hasSubtitle }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: ${hasSubtitle ? "74px" : "56px"};
    padding: 18px 24px 18px 18px;
    border-radius: 5px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
    background: var(--green-500);
    color: var(--white);

    &.error {
      background: var(--orange-500);
    }

    &.notification {
      background: var(--blue-500);
      flex-direction: row-reverse;
      align-items: flex-start;
    }

    & + div {
      margin-top: 12px;
    }

    animation: fadein 1s;

    @keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    .icon-close-container {
      background-color: transparent;
      margin-left: 36px;
      padding: 6px 4px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      cursor: pointer;

      &:hover {
        filter: brightness(0.85);
      }

      &:active {
        filter: brightness(0.75);
      }

      svg path {
        stroke-width: 1.2px;
      }
    }
  `}
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: flex-start;
`;

export const Message = styled.section`
  margin-left: 12px;

  p {
    font-size: 14px;
    font-weight: 700;
    line-height: 19px;
    color: var(--white);
    &.subtitle {
      font-weight: regular;
    }
  }
`;
