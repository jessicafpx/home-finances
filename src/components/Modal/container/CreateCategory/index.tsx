import { useState } from "react";
import { TransactionTypeEnum } from "@/services/transactions/contract";
import { generateRandomId } from "@/utils";
import Button from "@/components/Button";
import { Category, User } from "@/services/users/contract";
import { useUpdateUser } from "@/services/users/hooks/PUT/useUpdateUsers";
import * as S from "./styles";

type TCreateCategory = {
  onClose: () => void;
  selectedCategory?: Category | null;
  selectedUser?: User;
};

export default function CreateCategory({
  onClose,
  selectedCategory,
  selectedUser,
}: TCreateCategory) {
  const [category, setCategory] = useState<Category>({
    id: selectedCategory ? selectedCategory.id : "",
    name: selectedCategory ? selectedCategory.name : "",
    type: selectedCategory ? selectedCategory.type : TransactionTypeEnum.INCOME,
    percent: selectedCategory ? selectedCategory.percent : null,
  });

  const { mutate: triggerUpdateUserRequest, isLoading } = useUpdateUser({
    onSuccess: () => {
      onClose();
    },
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setCategory({ ...category, [name]: value });
  };

  const isButtonDisabled =
    !category.name ||
    !category.type ||
    (category.type === TransactionTypeEnum.OUTCOME && !category.percent);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload: Category = {
      ...category,
      percent:
        category.type === TransactionTypeEnum.INCOME ? null : category.percent,
    };

    if (!selectedCategory) {
      payload.id = generateRandomId();
    }

    const categoriesToAdd = selectedUser?.categories || [];

    const updatedUser = {
      ...selectedUser,
      categories: selectedCategory
        ? selectedUser?.categories?.map((item) =>
            item.id === selectedCategory?.id
              ? {
                  ...item,
                  ...payload,
                }
              : item
          )
        : [...categoriesToAdd, payload],
    };

    console.log("updatedUser", updatedUser);
    triggerUpdateUserRequest(updatedUser as User);
  };

  return (
    <S.Wrapper>
      <S.Title>
        {selectedCategory ? "Alterar categoria" : "Cadastrar categoria"}
      </S.Title>
      <form onSubmit={handleSubmit}>
        <S.InputWrapper>
          <S.Label htmlFor="name">Nome:</S.Label>
          <S.Input
            type="text"
            name="name"
            value={category.name}
            onChange={handleInputChange}
          />
        </S.InputWrapper>
        <S.RadiosBtn>
          <S.RadioButtonLabel>
            <input
              type="radio"
              name="type"
              value={TransactionTypeEnum.INCOME}
              checked={category.type === TransactionTypeEnum.INCOME}
              onChange={handleInputChange}
            />
            Entrada
          </S.RadioButtonLabel>
          <S.RadioButtonLabel>
            <input
              type="radio"
              name="type"
              value={TransactionTypeEnum.OUTCOME}
              checked={category.type === TransactionTypeEnum.OUTCOME}
              onChange={handleInputChange}
            />
            Saída
          </S.RadioButtonLabel>
        </S.RadiosBtn>

        {category.type === TransactionTypeEnum.OUTCOME && (
          <S.InputWrapper>
            <S.Label htmlFor="name">Porcentagem:</S.Label>
            <S.Input
              type="number"
              name="percent"
              value={Number(category.percent)}
              onChange={handleInputChange}
            />
          </S.InputWrapper>
        )}

        <Button type="submit" loading={isLoading} isDisabled={isButtonDisabled}>
          {selectedCategory ? "Alterar" : "Cadastrar"}
        </Button>
      </form>
    </S.Wrapper>
  );
}
