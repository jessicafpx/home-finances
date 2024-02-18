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
  padding-inline: 128px;
  max-width: 1400px;
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

export const ResumeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 48px;
  gap: 24px;
`;

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 52px;
  max-height: 60vh;
  overflow-y: auto;
  display: block;
  padding-right: 8px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--gray-700);
    border-radius: 4px;
    margin-left: 5px;
  }

  tbody {
    display: block;
  }

  thead,
  tbody tr {
    display: table;
    width: 100%;
    table-layout: fixed;
  }

  th {
    text-align: left;
    padding: 0 2rem;
    color: var(--gray-700);
    font-weight: 400;
  }

  td {
    padding: 1.25rem 2rem;
    background: var(--white);
    color: var(--gray-700);

    &:first-child {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
      width: 40%;
    }

    &:last-child {
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
    }
  }
`;

export const TransactionTitle = styled.td`
  color: var(--gray-800);
`;

export const Category = styled.td`
  text-transform: capitalize;
`;

export const ActionsButton = styled.td`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  button {
    display: flex;
    align-items: center;
    height: 24px;
    border: none;
    background-color: transparent;
  }
`;

interface PriceHighlightProps {
  variant: "income" | "outcome";
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${(props) => (props.variant === "income" ? "#33CC95" : "#FF5B5B")};
`;
