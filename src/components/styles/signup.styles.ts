import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--blue-700);
  display: flex;
  height: 100vh;
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BackButton = styled.div`
  color: var(--white);
  font-size: 1rem;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 36px;

  svg {
    margin-right: 8px;
  }

  a {
    text-decoration: underline;
    transition: ease-in 0.3s;

    &:hover {
      color: #ffffff95;
    }
  }
`;

export const Title = styled.h1`
  color: var(--white);
  font-size: 1.5rem;
  font-weight: 600;
  margin: 50px 0 22px;
`;

export const Description = styled.p`
  color: var(--orange-500);
  font-size: 1.375rem;
  font-weight: 400;
`;
