import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import IconButton from "../IconButton";
import {
  IconCategories,
  IconProgress,
  IconTransactions,
  LogoVertical,
} from "../icons";
import { FiLogOut } from "react-icons/fi";
import * as S from "./styles";

type MenuOption = {
  name: string;
  icon: JSX.Element;
  id: string;
};

export default function Navbar() {
  const [selectedMenuOption, setSelectedMenuOption] = useState("");
  const { push } = useRouter();

  const menuOptions: MenuOption[] = [
    {
      name: "Transações",
      icon: <IconTransactions />,
      id: "transactions",
    },
    {
      name: "Categorias",
      icon: <IconCategories />,
      id: "categories",
    },
    {
      name: "Progresso",
      icon: <IconProgress />,
      id: "progress",
    },
  ];

  useEffect(() => {
    if (window.location.pathname.includes("/transactions")) {
      setSelectedMenuOption("Transações");
    } else if (window.location.pathname.includes("/categories")) {
      setSelectedMenuOption("Categorias");
    } else if (window.location.pathname.includes("/progress")) {
      setSelectedMenuOption("Progresso");
    }
  }, []);

  const handleSelectMenuOption = (option: string) => {
    setSelectedMenuOption(option);

    switch (option) {
      case "Transações":
        push("/transactions");
        break;
      case "Categorias":
        push("/categories");
        break;
      case "Progresso":
        push("/progress");
        break;
    }
  };

  return (
    <S.Wrapper>
      <LogoVertical />
      <S.Menu>
        {menuOptions.map((option) => {
          return (
            <IconButton
              key={option.id}
              title={option.name}
              icon={option.icon}
              classBtn={selectedMenuOption === option.name ? "selected" : ""}
              callbackFunc={() => handleSelectMenuOption(option.name)}
            />
          );
        })}
      </S.Menu>
      <S.LogoutBtn type="button" onClick={() => push("/login")}>
        <FiLogOut size={32} color="#fff" />
      </S.LogoutBtn>
    </S.Wrapper>
  );
}
