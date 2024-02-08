import React from "react";

import { FiX } from "react-icons/fi";
import * as S from "./styles";

interface Props {
  children: React.ReactNode;
  open: boolean;
  onClose?: () => void;
}

export default function Modal({ children, open, onClose = () => "" }: Props) {
  if (!open) return null;

  const handleClose = () => {
    !!onClose && onClose();
  };

  return (
    <S.Overlay>
      <S.Paper>
        <S.CloseButton onClick={handleClose}>
          <FiX color="#012C50" size="24" />
        </S.CloseButton>
        {children}
      </S.Paper>
    </S.Overlay>
  );
}
