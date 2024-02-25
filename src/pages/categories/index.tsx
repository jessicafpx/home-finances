import { useCallback, useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import { IconCategories } from "@/components/icons";
import Button from "@/components/Button";
import { FiEdit, FiTrash } from "react-icons/fi";
import Modal from "@/components/Modal";
import { Category, User } from "@/services/users/contract";
import { useListUsers } from "@/services/users/hooks/GET/useListUsers";
import { TransactionTypeEnum } from "@/services/transactions/contract";
import { priceFormatter } from "@/utils";
import CreateCategory from "@/components/Modal/container/CreateCategory";
import { useUpdateUser } from "@/services/users/hooks/PUT/useUpdateUsers";
import * as S from "@/components/styles/pages.styles";

export type CategoriesModalTypes = "createCategory";

export type ModalTypesHub = {
  [type in CategoriesModalTypes]: React.ReactNode;
};

export default function Categories() {
  const [modalOpen, setModalOpen] = useState<CategoriesModalTypes | "">("");
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );

  const { data: users } = useListUsers();

  const { mutate: triggerUpdateUserRequest } = useUpdateUser();

  const selectedUser = users?.[0];
  const categories = selectedUser?.categories;
  const totalIncome = selectedUser?.totalIncome || 0;

  const handleCloseModal = () => setModalOpen("");

  const modalsList: ModalTypesHub = {
    createCategory: (
      <CreateCategory
        onClose={handleCloseModal}
        selectedCategory={selectedCategory}
        selectedUser={selectedUser}
      />
    ),
  };

  const createModal = useMemo(() => {
    if (modalOpen === "") return null;
    return modalsList[modalOpen];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalOpen]);

  const handleOpenModal = useCallback(
    (row: Category | null, modalType: CategoriesModalTypes | "") => {
      setSelectedCategory(row);
      setModalOpen(modalType);
    },
    []
  );

  const handleDeleteCategory = (id: string) => {
    const updatedCategories = selectedUser?.categories?.filter(
      (category) => category.id !== id
    );

    const updatedUser = {
      ...selectedUser,
      categories: updatedCategories,
    };

    triggerUpdateUserRequest(updatedUser as User);
  };

  const calculatePercentage = (percent: number | null) => {
    if (!percent) return "-";
    return `${percent}%`;
  };

  const calculatePercentageValue = (percent: number | null) => {
    if (!percent) return "-";
    const percentageValue = (totalIncome * percent) / 100;
    return priceFormatter.format(percentageValue);
  };

  return (
    <S.Wrapper>
      <Navbar />
      <S.Content>
        <S.Header>
          <S.TitleContainer>
            <S.IconBox>
              <IconCategories color="#2E117B" size={24} />
            </S.IconBox>
            <S.Title>Categorias</S.Title>
          </S.TitleContainer>
          <Button
            type="button"
            onClick={() => handleOpenModal(null, "createCategory")}
          >
            Nova categoria
          </Button>
        </S.Header>
        <S.TransactionsTable>
          <thead>
            <tr>
              <th style={{ width: "25%" }}>Categoria</th>
              <th>Tipo</th>
              <th>Porcentagem</th>
              <th>Valor calculado</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {categories?.map((category) => {
              return (
                <tr key={category.id}>
                  <S.Category style={{ width: "25%" }}>
                    {category.name}
                  </S.Category>
                  <td>
                    <S.PriceHighlight variant={category?.type}>
                      {category.type === TransactionTypeEnum.INCOME
                        ? "Entrada"
                        : "Saída"}
                    </S.PriceHighlight>
                  </td>

                  <td>{calculatePercentage(category.percent)}</td>
                  <td>{calculatePercentageValue(category.percent)}</td>

                  <S.ActionsButton>
                    <button
                      type="button"
                      onClick={() =>
                        handleOpenModal(category, "createCategory")
                      }
                    >
                      <FiEdit color="#969CB2" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDeleteCategory(category.id)}
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
