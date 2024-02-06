import styled from "styled-components";

export const Wrapper = styled.div`
  width: 250px;
  padding: 16px 24px;
  background-color: var(--white);
  border-radius: 8px;
`;

export const Title = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  color: var(--gray-800);
`;

export const Subtitle = styled.h4`
  color: var(--gray-800);
  font-size: 2rem;
  span {
    font-size: 1.375rem;
    margin-right: 4px;
  }
`;
