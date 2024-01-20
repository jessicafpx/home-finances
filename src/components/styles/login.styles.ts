import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--blue-700);
  display: flex;
`;

export const Aside = styled.aside`
  height: 100vh;
  display: flex;
  align-items: stretch;

  width: 100%;
  max-width: 700px;

  flex-direction: column;
  justify-content: center;
  flex-grow: 0;
  padding: 120px 60px;
  background-color: #fff;
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

export const Form = styled.form`
  width: 100%;
`;

export const SignUp = styled.div`
  color: var(--orange-500);
  font-size: 1rem;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  text-align: center;
  cursor: default;
  margin-top: 36px;

  a {
    text-decoration: underline;
    transition: ease-in 0.3s;

    &:hover {
      color: #ff5b5b90;
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
