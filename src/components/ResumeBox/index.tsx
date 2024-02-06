import React, { ReactNode } from "react";

import * as S from "./styles";

type TResumeBox = {
  icon: ReactNode;
  title: string;
  value: string | number;
};

export default function ResumeBox({ icon, title, value }: TResumeBox) {
  return (
    <S.Wrapper>
      <S.Title>
        {icon}
        {title}
      </S.Title>
      <S.Subtitle>
        <span>R$</span>
        {value}
      </S.Subtitle>
    </S.Wrapper>
  );
}
