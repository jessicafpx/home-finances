import { useState } from "react";
import {
  Transaction,
  TransactionTypeEnum,
} from "@/services/transactions/contract";
import * as S from "./styles";
import {
  formatAmount,
  formatCurrency,
  formatToMoneyWithLocaleString,
  generateRandomId,
} from "@/utils";
import Button from "@/components/Button";
import { useCreateTransaction } from "@/services/transactions/hooks/POST/useListTransactions";

type TCreateTransaction = {
  onClose: () => void;
};

export default function CreateTransaction({ onClose }: TCreateTransaction) {
  const [transaction, setTransaction] = useState<Transaction>({
    id: "",
    date: "",
    category: "",
    price: "",
    name: "",
    type: TransactionTypeEnum.INCOME,
  });

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

  const { mutate: triggerCreateTransactionRequest, isLoading } =
    useCreateTransaction({
      onSuccess: () => {
        onClose();
      },
    });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currentDate = new Date().toISOString().split("T")[0];
    const newTransaction: Transaction = {
      ...transaction,
      id: generateRandomId(),
      date: new Date(currentDate),
      price: formatAmount(transaction.price as string),
    };
    triggerCreateTransactionRequest(newTransaction);
  };

  return (
    <S.Wrapper>
      <S.Title>Cadastrar transação</S.Title>
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
        </S.Select>
        <Button type="submit">Cadastrar</Button>
      </form>
    </S.Wrapper>
  );
}
