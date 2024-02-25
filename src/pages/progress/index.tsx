import Navbar from "@/components/Navbar";
import { IconProgress } from "@/components/icons";
import * as S from "@/components/styles/pages.styles";

export default function Progress() {
  return (
    <S.Wrapper>
      <Navbar />
      <S.Content>
        <S.Header>
          <S.TitleContainer>
            <S.IconBox>
              <IconProgress color="#2E117B" size={24} />
            </S.IconBox>
            <S.Title>Progresso</S.Title>
          </S.TitleContainer>
        </S.Header>
      </S.Content>
    </S.Wrapper>
  );
}
