import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import ResumeBox from "@/components/ResumeBox";
import {
  IconBalance,
  IconStatistic,
  IconTransactions,
} from "@/components/icons";
import { FiArrowDownCircle, FiArrowUpCircle } from "react-icons/fi";
import { dateFormatter, priceFormatter } from "@/utils/formatter";
import { useListTransactions } from "@/services/transactions/hooks/GET/useListTransactions";
import { TransactionTypeEnum } from "@/services/transactions/contract";
import * as S from "@/components/styles/pages.styles";
import { useResume } from "@/hooks/useResume";

export default function Transactions() {
  const { data: transactions } = useListTransactions();
  const prices = transactions?.map((transaction) =>
    transaction.type === TransactionTypeEnum.OUTCOME
      ? -transaction.price
      : transaction.price
  );
  const total = 20000;
  const { getIncome, getOutcome, getTotal, getPercent } = useResume(
    prices || [],
    total
  );
  console.log("transactions", transactions);

  return (
    <S.Wrapper>
      <Navbar />
      <S.Content>
        <S.Header>
          <S.TitleContainer>
            <S.IconBox>
              <IconTransactions color="#2E117B" size={24} />
            </S.IconBox>
            <S.Title>Transações</S.Title>
          </S.TitleContainer>
          <Button type="button">Nova transação</Button>
        </S.Header>

        <S.ResumeContainer>
          <ResumeBox
            title="Entradas"
            value={getIncome()}
            icon={<FiArrowUpCircle size={30} color="#33CC95" />}
          />
          <ResumeBox
            title="Saídas"
            value={getOutcome()}
            icon={<FiArrowDownCircle size={30} color="#FF5B5B" />}
          />
          <ResumeBox title="Saldo" value={getTotal()} icon={<IconBalance />} />
          <ResumeBox
            title={`${getPercent()} utilizado de`}
            value={total}
            icon={<IconStatistic />}
          />
        </S.ResumeContainer>
        <S.TransactionsTable>
          <thead>
            <tr>
              <th>Transação</th>
              <th>Categoria</th>
              <th>Data</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {transactions?.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <S.TransactionTitle width="50%">
                    {transaction.name}
                  </S.TransactionTitle>
                  <S.Category>{transaction.category}</S.Category>
                  <td>{dateFormatter.format(new Date(transaction.date))}</td>
                  <td>
                    <S.PriceHighlight variant={transaction.type}>
                      {transaction.type === TransactionTypeEnum.OUTCOME && "- "}
                      {priceFormatter.format(transaction.price)}
                    </S.PriceHighlight>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </S.TransactionsTable>
      </S.Content>
    </S.Wrapper>
  );
}
