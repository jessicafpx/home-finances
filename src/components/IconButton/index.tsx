import * as S from "./styles";

type TIconButton = {
  title: string;
  icon?: React.ReactNode;
  callbackFunc?: () => void;
  backgroundColor?: string;
  classBtn?: string;
};

export default function IconButton({
  title,
  icon,
  callbackFunc,
  classBtn,
}: TIconButton) {
  const handleOnClick = () => {
    if (callbackFunc) {
      callbackFunc();
    }
  };

  return (
    <S.Wrapper>
      <S.Btn type="button" onClick={handleOnClick} className={classBtn}>
        <>
          {title && title}
          {icon && icon}
        </>
      </S.Btn>
    </S.Wrapper>
  );
}
