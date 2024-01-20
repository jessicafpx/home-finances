import { ButtonHTMLAttributes } from "react";

import * as S from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  isDisabled?: boolean;
};

export default function Button({
  children,
  loading,
  isDisabled,
  ...rest
}: ButtonProps) {
  return (
    <S.Container
      disabled={isDisabled}
      isDisabled={isDisabled}
      type="button"
      {...rest}
    >
      {loading ? "Carregando..." : children}
    </S.Container>
  );
}
