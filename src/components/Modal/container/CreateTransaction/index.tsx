import { useState } from "react";
import {
  Transaction,
  TransactionTypeEnum,
} from "@/services/transactions/contract";
import * as S from "./styles";
import { formatCurrency, generateRandomId } from "@/utils";
import Button from "@/components/Button";

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currentDate = new Date().toISOString().split("T")[0];
    const newTransaction: Transaction = {
      ...transaction,
      id: generateRandomId(),
      date: currentDate,
      price: formatCurrency(Number(transaction.price)),
    };
    setTransaction(newTransaction);
    console.log(newTransaction);
    onClose();
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
            onChange={handleInputChange}
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
