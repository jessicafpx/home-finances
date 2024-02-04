import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import { IconTransactions } from "@/components/icons";

import * as S from "@/components/styles/pages.styles";

export default function Transactions() {
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

          <Button type="button">Nova transação</Button>
        </S.Header>
      </S.Content>
    </S.Wrapper>
  );
}
