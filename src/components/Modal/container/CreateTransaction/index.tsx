import { useState } from "react";
import {
  Transaction,
  TransactionTypeEnum,
} from "@/services/transactions/contract";
import {
  formatAmount,
  formatCurrencyWithR$,
  formatToMoneyWithLocaleString,
  generateRandomId,
} from "@/utils";
import Button from "@/components/Button";
import { useCreateTransaction } from "@/services/transactions/hooks/POST/useCreateTransaction";
import * as S from "./styles";
import { useUpdateTransaction } from "@/services/transactions/hooks/PUT/useUpdateTransaction";

type TCreateTransaction = {
  onClose: () => void;
  selectedTransaction?: Transaction | null;
};

export default function CreateTransaction({
  onClose,
  selectedTransaction,
}: TCreateTransaction) {
  const [transaction, setTransaction] = useState<Transaction>({
    id: selectedTransaction ? selectedTransaction.id : "",
    date: selectedTransaction ? selectedTransaction.date : "",
    category: selectedTransaction ? selectedTransaction.category : "",
    price: selectedTransaction
      ? formatCurrencyWithR$(Number(selectedTransaction.price))
      : "",
    name: selectedTransaction ? selectedTransaction.name : "",
    type: selectedTransaction
      ? selectedTransaction.type
      : TransactionTypeEnum.INCOME,
  });

  console.log(selectedTransaction);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setTransaction({ ...transaction, [name]: value });
  };

  const handleInputPriceChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const numericValue = value.replace(/[^0-9]/g, "");
    const formattedValue = formatToMoneyWithLocaleString(Number(numericValue));

    setTransaction({ ...transaction, [name]: formattedValue });
  };

  const isButtonDisabled =
    !transaction.category ||
    !transaction.name ||
    !transaction.price ||
    transaction.price === "R$ 0,00";

  const {
    mutate: triggerCreateTransactionRequest,
    isLoading: isCreateLoading,
  } = useCreateTransaction({
    onSuccess: () => {
      onClose();
    },
  });

  const {
    mutate: triggerUpdateTransactionRequest,
    isLoading: isUpdateLoading,
  } = useUpdateTransaction({
    onSuccess: () => {
      onClose();
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currentDate = new Date().toISOString().split("T")[0];
    const newTransaction: Transaction = {
      ...transaction,
      date: new Date(currentDate),
      price: formatAmount(transaction.price as string),
    };
    if (selectedTransaction) {
      triggerUpdateTransactionRequest(newTransaction);
    } else {
      triggerCreateTransactionRequest(newTransaction);
    }
  };

  return (
    <S.Wrapper>
      <S.Title>
        {selectedTransaction ? "Alterar transação" : "Cadastrar transação"}
      </S.Title>
      <form onSubmit={handleSubmit}>
        <S.InputWrapper>
          <S.Label htmlFor="name">Nome:</S.Label>
          <S.Input
            type="text"
            name="name"
            value={transaction.name}
            onChange={handleInputChange}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label htmlFor="name">Valor:</S.Label>
          <S.Input
            name="price"
            value={transaction.price}
            onChange={handleInputPriceChange}
          />
        </S.InputWrapper>
        <S.RadiosBtn>
          <S.RadioButtonLabel>
            <input
              type="radio"
              name="type"
              value={TransactionTypeEnum.INCOME}
              checked={transaction.type === TransactionTypeEnum.INCOME}
              onChange={handleInputChange}
            />
            Entrada
          </S.RadioButtonLabel>
          <S.RadioButtonLabel>
            <input
              type="radio"
              name="type"
              value={TransactionTypeEnum.OUTCOME}
              checked={transaction.type === TransactionTypeEnum.OUTCOME}
              onChange={handleInputChange}
            />
            Saída
          </S.RadioButtonLabel>
        </S.RadiosBtn>
        <S.Select
          name="category"
          value={transaction.category}
          onChange={handleInputChange}
        >
          <option value="">Selecione uma categoria</option>
          <option value="alimentação">Alimentação</option>
          <option value="transporte">Transporte</option>
          <option value="educação">Educação</option>
          <option value="saúde">Saúde</option>
          <option value="lazer">Lazer</option>
          <option value="renda">Renda</option>
        </S.Select>
        <Button
          type="submit"
          loading={isCreateLoading || isUpdateLoading}
          isDisabled={isButtonDisabled}
        >
          {selectedTransaction ? "Alterar" : "Cadastrar"}
        </Button>
      </form>
    </S.Wrapper>
  );
}
