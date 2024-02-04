import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: row;
`;

export const Content = styled.main`
  width: 100%;
  padding-block: 48px;
  padding-inline: 64px;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  button {
    width: 190px;
    margin-top: 0;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 1rem;
`;

export const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  background-color: var(--white);
  border-radius: 8px;
`;

export const Title = styled.h1`
  color: var(--blue-700);
  font-size: 1.75rem;
  font-weight: 700;
`;
