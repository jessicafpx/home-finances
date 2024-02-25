import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import ResumeBox from "@/components/ResumeBox";
import {
  IconBalance,
  IconStatistic,
  IconTransactions,
} from "@/components/icons";
import {
  FiArrowDownCircle,
  FiArrowUpCircle,
  FiEdit,
  FiPenTool,
  FiTrash,
} from "react-icons/fi";
import { dateFormatter, formatCurrency, priceFormatter } from "@/utils";
import { useListTransactions } from "@/services/transactions/hooks/GET/useListTransactions";
import {
  Transaction,
  TransactionTypeEnum,
} from "@/services/transactions/contract";
import { useResume } from "@/hooks/useResume";
import { useCallback, useMemo, useState } from "react";
import Modal from "@/components/Modal";
import CreateTransaction from "@/components/Modal/container/CreateTransaction";
import { useDeleteTransaction } from "@/services/transactions/hooks/DELETE/useDeleteTransaction";
import { useListUsers } from "@/services/users/hooks/GET/useListUsers";
import * as S from "@/components/styles/pages.styles";

export type TransactionsModalTypes = "createTransaction";

export type ModalTypesHub = {
  [type in TransactionsModalTypes]: React.ReactNode;
};

export default function Transactions() {
  const { data: transactions } = useListTransactions();
  const { data: users } = useListUsers();
  const prices = transactions?.map((transaction) =>
    transaction.type === TransactionTypeEnum.OUTCOME
      ? -transaction.price
      : transaction.price
  );
  const totalIncome = users?.[0].totalIncome || 0;
  const { getIncome, getOutcome, getTotal, getPercent } = useResume(
    prices || ([] as any),
    totalIncome
  );

  const { mutate: triggerDeleteTransactionRequest, isLoading } =
    useDeleteTransaction();

  const [modalOpen, setModalOpen] = useState<TransactionsModalTypes | "">("");
  const [selectedTransaction, setSelectedTransaction] =
    useState<Transaction | null>(null);

  const handleCloseModal = () => setModalOpen("");

  const modalsList: ModalTypesHub = {
    createTransaction: (
      <CreateTransaction
        onClose={handleCloseModal}
        selectedTransaction={selectedTransaction}
      />
    ),
  };

  const createModal = useMemo(() => {
    if (modalOpen === "") return null;
    return modalsList[modalOpen];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalOpen]);

  const handleOpenModal = useCallback(
    (row: Transaction | null, modalType: TransactionsModalTypes | "") => {
      setSelectedTransaction(row);
      setModalOpen(modalType);
    },
    []
  );

  const handleDeleteTransaction = (id: string) => {
    triggerDeleteTransactionRequest(id);
  };

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
          <Button
            type="button"
            onClick={() => handleOpenModal(null, "createTransaction")}
          >
            Nova transação
          </Button>
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
            value={formatCurrency(totalIncome)}
            icon={<IconStatistic />}
          />
        </S.ResumeContainer>
        <S.TransactionsTable>
          <thead>
            <tr>
              <th style={{ width: "40%" }}>Transação</th>
              <th>Categoria</th>
              <th>Data</th>
              <th>Valor</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {transactions?.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <S.TransactionTitle>{transaction.name}</S.TransactionTitle>
                  <S.Category>{transaction.category}</S.Category>
                  <td>{dateFormatter.format(new Date(transaction.date))}</td>
                  <td>
                    <S.PriceHighlight variant={transaction.type}>
                      {transaction.type === TransactionTypeEnum.OUTCOME && "- "}
                      {priceFormatter.format(Number(transaction.price))}
                    </S.PriceHighlight>
                  </td>

                  <S.ActionsButton>
                    <button
                      type="button"
                      onClick={() =>
                        handleOpenModal(transaction, "createTransaction")
                      }
                    >
                      <FiEdit color="#969CB2" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDeleteTransaction(transaction.id)}
                    >
                      <FiTrash color="#969CB2" />
                    </button>
                  </S.ActionsButton>
                </tr>
              );
            })}
          </tbody>
        </S.TransactionsTable>
      </S.Content>
      <Modal open={modalOpen !== ""} onClose={() => setModalOpen("")}>
        {createModal}
      </Modal>
    </S.Wrapper>
  );
}
