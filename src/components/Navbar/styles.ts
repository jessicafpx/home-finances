import styled from "styled-components";

export const Wrapper = styled.nav`
  background-color: var(--blue-700);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 160px;
  height: 100vh;
  padding-block: 40px;
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.875rem;
  margin-top: -7rem;
`;

export const LogoutBtn = styled.button`
  background-color: transparent;
  border: none;
`;
